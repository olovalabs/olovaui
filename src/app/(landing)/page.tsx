import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/layout/header';

export default function App() {
  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-hidden bg-white dark:bg-[#030403] text-neutral-900 dark:text-white selection:bg-green-500/30 font-sans">
      <Header />
      {/* In a real project, these styles would go in index.css or tailwind.config.js. 
         Included here for single-file portability as requested.
      */}
      <style>{`
        /* Custom Grid Pattern */
        .card-grid {
            background-size: 40px 40px;
            background-image:
                linear-gradient(to right, rgba(74, 222, 128, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(74, 222, 128, 0.05) 1px, transparent 1px);
            mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
            -webkit-mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
        }

        /* Animations */
        @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
            100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float { animation: float 10s ease-in-out infinite; }
        .animate-float-delayed { animation: float 12s ease-in-out infinite; animation-delay: 2s; }
        
        /* Fade in for the glow */
        @keyframes glow-fade {
          from { opacity: 0; transform: translate(-50%, -60%) scale(0.8); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        .animate-glow {
          animation: glow-fade 1.5s ease-out forwards;
        }
      `}</style>

      {/* --- New Soft Ambient Glow (Pure CSS) --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none z-0">
        {/* Main diffusion layer */}
        <div className="absolute top-[-350px] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[#00BF63]/20 blur-[120px] rounded-[100%] animate-glow" />
        {/* Inner brighter core for depth */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#00BF63]/10 blur-[80px] rounded-[100%] animate-glow" style={{ animationDelay: '0.2s' }} />
      </div>

      {/* --- Background Decorative Elements (Wireframes) --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Cube Left */}
        <svg className="absolute top-20 -left-20 w-96 h-96 text-green-900/10 animate-float" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <path d="M3.27 6.96 12 12.01l8.73-5.05"></path>
          <path d="M12 22.08V12"></path>
        </svg>

        {/* Triangle/Shape Right */}
        <svg className="absolute top-40 -right-20 w-80 h-80 text-green-900/10 animate-float-delayed" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M12 2L2 22h20L12 2z" />
        </svg>
      </div>

      {/* --- Main Content --- */}
      <main className="relative z-10 container mx-auto px-6 py-24 max-w-5xl flex-grow flex flex-col items-center justify-center">

        {/* Header Section */}
        <div className="relative text-center mb-20 max-w-2xl mx-auto flex flex-col items-center">

          {/* Top Badge */}
          <Link href="/docs" className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 hover:border-green-500/30 transition-all duration-300 group">
            <span className="text-sm font-medium text-neutral-900 dark:text-white">Introducing OlovaUI Beta</span>
            <div className="w-px h-3.5 bg-neutral-300 dark:bg-white/20 mx-1"></div>
            <span className="text-sm text-zinc-600 dark:text-zinc-300 flex items-center gap-1 group-hover:text-green-400 transition-colors">
              Get started <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50">
            Pre-built UI Library
          </h1>
          <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed">
            Accelerate your development with production-ready components.<br className="hidden md:inline" />
            Beautifully crafted, accessible, and fully customizable.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">

          {/* Card 1: Quickstart */}
          <Link href="/docs" className="group block">
            {/* Visual Container */}
            <div className="bg-neutral-50 dark:bg-[#080c09] border border-neutral-200 dark:border-white/5 rounded-2xl overflow-hidden relative aspect-[16/10] transition-all duration-300 group-hover:border-green-500/30 group-hover:shadow-[0_0_30px_-10px_rgba(34,197,94,0.15)]">

              {/* Inner Grid Texture */}
              <div className="absolute inset-0 card-grid opacity-40"></div>

              {/* Content (Rocket Icon) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-32 h-32 text-green-500/80 drop-shadow-[0_0_8px_rgba(34,197,94,0.3)] transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  {/* Rocket Body */}
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  {/* Window circle */}
                  <circle cx="15" cy="9" r="2" fill="currentColor" fillOpacity="0.1" />
                </svg>
              </div>
            </div>

            {/* Text Info */}
            <div className="mt-5">
              <h3 className="text-neutral-900 dark:text-white font-semibold text-lg mb-1 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Quickstart</h3>
              <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
                Deploy your first docs site in minutes with our step-by-step guide
              </p>
            </div>
          </Link>

          {/* Card 2: CLI Installation */}
          <a href="#" className="group block">
            {/* Visual Container */}
            <div className="bg-neutral-50 dark:bg-[#080c09] border border-neutral-200 dark:border-white/5 rounded-2xl overflow-hidden relative aspect-[16/10] transition-all duration-300 group-hover:border-green-500/30 group-hover:shadow-[0_0_30px_-10px_rgba(34,197,94,0.15)]">

              {/* Inner Grid Texture */}
              <div className="absolute inset-0 card-grid opacity-40"></div>

              {/* Content (Terminal Icon) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-40 h-32 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1">

                  {/* Back Window (Ghost) */}
                  <svg className="absolute top-0 right-0 w-32 h-24 text-green-500/20 translate-x-4 -translate-y-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  </svg>

                  {/* Front Window (Main) */}
                  <svg className="absolute bottom-0 left-0 w-36 h-28 text-green-500/80 drop-shadow-[0_0_8px_rgba(34,197,94,0.3)] bg-white/80 dark:bg-[#080c09]/80 backdrop-blur-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="18" rx="2" ry="2" fill="none" />
                    <line x1="6" y1="3" x2="6" y2="21" strokeOpacity="0.2" />
                    <path d="m8 9 3 3-3 3" />
                    <line x1="13" y1="15" x2="16" y2="15" />
                    {/* Dots in top right */}
                    <circle cx="17" cy="6" r="0.5" fill="currentColor" />
                    <circle cx="19" cy="6" r="0.5" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Text Info */}
            <div className="mt-5">
              <h3 className="text-neutral-900 dark:text-white font-semibold text-lg mb-1 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">CLI installation</h3>
              <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
                Install the CLI to preview and develop your docs locally
              </p>
            </div>
          </a>

        </div>
      </main>


    </div>
  );
}
