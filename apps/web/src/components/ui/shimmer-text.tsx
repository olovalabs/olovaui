"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ShimmerTextProps {
  /** The text to render. */
  text: string;
  /** CSS class for the wrapper. */
  className?: string;
  /** Colors defining the gradient stops. At least 2 required. */
  colors?: [string, ...string[]];
  /** Animation speed — the duration of one full cycle in seconds. @default 4 */
  cycleDuration?: number;
  /** Gradient angle in degrees. @default 90 (left-to-right) */
  angle?: number;
  /** Pauses the shimmer on hover. @default true */
  pauseOnHover?: boolean;
  /** HTML tag for the container. @default "span" */
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /** Font size override applied via inline style. */
  fontSize?: string;
  /** Font weight override applied via inline style. */
  fontWeight?: string;
  /** When true the marquee runs continuously without resetting. @default false */
  seamless?: boolean;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

type PerfTimer = { elapsed: number; last: number };

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export const ShimmerText = ({
  text,
  className,
  colors = ["#6366f1", "#8b5cf6", "#d946ef", "#f43f5e"],
  cycleDuration = 4,
  angle = 90,
  pauseOnHover = true,
  as: Tag = "span",
  fontSize,
  fontWeight,
  seamless = false,
}: ShimmerTextProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const rafRef = useRef<number | null>(null);
  const timerRef = useRef<PerfTimer>({ elapsed: 0, last: 0 });
  const elemRef = useRef<HTMLSpanElement | null>(null);

  // Refs to hold the latest values without re-creating the animation loop.
  const isPausedRef = useRef(isPaused);
  const cycleDurationRef = useRef(cycleDuration);
  const seamlessRef = useRef(seamless);

  // Sync mutable refs in effects to avoid render-time ref writes.
  useEffect(() => {
    isPausedRef.current = isPaused;
  });
  useEffect(() => {
    cycleDurationRef.current = cycleDuration;
  });
  useEffect(() => {
    seamlessRef.current = seamless;
  });

  // Build the gradient string once and cache it.
  const gradient = useMemo(() => {
    return `linear-gradient(${angle}deg, ${colors.join(", ")}, ${colors[0]})`;
  }, [colors, angle]);

  // ── Animation loop (uses refs to avoid re-creating the callback) ────────
  useEffect(() => {
    // Check for reduced-motion preference via CSS media query
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return; // respect reduced motion → no animation

    const animate = (timestamp: number) => {
      if (isPausedRef.current) {
        timerRef.current.last = 0;
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      if (timerRef.current.last === 0) {
        timerRef.current.last = timestamp;
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      const delta = timestamp - timerRef.current.last;
      timerRef.current.last = timestamp;
      timerRef.current.elapsed += delta;

      const cycleMs = cycleDurationRef.current * 1000;
      let progress = (timerRef.current.elapsed % cycleMs) / cycleMs;

      if (seamlessRef.current) {
        progress = (timerRef.current.elapsed / cycleMs) % 1;
      }

      const bgPos = progress * 200;

      if (elemRef.current) {
        elemRef.current.style.backgroundPositionX = `${bgPos}%`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, []); // runs once — all dynamic values read from refs

  // Restart timer when cycleDuration changes
  useEffect(() => {
    timerRef.current.elapsed = 0;
    timerRef.current.last = 0;
  }, [cycleDuration]);

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsPaused(true);
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) {
      setIsPaused(false);
      timerRef.current.last = 0;
    }
  }, [pauseOnHover]);

  return (
    <Tag
      ref={elemRef as never}
      className={cn("inline-block select-none", className)}
      style={{
        backgroundImage: gradient,
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
        fontSize: fontSize ?? undefined,
        fontWeight: fontWeight ?? undefined,
        backgroundPositionX: "0%",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={text}
    >
      {text}
    </Tag>
  );
};

export default ShimmerText;
