import InstallCard from "@/components/ui/install-card";
import { SectionHeader } from "./section-header";

const installCommands = [
  {
    manager: "pnpm",
    command:
      'pnpm dlx shadcn@latest add "https://olovaui.olova.dev/registry/button.json"',
  },
  {
    manager: "npm",
    command:
      'npx shadcn@latest add "https://olovaui.olova.dev/registry/button.json"',
  },
  {
    manager: "yarn",
    command:
      'yarn dlx shadcn@latest add "https://olovaui.olova.dev/registry/button.json"',
  },
  {
    manager: "bun",
    command:
      'bunx shadcn@latest add "https://olovaui.olova.dev/registry/button.json"',
  },
];

export function Installation() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Installation"
          title="Start with one component, then scale the system."
          description="Use your preferred package runner to add registry components directly into your application."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {installCommands.map((item) => (
            <InstallCard
              key={item.manager}
              manager={item.manager}
              command={item.command}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
