"use client";

import React, { useState } from "react";
import { SpotlightText } from "@/components/ui/spotlight-text";

const SAMPLE_TEXT =
  "Design is not just what it looks like and feels like. Design is how it works. Simplicity is the ultimate sophistication. Every great design begins with an even better story.";

export function SpotlightTextDemo() {
  const [mode, setMode] = useState<"auto" | "manual">("auto");
  const [manualIdx, setManualIdx] = useState(0);

  const wordCount = SAMPLE_TEXT.split(/\s+/).length;

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white px-4 py-8 dark:border-neutral-800 dark:bg-neutral-950 sm:rounded-3xl sm:px-6 sm:py-12">
      <header className="space-y-2 text-center sm:space-y-3">
        <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl md:text-4xl">
          SpotlightText
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 sm:text-base md:text-lg">
          Scroll-triggered word highlight — words light up as they cross the viewport threshold. Toggle manual mode to control the highlight with a slider.
        </p>
      </header>

      <main className="mt-8 flex flex-col items-center gap-8">
        {/* Spacer to allow scrolling */}
        <div className="w-full max-w-2xl rounded-xl border border-neutral-100 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50 sm:p-8">
          <SpotlightText
            activeIndex={mode === "manual" ? manualIdx : undefined}
            className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-xl"
            highlightClassName="text-indigo-600 dark:text-indigo-400 font-bold"
            wordClassName="text-neutral-400 dark:text-neutral-500"
            scrollThreshold={0.5}
          >
            {SAMPLE_TEXT}
          </SpotlightText>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => setMode(mode === "auto" ? "manual" : "auto")}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
              mode === "auto"
                ? "border-indigo-500 bg-indigo-50 text-indigo-700 dark:border-indigo-400 dark:bg-indigo-900/30 dark:text-indigo-300"
                : "border-amber-500 bg-amber-50 text-amber-700 dark:border-amber-400 dark:bg-amber-900/30 dark:text-amber-300"
            }`}
          >
            Mode: {mode === "auto" ? "Scroll Spy" : "Manual Slider"}
          </button>

          {mode === "manual" && (
            <label className="flex items-center gap-2 text-xs font-medium text-neutral-600 dark:text-neutral-400">
              Word: {manualIdx}
              <input
                type="range"
                min={0}
                max={wordCount - 1}
                value={manualIdx}
                onChange={(e) => setManualIdx(parseInt(e.target.value, 10))}
                className="w-32 accent-indigo-500"
              />
            </label>
          )}
        </div>

        {/* Scroll hint */}
        {mode === "auto" && (
          <p className="text-xs text-neutral-400 dark:text-neutral-500">
            Scroll the page up and down to see words highlight as they cross the center of the viewport.
          </p>
        )}
      </main>
    </div>
  );
}

export default SpotlightTextDemo;
