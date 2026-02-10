"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { memo } from "react";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui";

export const CTA = memo(() => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-muted/20" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm p-8 md:p-16 text-center"
        >
          <BorderBeam
            size={300}
            duration={15}
            colorFrom="rgb(59, 130, 246)"
            colorTo="rgb(147, 51, 234)"
            className="opacity-40"
          />
          
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium text-primary">Ready to start?</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Build your next project with
              <span className="block bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mt-2">
                Olova UI today
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of developers who are building beautiful, accessible, and performant web applications with Olova UI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/docs" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto rounded-full text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5">
                  Get Started Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="https://github.com/olovalabs/olovaui" target="_blank" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full text-base font-semibold bg-background/50 backdrop-blur-sm hover:bg-accent/50 transition-all duration-300 hover:-translate-y-0.5">
                  View on GitHub
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});
CTA.displayName = "CTA";
