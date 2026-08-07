"use client";

import React, { useState } from "react";
import { RevealText } from "@/components/ui/reveal-text";

const DIRECTIONS = ["up", "down", "left", "right"] as const;

export function RevealTextDemo() {
  const [direction, setDirection] = useState<(typeof DIRECTIONS)[number]>("up");
  const [key, setKey] = useState(0);

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white px-4 py-8 dark:border-neutral-800 dark:bg-neutral-950 sm:rounded-3xl sm:px-6 sm:py-12">
      <header className="space-y-2 text-center sm:space-y-3">
        <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl md:text-4xl">
          RevealText
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 sm:text-base md:text-lg">
          Staggered character reveal with configurable direction, speed, and easing.
        </p>
      </header>

      <main className="mt-8 flex flex-col items-center gap-8">
        {/* Animated demo */}
        <div className="text-center">
          <RevealText
            key={key}
            direction={direction}
            staggerDelay={0.04}
            duration={0.55}
            className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl md:text-5xl"
          >
            Every great design begins with a single letter.
          </RevealText>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Direction:{" "}
          </span>
          {DIRECTIONS.map((d) => (
            <button
              key={d}
              onClick={() => {
                setDirection(d);
                setKey((k) => k + 1);
              }}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${
                direction === d
                  ? "border-indigo-500 bg-indigo-50 text-indigo-700 dark:border-indigo-400 dark:bg-indigo-900/30 dark:text-indigo-300"
                  : "border-neutral-300 bg-white text-neutral-600 hover:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}

export default RevealTextDemo;
