"use client";

import React, { useState } from "react";
import { ShimmerText } from "@/components/ui/shimmer-text";

const PRESETS = [
  {
    label: "Indigo → Rose",
    colors: ["#6366f1", "#8b5cf6", "#d946ef", "#f43f5e"] as [string, ...string[]],
  },
  {
    label: "Emerald → Amber",
    colors: ["#10b981", "#14b8a6", "#f59e0b", "#f97316"] as [string, ...string[]],
  },
  {
    label: "Sky → Violet",
    colors: ["#0ea5e9", "#6366f1", "#a855f7", "#d946ef"] as [string, ...string[]],
  },
  {
    label: "Rose → Cyan",
    colors: ["#f43f5e", "#ec4899", "#06b6d4", "#22d3ee"] as [string, ...string[]],
  },
];

export function ShimmerTextDemo() {
  const [activePreset, setActivePreset] = useState(0);
  const [speed, setSpeed] = useState(4);
  const [angle, setAngle] = useState(90);
  const [pauseOnHover, setPauseOnHover] = useState(true);

  const preset = PRESETS[activePreset];

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white px-4 py-8 dark:border-neutral-800 dark:bg-neutral-950 sm:rounded-3xl sm:px-6 sm:py-12">
      <header className="space-y-2 text-center sm:space-y-3">
        <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl md:text-4xl">
          ShimmerText
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 sm:text-base md:text-lg">
          Continuous gradient marquee across text with configurable colors, speed, and angle.
        </p>
      </header>

      <main className="mt-8 flex flex-col items-center gap-8">
        {/* Demo */}
        <div className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          <ShimmerText
            text="Fluid motion in every pixel"
            colors={preset.colors}
            cycleDuration={speed}
            angle={angle}
            pauseOnHover={pauseOnHover}
          />
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Color presets */}
          <div className="flex flex-wrap items-center gap-2">
            {PRESETS.map((p, idx) => (
              <button
                key={p.label}
                onClick={() => setActivePreset(idx)}
                className={`rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider transition-all ${
                  idx === activePreset
                    ? "border-indigo-500 bg-indigo-50 text-indigo-700 dark:border-indigo-400 dark:bg-indigo-900/30 dark:text-indigo-300"
                    : "border-neutral-300 bg-white text-neutral-500 dark:border-neutral-700 dark:bg-neutral-900"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Speed slider */}
          <label className="flex items-center gap-2 text-xs font-medium text-neutral-600 dark:text-neutral-400">
            Speed: {speed}s
            <input
              type="range"
              min={1}
              max={10}
              step={0.5}
              value={speed}
              onChange={(e) => setSpeed(parseFloat(e.target.value))}
              className="w-20 accent-indigo-500"
            />
          </label>

          {/* Angle slider */}
          <label className="flex items-center gap-2 text-xs font-medium text-neutral-600 dark:text-neutral-400">
            Angle: {angle}°
            <input
              type="range"
              min={0}
              max={180}
              step={15}
              value={angle}
              onChange={(e) => setAngle(parseInt(e.target.value, 10))}
              className="w-20 accent-indigo-500"
            />
          </label>

          {/* Pause toggle */}
          <button
            onClick={() => setPauseOnHover((p) => !p)}
            className={`rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider transition-all ${
              pauseOnHover
                ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:border-emerald-400 dark:bg-emerald-900/30 dark:text-emerald-300"
                : "border-neutral-300 bg-white text-neutral-500 dark:border-neutral-700 dark:bg-neutral-900"
            }`}
          >
            Pause: {pauseOnHover ? "ON" : "OFF"}
          </button>
        </div>
      </main>
    </div>
  );
}

export default ShimmerTextDemo;
