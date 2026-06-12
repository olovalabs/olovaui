const stackItems = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Radix UI",
  "TypeScript",
];

export function TrustedBy() {
  return (
    <section className="border-b border-border bg-muted/30 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm font-medium text-muted-foreground">
          Built for the modern React ecosystem
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {stackItems.map((item) => (
            <div
              key={item}
              className="flex h-12 items-center justify-center rounded-lg border border-border bg-background text-sm font-semibold text-foreground shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
