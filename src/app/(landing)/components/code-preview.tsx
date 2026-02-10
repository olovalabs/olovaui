'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Check, Copy } from 'lucide-react';

//

const CodeWindow = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeLines = [
    { 
      tokens: [
        { text: 'import', color: 'text-pink-400' },
        { text: ' { ', color: 'text-gray-400' },
        { text: 'Button', color: 'text-cyan-300' },
        { text: ' } ', color: 'text-gray-400' },
        { text: 'from', color: 'text-pink-400' },
        { text: " '@olova/ui'", color: 'text-green-400' },
        { text: ';', color: 'text-gray-500' },
      ]
    },
    { tokens: [] }, // Empty line
    { 
      tokens: [
        { text: 'export', color: 'text-pink-400' },
        { text: ' default', color: 'text-pink-400' },
        { text: ' function', color: 'text-pink-400' },
        { text: ' App', color: 'text-yellow-300' },
        { text: '() {', color: 'text-gray-400' },
      ]
    },
    { 
      tokens: [
        { text: '  return', color: 'text-pink-400' },
        { text: ' (', color: 'text-gray-400' },
      ]
    },
    { 
      tokens: [
        { text: '    <', color: 'text-gray-500' },
        { text: 'Button', color: 'text-cyan-300' },
        { text: ' variant', color: 'text-purple-300' },
        { text: '=', color: 'text-gray-400' },
        { text: '"glow"', color: 'text-green-400' },
        { text: '>', color: 'text-gray-500' },
      ]
    },
    { 
      tokens: [
        { text: '      Deploy Project', color: 'text-white' },
      ]
    },
    { 
      tokens: [
        { text: '    </', color: 'text-gray-500' },
        { text: 'Button', color: 'text-cyan-300' },
        { text: '>', color: 'text-gray-500' },
      ]
    },
    { 
      tokens: [
        { text: '  );', color: 'text-gray-400' },
      ]
    },
    { 
      tokens: [
        { text: '}', color: 'text-gray-400' },
      ]
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex-1 w-full max-w-lg relative group"
    >
      
      
      <div className="relative bg-[#0a0d20]/90 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="ml-4 flex items-center gap-2 text-xs text-gray-400 font-mono bg-black/20 px-2 py-1 rounded border border-white/5">
              <Terminal size={12} />
              <span>app.tsx</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={handleCopy}
              className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors"
            >
              {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-4 overflow-x-auto">
          <div className="font-mono text-[13px] leading-6">
            {codeLines.map((line, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.5, duration: 0.3 }}
                className="flex"
              >
                <span className="w-8 text-gray-700 select-none text-right pr-3">{i + 1}</span>
                <div className="whitespace-pre">
                  {line.tokens.map((token, j) => (
                    <span key={j} className={token.color}>{token.text}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Status Bar */}
        <div className="px-4 py-1.5 bg-black/40 border-t border-white/5 flex justify-between items-center text-[10px] text-gray-500 font-mono">
          <div className="flex gap-3">
            <span>TypeScript</span>
            <span>UTF-8</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span>Ready</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PreviewWindow = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className="flex-1 w-full max-w-lg relative group"
    >
      

      <div className="relative h-full min-h-[300px] bg-[#0a0d20]/90 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
          <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Preview</span>
          </div>
          <div className="flex gap-2">
             <div className="w-16 h-1.5 rounded-full bg-white/10" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 relative flex items-center justify-center p-8">
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: '24px 24px'
            }}
          />
          
          

          {/* Interactive Element */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 20 }}
            className="relative z-10"
          >
            <button className="px-6 py-2.5 rounded-xl bg-[#028A48] text-white font-medium transition-transform active:scale-95">
              Deploy Project
            </button>
            
            {/* Cursor/Pointer Simulation */}
            <motion.div 
              className="absolute -bottom-8 -right-8"
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: [0, 1, 1, 0], x: [20, 0, 0, 20], y: [20, 0, 0, 20] }}
              transition={{ delay: 2.5, duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <div className="w-4 h-4 border-l-2 border-t-2 border-white -rotate-12" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const ConnectionBeam = () => {
  return (
    <div className="hidden lg:flex items-center justify-center w-16 relative z-0">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-[1px] bg-white/20" />
      </div>
      
      {/* Animated Particles */}
      <motion.div 
        className="absolute w-2 h-2 rounded-full bg-cyan-400"
        animate={{ 
          x: [-40, 40], 
          opacity: [0, 1, 0],
          scale: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut",
          repeatDelay: 0.5 
        }}
      />
      
      <motion.div 
        className="absolute w-2 h-2 rounded-full bg-purple-400"
        animate={{ 
          x: [-40, 40], 
          opacity: [0, 1, 0],
          scale: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1,
          repeatDelay: 0.5 
        }}
      />
    </div>
  );
};

export const CodePreview = () => {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-0">
          <CodeWindow />
          <ConnectionBeam />
          <PreviewWindow />
        </div>
      </div>
    </section>
  );
};

CodePreview.displayName = "CodePreview";
