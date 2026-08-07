"use client";

import React, {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface SpotlightTextProps {
  /** The full text content. Words will be split on whitespace. */
  children: string;
  /** CSS class for the container. */
  className?: string;
  /**
   * The index of the word to highlight. When omitted the component runs
   * in "auto" mode — it highlights words as they enter the viewport
   * via scroll observation.
   */
  activeIndex?: number;
  /** CSS class applied to the highlighted word. */
  highlightClassName?: string;
  /** CSS class applied to non-highlighted words. */
  wordClassName?: string;
  /** Inline style for the highlighted word. */
  highlightStyle?: React.CSSProperties;
  /** Inline style for non-highlighted words. */
  wordStyle?: React.CSSProperties;
  /** Scroll threshold ratio (0–1) for auto mode. @default 0.5 */
  scrollThreshold?: number;
  /** HTML tag. @default "p" */
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
  /** Scroll root element reference for auto mode. @default window */
  scrollRoot?: React.RefObject<HTMLElement | null> | null;
  /** Debounce delay in ms for scroll handler. @default 50 */
  debounceMs?: number;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function useReducedMotionQuery(): boolean {
  const subscribe = useCallback((onStoreChange: () => void) => {
    if (typeof window === "undefined") {
      return () => {};
    }
    const mq = window.matchMedia(REDUCED_MOTION_QUERY);
    mq.addEventListener("change", onStoreChange);
    return () => mq.removeEventListener("change", onStoreChange);
  }, []);

  const getSnapshot = useCallback(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(REDUCED_MOTION_QUERY).matches;
  }, []);

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export const SpotlightText = ({
  children,
  className,
  activeIndex: controlledActiveIndex,
  highlightClassName,
  wordClassName,
  highlightStyle,
  wordStyle,
  scrollThreshold = 0.5,
  as: Tag = "p",
  scrollRoot = null,
  debounceMs = 50,
}: SpotlightTextProps) => {
  const prefersReduced = useReducedMotionQuery();
  const uid = useId();
  const containerRef = useRef<HTMLElement | null>(null);
  const wordRefs = useRef<Map<number, HTMLSpanElement>>(new Map());
  const [autoActiveIndex, setAutoActiveIndex] = useState(-1);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Keep scrollRoot.current accessible without listing the ref object in deps.
  const scrollRootRef = useRef(scrollRoot);
  useEffect(() => {
    scrollRootRef.current = scrollRoot;
  });

  // Split into words (preserving multiple spaces is not critical here)
  const words = useMemo(() => {
    if (!children) return [];
    return children.trim().split(/\s+/);
  }, [children]);

  const activeIndex =
    controlledActiveIndex !== undefined ? controlledActiveIndex : autoActiveIndex;

  // ── Auto scroll-spy ──────────────────────────────────────────────────────
  const computeActiveWord = useCallback(() => {
    if (!containerRef.current || words.length === 0) return;

    const root = scrollRootRef.current;
    const rootEl = root?.current ?? null;
    const rootRect = rootEl
      ? rootEl.getBoundingClientRect()
      : { top: 0, bottom: window.innerHeight, height: window.innerHeight };

    const thresholdPx = rootRect.height * scrollThreshold;
    const lineY = rootRect.top + thresholdPx;

    let bestIdx = -1;
    let bestDistance = Infinity;

    wordRefs.current.forEach((el, idx) => {
      const rect = el.getBoundingClientRect();
      const wordMidY = rect.top + rect.height / 2;
      const distance = Math.abs(wordMidY - lineY);

      if (distance < bestDistance) {
        bestDistance = distance;
        bestIdx = idx;
      }
    });

    setAutoActiveIndex(bestIdx);
  }, [words.length, scrollThreshold]);

  useEffect(() => {
    if (controlledActiveIndex !== undefined) return; // controlled mode
    if (prefersReduced) {
      return; // no scroll listeners needed; render handles "all highlighted"
    }

    // Initial calculation — defer to next frame to avoid setState within effect body
    const initialFrame = requestAnimationFrame(computeActiveWord);

    const handleScroll = () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
      debounceTimer.current = setTimeout(computeActiveWord, debounceMs);
    };

    const rootEl = scrollRootRef.current?.current ?? null;
    if (rootEl) {
      rootEl.addEventListener("scroll", handleScroll, { passive: true });
    } else {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      cancelAnimationFrame(initialFrame);
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
      if (rootEl) {
        rootEl.removeEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [controlledActiveIndex, computeActiveWord, debounceMs, prefersReduced]);

  // Recalculate on resize
  useEffect(() => {
    if (controlledActiveIndex !== undefined) return;
    const handleResize = () => computeActiveWord();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [controlledActiveIndex, computeActiveWord]);

  // ── Render ───────────────────────────────────────────────────────────────
  const highlightAll = prefersReduced && controlledActiveIndex === undefined;

  return (
    <Tag
      ref={containerRef as React.Ref<HTMLParagraphElement>}
      className={cn("", className)}
      aria-label={children}
    >
      {words.map((word, idx) => {
        const isActive = highlightAll || activeIndex === idx;

        return (
          <span key={`${uid}-w${idx}`} style={{ display: "inline" }}>
            <span
              ref={(el) => {
                if (el) {
                  wordRefs.current.set(idx, el);
                } else {
                  wordRefs.current.delete(idx);
                }
              }}
              className={cn(
                "transition-all duration-300 ease-out",
                wordClassName,
                isActive && highlightClassName,
                isActive && "scale-105",
              )}
              style={{
                display: "inline-block",
                willChange: isActive
                  ? "transform, color, background-color"
                  : undefined,
                ...wordStyle,
                ...(isActive ? highlightStyle : {}),
              }}
            >
              {word}
            </span>
            {/* Space between words */}
            {idx < words.length - 1 && " "}
          </span>
        );
      })}
    </Tag>
  );
};

export default SpotlightText;
