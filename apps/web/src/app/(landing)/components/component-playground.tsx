"use client";

import * as React from "react";
import { ArrowRight, Check, Copy, CreditCard, Settings } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/accordion/accordion";
import { Button } from "@/app/components/button/button";
import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from "@/app/components/table/table";
import { Dialog, DialogAction, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/app/components/dialog/dialog";
import { Drawer, DrawerAction, DrawerBody, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/app/components/drawer/drawer";
import { Input } from "@/app/components/input/input";
import { Skeleton } from "@/app/components/skeleton/skeleton";
import { cn } from "@/lib/utils";

type PlaygroundKey =
  | "button"
  | "table"
  | "skeleton"
  | "accordion"
  | "dialog"
  | "drawer"
  | "input";

type PlaygroundItem = {
  key: PlaygroundKey;
  label: string;
  description: string;
  code: string;
};

const playgroundItems: PlaygroundItem[] = [
  {
    key: "button",
    label: "Button",
    description: "Variants, icons, and loading states.",
    code: `import { ArrowRight } from "lucide-react";
import { Button } from "@/components/olovaui/button";

export function Example() {
  return (
    <div className="w-full max-w-md rounded-lg border border-border bg-card p-5 shadow-sm">
      <p className="text-sm font-semibold text-card-foreground">
        Release dashboard
      </p>
      <p className="mt-1 text-sm text-muted-foreground">
        Push the latest UI package to production.
      </p>
      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <Button
          className="w-full sm:w-auto"
          rightIcon={<ArrowRight className="h-4 w-4" />}
        >
          Deploy project
        </Button>
        <Button className="w-full sm:w-auto" variant="outline">
          Preview build
        </Button>
      </div>
    </div>
  );
}`,
  },
  {
    key: "table",
    label: "Table",
    description: "Structured data with headings and rows.",
    code: `import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from "@/components/olovaui/table";

export function Example() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Role</TableHeader>
          <TableHeader>Status</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Alex</TableCell>
          <TableCell>Designer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Maria</TableCell>
          <TableCell>Engineer</TableCell>
          <TableCell>Pending</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`,
  },
  {
    key: "skeleton",
    label: "Skeleton",
    description: "Loading states and placeholders.",
    code: `import { Skeleton } from "@/components/olovaui/skeleton";

export function Example() {
  return (
    <div className="w-full max-w-md space-y-3">
      <Skeleton className="h-6 w-48 rounded-md" />
      <Skeleton className="h-4 w-full rounded-md" />
      <Skeleton className="h-4 w-3/4 rounded-md" />
    </div>
  );
}`,
  },
  {
    key: "accordion",
    label: "Accordion",
    description: "Accessible disclosure for dense content.",
    code: `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/olovaui/accordion";

export function Example() {
  return (
    <Accordion defaultValue="install" className="w-full max-w-md rounded-lg">
      <AccordionItem value="install">
        <AccordionTrigger>How do I install components?</AccordionTrigger>
        <AccordionContent>
          Use the registry command for the component you need.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="customize">
        <AccordionTrigger>Can I customize the source?</AccordionTrigger>
        <AccordionContent>
          Yes. Components are copied into your project for full control.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
  },
  {
    key: "dialog",
    label: "Dialog",
    description: "Modal workflows with focus handling.",
    code: `import { Dialog, DialogAction, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/olovaui/dialog";

export function Example() {
  return (
    <Dialog>
      <DialogTrigger>Open dialog</DialogTrigger>
      <DialogContent size="sm">
        <DialogHeader>
          <DialogTitle>Confirm publish</DialogTitle>
          <DialogDescription>
            This preview uses the real dialog component and focus behavior.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose className="h-9 px-4">Cancel</DialogClose>
          <DialogAction>Publish</DialogAction>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`,
  },
  {
    key: "drawer",
    label: "Drawer",
    description: "Side panels for secondary tasks.",
    code: `import { CreditCard, Settings } from "lucide-react";
import { Drawer, DrawerAction, DrawerBody, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/olovaui/drawer";

export function Example() {
  return (
    <Drawer>
      <DrawerTrigger>Open drawer</DrawerTrigger>
      <DrawerContent side="right" size="default">
        <DrawerHeader>
          <DrawerTitle>Project settings</DrawerTitle>
          <DrawerDescription className="text-sm">
            Edit your workspace preferences below.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          <div className="space-y-3">
            <div className="flex items-center gap-3 rounded-lg border border-border p-3">
              <Settings className="h-4 w-4 text-primary" />
              General settings
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-border p-3">
              <CreditCard className="h-4 w-4 text-primary" />
              Billing controls
            </div>
          </div>
        </DrawerBody>
        <DrawerFooter>
          <DrawerClose className="h-9 px-4">Cancel</DrawerClose>
          <DrawerAction>Save</DrawerAction>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}`,
  },
  {
    key: "input",
    label: "Input",
    description: "Clean form control foundations.",
    code: `import { Input } from "@/components/olovaui/input";

export function Example() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <label className="text-sm font-medium" htmlFor="landing-email">
        Email address
      </label>
      <Input id="landing-email" type="email" placeholder="name@example.com" />
      <p className="text-sm text-muted-foreground">
        Uses the same input primitive shown in docs.
      </p>
    </div>
  );
}`,
  },
];

export function ComponentPlayground() {
  const [activeKey, setActiveKey] = React.useState<PlaygroundKey>("button");
  const [activePanel, setActivePanel] = React.useState<"preview" | "code">("preview");
  const [copied, setCopied] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  const activeItem = playgroundItems.find((item) => item.key === activeKey) ?? playgroundItems[0];

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(activeItem.code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  if (!isReady) {
    return <div className="h-[500px] animate-pulse bg-muted/20 border border-border rounded-lg" />;
  }

  return (
    <section className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Interactive playground</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">Switch components, inspect code, and keep moving.</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">The homepage gives developers the same confidence they expect from a documentation site: real preview on one side, implementation on the other.</p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[280px_1fr]">
          <div className="rounded-lg border border-border bg-card p-2 shadow-sm">
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
              {playgroundItems.map((item) => {
                const active = item.key === activeKey;
                return (
                  <button
                    key={item.key}
                    type="button"
                    className={cn(
                      "rounded-lg border px-3 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
                      active ? "border-foreground bg-foreground text-background" : "border-transparent text-card-foreground hover:bg-muted"
                    )}
                    onClick={() => {
                      setActiveKey(item.key);
                      setActivePanel("preview");
                    }}
                  >
                    <span className="block text-sm font-semibold">{item.label}</span>
                    <span className={cn("mt-1 block text-xs leading-5", active ? "text-background/75" : "text-muted-foreground")}>{item.description}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
            <div className="flex flex-col gap-3 border-b border-border bg-background px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="inline-flex rounded-lg border border-border bg-muted p-1" role="tablist" aria-label="Playground panels">
                {(["preview", "code"] as const).map((panel) => (
                  <button
                    key={panel}
                    type="button"
                    role="tab"
                    aria-selected={activePanel === panel}
                    className={cn(
                      "h-8 rounded-md px-3 text-sm font-medium capitalize transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
                      activePanel === panel ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                    )}
                    onClick={() => setActivePanel(panel)}
                  >
                    {panel}
                  </button>
                ))}
              </div>
              {activePanel === "code" ? (
                <button
                  type="button"
                  onClick={copyCode}
                  className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-border bg-background px-3 text-sm font-medium transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              ) : null}
            </div>
            <div className="min-h-[360px] p-4 sm:p-6">
              {activePanel === "preview" ? (
                <div className="flex min-h-[320px] items-center justify-center rounded-lg border border-border bg-background p-4">
                  <PreviewPanel item={activeItem} />
                </div>
              ) : (
                <pre className="min-h-[320px] overflow-x-auto rounded-lg border border-border bg-background p-4 text-sm leading-7">
                  <code>{activeItem.code}</code>
                </pre>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PreviewPanel({ item }: { item: PlaygroundItem }) {
  switch (item.key) {
    case "button":
      return (
        <div className="w-full max-w-md rounded-lg border border-border bg-card p-5 shadow-sm">
          <p className="text-sm font-semibold text-card-foreground">Release dashboard</p>
          <p className="mt-1 text-sm text-muted-foreground">Push the latest UI package to production.</p>
          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <Button className="w-full sm:w-auto" rightIcon={<ArrowRight className="h-4 w-4" />}>
              Deploy project
            </Button>
            <Button className="w-full sm:w-auto" variant="outline">
              Preview build
            </Button>
          </div>
        </div>
      );
    case "table":
      return (
        <div className="w-full max-w-md">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Name</TableHeader>
                <TableHeader>Role</TableHeader>
                <TableHeader>Status</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Alex</TableCell>
                <TableCell>Designer</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Maria</TableCell>
                <TableCell>Engineer</TableCell>
                <TableCell>Pending</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      );
    case "skeleton":
      return (
        <div className="w-full max-w-md space-y-3">
          <Skeleton className="h-6 w-48 rounded-md" />
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-3/4 rounded-md" />
        </div>
      );
    case "accordion":
      return (
        <Accordion defaultValue="install" className="w-full max-w-md rounded-lg">
          <AccordionItem value="install">
            <AccordionTrigger>How do I install components?</AccordionTrigger>
            <AccordionContent>Use the registry command for the component you need.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="customize">
            <AccordionTrigger>Can I customize the source?</AccordionTrigger>
            <AccordionContent>Yes. Components are copied into your project for full control.</AccordionContent>
          </AccordionItem>
        </Accordion>
      );
    case "dialog":
      return (
        <Dialog>
          <DialogTrigger>Open dialog</DialogTrigger>
          <DialogContent size="sm">
            <DialogHeader>
              <DialogTitle>Confirm publish</DialogTitle>
              <DialogDescription>This preview uses the real dialog component and focus behavior.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose className="h-9 px-4">Cancel</DialogClose>
              <DialogAction>Publish</DialogAction>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    case "drawer":
      return (
        <Drawer>
          <DrawerTrigger>Open drawer</DrawerTrigger>
          <DrawerContent side="right" size="default">
            <DrawerHeader>
              <DrawerTitle>Project settings</DrawerTitle>
              <DrawerDescription className="text-sm">Edit your workspace preferences below.</DrawerDescription>
            </DrawerHeader>
            <DrawerBody>
              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-lg border border-border p-3">
                  <Settings className="h-4 w-4 text-primary" />
                  General settings
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-border p-3">
                  <CreditCard className="h-4 w-4 text-primary" />
                  Billing controls
                </div>
              </div>
            </DrawerBody>
            <DrawerFooter>
              <DrawerClose className="h-9 px-4">Cancel</DrawerClose>
              <DrawerAction>Save</DrawerAction>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      );
    case "input":
      return (
        <div className="w-full max-w-sm space-y-3">
          <label className="text-sm font-medium" htmlFor="landing-email">
            Email address
          </label>
          <Input id="landing-email" type="email" placeholder="name@example.com" />
          <p className="text-sm text-muted-foreground">Uses the same input primitive shown in docs.</p>
        </div>
      );
    default:
      return null;
  }
}
