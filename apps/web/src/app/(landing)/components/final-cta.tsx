import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-5xl rounded-lg border border-border bg-card px-6 py-10 text-center shadow-sm sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Build with Olova UI
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold tracking-normal text-card-foreground sm:text-4xl">
          Start with one component or browse the full animated catalog.
        </h2>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/docs"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-foreground px-5 text-sm font-semibold text-background transition hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
          >
            Get Started
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/components"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 text-sm font-semibold text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
          >
            Browse Components
          </Link>
          <Link
            href="https://github.com/olovalabs/olovaui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 text-sm font-semibold text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
          >
            GitHub
            <Github className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
