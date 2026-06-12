import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import CodeSnippet from "@/components/ui/code-snippet";

export function CodeExample() {
  return (
    <section className="border-y border-border bg-muted/30 px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Code example
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
            Add components through the registry, then own the source.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Olova UI follows the copy-paste component model. Install a
            component, inspect the code, and adapt it to your app without
            locking your team into a black-box package.
          </p>
          <Link
            href="/docs/installation"
            className="mt-6 inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-foreground px-4 text-sm font-semibold text-background transition hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
          >
            Read installation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
          <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
            <Terminal className="h-4 w-4 text-primary" aria-hidden="true" />
            <span className="text-sm font-medium">registry install</span>
          </div>
          <div className="p-4">
            <div className="mb-4">
              <p className="text-xs font-medium text-muted-foreground mb-2">
                Registry install (run in terminal)
              </p>
              <CodeSnippet
                code={`pnpm dlx shadcn@latest add "https://olovaui.olova.dev/registry/button.json"`}
                ariaLabel="Copy registry command"
              />
            </div>

            <div>
              <p className="text-xs font-medium text-muted-foreground mb-2">
                Usage (paste into a React file)
              </p>
              <CodeSnippet
                code={`import { ArrowRight } from "lucide-react";
import { Button } from "@/components/olovaui/button";

export function SaveChanges() {
  return <Button rightIcon={<ArrowRight />}>Ship faster</Button>;
}`}
                ariaLabel="Copy usage snippet"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
