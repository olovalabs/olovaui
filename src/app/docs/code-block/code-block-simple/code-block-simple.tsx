"use client";

import { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";

interface SmCodeBlockCommandProps {
  pnpm: string;
  yarn: string;
  npm: string;
  bun: string;
}

export function SmCodeBlockCommand({
  pnpm,
  yarn,
  npm,
  bun,
}: SmCodeBlockCommandProps) {
  const [activeTab, setActiveTab] = useState("NPM");
  const [copied, setCopied] = useState(false);

  const commands = {
    NPM: npm,
    BUN: bun,
    YARN: yarn,
    PNPM: pnpm,
  } as const;

  const tabs = Object.keys(commands);

  const handleCopy = () => {
    const textToCopy = commands[activeTab as keyof typeof commands];

    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();

    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Fallback copy failed", err);
    }

    document.body.removeChild(textArea);
  };

  const activeCommand = commands[activeTab as keyof typeof commands];

  return (
    <div className="flex w-full flex-col items-center justify-center px-4 py-6 font-sans sm:px-6">
      <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-[0_12px_40px_-24px_rgba(0,0,0,0.1)] dark:shadow-[0_12px_40px_-24px_rgba(255,255,255,0.1)]">
        <div className="flex flex-col gap-3 border-b border-border/50 px-4 pt-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-3 text-xs font-semibold uppercase tracking-[0.18em] transition-all sm:text-sm ${
                  activeTab === tab
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-pressed={activeTab === tab}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,0,0,0.2)] dark:shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 pb-3 text-muted-foreground select-none">
            <Terminal className="h-4 w-4" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase">
              Terminal
            </span>
          </div>
        </div>

        <div className="group relative bg-muted/40 p-4 sm:p-6">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="flex w-full items-center justify-between gap-4 overflow-x-auto no-scrollbar">
            <code className="flex min-w-0 flex-1 items-center whitespace-nowrap font-mono text-xs sm:text-sm md:text-base text-foreground">
              <span className="mr-2 text-muted-foreground select-none">$</span>
              <span className="text-foreground selection:bg-muted-foreground/30 selection:text-foreground">{activeCommand}</span>
            </code>

            <button
              onClick={handleCopy}
              className="flex-shrink-0 rounded-lg border border-transparent p-2 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring/20"
              aria-label="Copy code"
            >
              {copied ? (
                <Check className="h-5 w-5 text-foreground" />
              ) : (
                <Copy className="h-5 w-5" />
              )}
            </button>
          </div>

          {copied && (
            <div className="pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 animate-in fade-in slide-in-from-right-1 rounded bg-primary px-2 py-1 text-xs text-primary-foreground font-semibold">
              Copied!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
