"use client";

import React, { useState, useCallback } from "react";
import { TypewriterText } from "@/components/ui/typewriter-text";

const PHRASE_SETS = [
  {
    label: "Developer",
    phrases: [
      "Build beautiful interfaces.",
      "Ship with confidence.",
      "Delight your users.",
    ],
  },
  {
    label: "Designer",
    phrases: [
      "Form follows function.",
      "Less, but better.",
      "Every pixel matters.",
    ],
  },
  {
    label: "Minimal",
    phrases: ["Hello.", "World."],
  },
];

export function TypewriterTextDemo() {
  const [phraseSet, setPhraseSet] = useState(0);
  const [key, setKey] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [loop, setLoop] = useState(true);
  const [speed, setSpeed] = useState(80);

  const current = PHRASE_SETS[phraseSet];

  const handleSwitch = useCallback((idx: number) => {
    setPhraseSet(idx);
    setKey((k) => k + 1);
  }, []);

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white px-4 py-8 dark:border-neutral-800 dark:bg-neutral-950 sm:rounded-3xl sm:px-6 sm:py-12">
      <header className="space-y-2 text-center sm:space-y-3">
        <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl md:text-4xl">
          TypewriterText
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 sm:text-base md:text-lg">
          Sequential phrase typing with blinking cursor, delete, and loop control.
        </p>
      </header>

      <main className="mt-8 flex flex-col items-center gap-8">
        {/* Demo display */}
        <div className="min-h-[4rem] text-center text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl md:text-4xl">
          <TypewriterText
            key={key}
            phrases={current.phrases}
            typingSpeed={speed}
            deletingSpeed={speed / 2}
            pauseDuration={2000}
            showCursor={showCursor}
            loop={loop}
            cursorClassName="text-indigo-500 dark:text-indigo-400"
          />
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {PHRASE_SETS.map((s, idx) => (
            <button
              key={s.label}
              onClick={() => handleSwitch(idx)}
              className={`rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider transition-all ${
                idx === phraseSet
                  ? "border-indigo-500 bg-indigo-50 text-indigo-700 dark:border-indigo-400 dark:bg-indigo-900/30 dark:text-indigo-300"
                  : "border-neutral-300 bg-white text-neutral-500 dark:border-neutral-700 dark:bg-neutral-900"
              }`}
            >
              {s.label}
            </button>
          ))}

          <button
            onClick={() => setShowCursor((c) => !c)}
            className={`rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider transition-all ${
              showCursor
                ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:border-emerald-400 dark:bg-emerald-900/30 dark:text-emerald-300"
                : "border-neutral-300 bg-white text-neutral-500 dark:border-neutral-700 dark:bg-neutral-900"
            }`}
          >
            Cursor: {showCursor ? "ON" : "OFF"}
          </button>

          <button
            onClick={() => setLoop((l) => !l)}
            className={`rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider transition-all ${
              loop
                ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:border-emerald-400 dark:bg-emerald-900/30 dark:text-emerald-300"
                : "border-neutral-300 bg-white text-neutral-500 dark:border-neutral-700 dark:bg-neutral-900"
            }`}
          >
            Loop: {loop ? "ON" : "OFF"}
          </button>

          <label className="flex items-center gap-2 text-xs font-medium text-neutral-600 dark:text-neutral-400">
            Speed: {speed}ms
            <input
              type="range"
              min={20}
              max={200}
              step={10}
              value={speed}
              onChange={(e) => {
                setSpeed(parseInt(e.target.value, 10));
                setKey((k) => k + 1);
              }}
              className="w-20 accent-indigo-500"
            />
          </label>
        </div>
      </main>
    </div>
  );
}

export default TypewriterTextDemo;
