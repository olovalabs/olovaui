"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface TypewriterTextProps {
  /** Array of strings to type out sequentially. */
  phrases: string[];
  /** Milliseconds per character typed. @default 80 */
  typingSpeed?: number;
  /** Milliseconds to pause after typing a phrase before deleting. @default 2000 */
  pauseDuration?: number;
  /** Milliseconds per character deleted (backspace). @default 40 */
  deletingSpeed?: number;
  /** Whether to loop back to the first phrase. @default true */
  loop?: boolean;
  /** Show a blinking cursor. @default true */
  showCursor?: boolean;
  /** Custom cursor character. @default "|" */
  cursorChar?: string;
  /** CSS class applied to the wrapper span. */
  className?: string;
  /** CSS class for the cursor element. */
  cursorClassName?: string;
  /** Called each time a phrase finishes typing. */
  onPhraseComplete?: (phrase: string, index: number) => void;
  /** Called when the full cycle (type + delete) finishes. */
  onCycleComplete?: (index: number) => void;
  /** HTML tag. @default "span" */
  as?: "span" | "p" | "h1" | "h2" | "h3" | "div";
}

// ---------------------------------------------------------------------------
// Phase enum
// ---------------------------------------------------------------------------

type Phase = "typing" | "pausing" | "deleting" | "idle";

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export const TypewriterText = ({
  phrases,
  typingSpeed = 80,
  pauseDuration = 2000,
  deletingSpeed = 40,
  loop = true,
  showCursor = true,
  cursorChar = "|",
  className,
  cursorClassName,
  onPhraseComplete,
  onCycleComplete,
  as: Tag = "span",
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  // Mutable refs so timeouts can read latest state without re-triggering effects
  const phaseRef = useRef<Phase>("idle");
  const textRef = useRef("");
  const phraseIdxRef = useRef(0);
  const charIdxRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const blinkRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const onPhraseCompleteRef = useRef(onPhraseComplete);
  const onCycleCompleteRef = useRef(onCycleComplete);
  const prefersReducedRef = useRef(false);

  useEffect(() => {
    onPhraseCompleteRef.current = onPhraseComplete;
    onCycleCompleteRef.current = onCycleComplete;
  });

  // Detect reduced motion once
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedRef.current = mq.matches;
    const handler = (e: MediaQueryListEvent) => {
      prefersReducedRef.current = e.matches;
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Guard: empty phrases array
  const safePhrases = useMemo(
    () => (phrases.length === 0 ? [""] : phrases),
    [phrases],
  );

  // ── Cursor blink ────────────────────────────────────────────────────────
  useEffect(() => {
    if (!showCursor) {
      setCursorVisible(false);
      return;
    }

    blinkRef.current = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);

    return () => {
      if (blinkRef.current) clearInterval(blinkRef.current);
    };
  }, [showCursor]);

  // ── Typewriter state machine ────────────────────────────────────────────
  const tick = useCallback(() => {
    const currentPhrase = safePhrases[phraseIdxRef.current] ?? "";

    if (phaseRef.current === "typing") {
      if (charIdxRef.current < currentPhrase.length) {
        charIdxRef.current += 1;
        textRef.current = currentPhrase.slice(0, charIdxRef.current);
        setDisplayText(textRef.current);

        const speed = prefersReducedRef.current ? 0 : typingSpeed;
        timeoutRef.current = setTimeout(tick, speed);
      } else {
        // Finished typing
        onPhraseCompleteRef.current?.(
          currentPhrase,
          phraseIdxRef.current,
        );
        phaseRef.current = "pausing";

        const delay = prefersReducedRef.current ? 0 : pauseDuration;
        timeoutRef.current = setTimeout(tick, delay);
      }
      return;
    }

    if (phaseRef.current === "pausing") {
      phaseRef.current = "deleting";
      timeoutRef.current = setTimeout(tick, prefersReducedRef.current ? 0 : 100);
      return;
    }

    if (phaseRef.current === "deleting") {
      if (charIdxRef.current > 0) {
        charIdxRef.current -= 1;
        textRef.current = currentPhrase.slice(0, charIdxRef.current);
        setDisplayText(textRef.current);

        const speed = prefersReducedRef.current ? 0 : deletingSpeed;
        timeoutRef.current = setTimeout(tick, speed);
      } else {
        // Finished deleting
        onCycleCompleteRef.current?.(phraseIdxRef.current);
        const nextIdx = phraseIdxRef.current + 1;

        if (nextIdx < safePhrases.length) {
          phraseIdxRef.current = nextIdx;
        } else if (loop) {
          phraseIdxRef.current = 0;
        } else {
          // End — stay idle with the last phrase visible
          phaseRef.current = "idle";
          setDisplayText(safePhrases[safePhrases.length - 1] ?? "");
          return;
        }

        phaseRef.current = "typing";
        timeoutRef.current = setTimeout(tick, prefersReducedRef.current ? 0 : 150);
      }
      return;
    }

    // "idle" → nothing scheduled
  }, [safePhrases, typingSpeed, pauseDuration, deletingSpeed, loop]);

  // Kick off on mount
  useEffect(() => {
    phraseIdxRef.current = 0;
    charIdxRef.current = 0;
    textRef.current = "";
    phaseRef.current = "typing";
    setDisplayText("");

    timeoutRef.current = setTimeout(tick, 200);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <Tag className={cn("inline", className)} aria-label={displayText || "Typewriter text"}>
      <span aria-hidden="true">{displayText}</span>
      {showCursor && (
        <span
          aria-hidden="true"
          className={cn(
            "inline-block transition-opacity duration-100",
            cursorVisible ? "opacity-100" : "opacity-0",
            cursorClassName,
          )}
          style={{
            fontWeight: 100,
            marginLeft: "0.05em",
          }}
        >
          {cursorChar}
        </span>
      )}
      <span className="sr-only">{displayText}</span>
    </Tag>
  );
};

export default TypewriterText;
