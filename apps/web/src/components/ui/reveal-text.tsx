"use client";

import React, { useId, useMemo } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type RevealDirection = "up" | "down" | "left" | "right";

export interface RevealTextProps {
  /** The text content to animate. */
  children: string;
  /** Direction characters slide in from. @default "up" */
  direction?: RevealDirection;
  /** Delay (in seconds) between each character's animation. @default 0.03 */
  staggerDelay?: number;
  /** Duration (in seconds) of each character's animation. @default 0.5 */
  duration?: number;
  /** Delay (in seconds) before the first character animates. @default 0 */
  initialDelay?: number;
  /** CSS class applied to the outermost wrapper. */
  className?: string;
  /** HTML element to render as the container. @default "span" */
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
  /** When true, plays the animation in reverse (exit animation). @default false */
  reverse?: boolean;
  /** Callback fired when the animation finishes for all characters. */
  onAnimationComplete?: () => void;
  /** Easing curve name from framer-motion. @default "easeOut" */
  easing?: "easeIn" | "easeOut" | "easeInOut" | "linear";
  /** Makes characters inline-block so word-wrapping still applies. @default true */
  preserveWhitespace?: boolean;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const DIRECTION_OFFSET: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
};

const EASING_VALUES = {
  easeIn: [0.42, 0, 1, 1] as const,
  easeOut: [0, 0, 0.58, 1] as const,
  easeInOut: [0.42, 0, 0.58, 1] as const,
  linear: [0, 0, 1, 1] as const,
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export const RevealText = ({
  children,
  direction = "up",
  staggerDelay = 0.03,
  duration = 0.5,
  initialDelay = 0,
  className,
  as: Tag = "span",
  reverse = false,
  onAnimationComplete,
  easing = "easeOut",
  preserveWhitespace = true,
}: RevealTextProps) => {
  const prefersReduced = useReducedMotion();
  const uid = useId();

  const offset = DIRECTION_OFFSET[direction];
  const easeCurve = EASING_VALUES[easing];

  // Split text into an array of { char, id } so each character stays
  // stable across re-renders.
  const characters = useMemo(() => {
    if (!children) return [];
    return Array.from(children).map((char, i) => ({
      char,
      id: `${uid}-c${i}`,
    }));
  }, [children, uid]);

  // variants for each character span
  const charVariants: Variants = useMemo(
    () => ({
      offscreen: {
        opacity: 0,
        x: offset.x,
        y: offset.y,
        filter: "blur(6px)",
        scale: 0.92,
      },
      onscreen: {
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
        transition: {
          duration: prefersReduced ? 0 : duration,
          ease: easeCurve,
        },
      },
    }),
    [offset, duration, easeCurve, prefersReduced],
  );

  // When reduced motion is preferred, show all characters instantly.
  const animateState = prefersReduced
    ? "onscreen"
    : reverse
      ? "offscreen"
      : "onscreen";

  return (
    <Tag
      className={cn("inline", className)}
      aria-label={children}
      role="text"
      style={{
        // Prevent inline layout jumping on the outer element
        display: Tag === "span" ? "inline" : undefined,
      }}
    >
      {characters.map(({ char, id }, idx) => {
        const transitionDelay = prefersReduced
          ? 0
          : initialDelay + idx * staggerDelay;

        return (
          <motion.span
            key={id}
            variants={charVariants}
            initial="offscreen"
            animate={animateState}
            transition={{ delay: transitionDelay }}
            aria-hidden="true"
            style={{
              display: preserveWhitespace
                ? char === " "
                  ? "inline"
                  : "inline-block"
                : "inline-block",
              whiteSpace: char === " " ? "pre" : undefined,
              willChange: "transform, opacity, filter",
            }}
            onAnimationComplete={
              idx === characters.length - 1
                ? onAnimationComplete
                : undefined
            }
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}

      {/* Screen-reader only: plain text fallback */}
      <span className="sr-only">{children}</span>
    </Tag>
  );
};

export default RevealText;
