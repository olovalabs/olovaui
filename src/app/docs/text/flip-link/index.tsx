"use client"

import { FlipLink } from './flip-link';

export function FlipLinkView() {
  return (
    <div className="relative min-h-[500px] w-full bg-zinc-950 text-zinc-50 font-sans selection:bg-zinc-100 selection:text-zinc-900 overflow-hidden rounded-2xl flex items-center justify-center border border-zinc-800">
      <section className="relative z-10 grid place-content-center gap-4 px-6 py-24 md:gap-8">
        <FlipLink href="#" hoverColor="hover:text-rose-500">
          Projects
        </FlipLink>
        <FlipLink href="#" hoverColor="hover:text-emerald-400">
          About Me
        </FlipLink>
        <FlipLink href="#" hoverColor="hover:text-indigo-400">
          Services
        </FlipLink>
        <FlipLink href="#" hoverColor="hover:text-amber-400">
          Contact
        </FlipLink>
      </section>
    </div>
  );
}

export default FlipLinkView;
