import { GitHubIcon } from "@/assets/icons/github";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="relative isolate min-h-[calc(100vh-4rem)] w-full flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-black text-neutral-900 dark:text-white px-4">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_bg-center,_var(--tw-gradient-stops))] from-neutral-100/40 via-white to-white dark:from-neutral-900/40 dark:via-black dark:to-black -z-10" />

      {/* Badge */}
      <div className="mb-8">
        <div className="inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900/50 px-3 py-1 text-sm text-neutral-600 dark:text-neutral-400 backdrop-blur-xl">
          <span className="mr-2 flex h-2 w-2">
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            </span>
          </span>
          Introducing Dock Text
          <span className="ml-2 text-neutral-600">›</span>
        </div>
      </div>

      {/* Hero Title */}
      <h1 className="text-center text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl mx-auto leading-[1.1]">
        UI library for <br />
        <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          Design Engineers
        </span>
      </h1>

      {/* Description */}
      <p className="mt-8 max-w-2xl text-center text-lg text-neutral-600 dark:text-neutral-400 sm:text-x">
        150+ free and open-source animated components and effects built with{" "}
        <strong className="text-neutral-900 dark:text-white font-medium">
          React, Typescript, Tailwind CSS
        </strong>
        , and <strong className="text-neutral-900 dark:text-white font-medium">Motion</strong>.
        <br className="hidden sm:block" />
        Perfect companion for{" "}
        <strong className="text-neutral-900 dark:text-white font-medium">shadcn/ui</strong>.
      </p>

      {/* Action Buttons */}
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link href="/docs">
          <Button
            size="lg"
            className="h-12 rounded-xl bg-neutral-900 text-white border border-neutral-800 hover:bg-neutral-800 hover:text-white transition-all px-8 text-base font-medium group cursor-pointer"
          >
            Browse Components
            <span className="ml-1 transition-transform group-hover:translate-x-0.5">
              ›
            </span>
          </Button>
        </Link>
        <Link href="https://github.com/olovaui/olovaui" target="_blank">
          <Button
            size="lg"
            variant="outline"
            className="h-12 rounded-xl bg-white dark:bg-black text-neutral-900 dark:text-white border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-white transition-all px-8 text-base font-medium cursor-pointer"
          >
            <GitHubIcon className="mr-2 h-5 w-5 fill-white" />
            Star on GitHub
          </Button>
        </Link>
      </div>
    </div>
  );
};
