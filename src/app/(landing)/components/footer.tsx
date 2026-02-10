"use client";
import Logo from "@/assets/olova.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Separator } from "@/components/ui/separator";
import {
    ExternalLink,
    Facebook,
    Github,
    Heart,
    Linkedin,
    MessageCircle,
} from "lucide-react";
import Link from "next/link";
import React, { memo } from "react";

const SocialLink = memo(({ href, label, icon: Icon }: { href: string; label: string; icon: React.ElementType }) => (
  <Button
    variant="ghost"
    size="icon"
    className="h-9 w-9 hover:bg-muted hover:text-primary transition-colors duration-200"
    asChild
  >
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <Icon className="w-4 h-4" aria-hidden="true" />
    </a>
  </Button>
));
SocialLink.displayName = "SocialLink";

export const Footer = memo(() => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-card/30 backdrop-blur-sm relative z-10" role="contentinfo">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <OptimizedImage src={Logo.src} alt="logo" width={32} height={32} className="size-8" />
              <span className="text-xl font-bold tracking-tight">Olova UI</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Build stunning web applications with our modern React component
              library. Free, open-source, and built with the latest
              technologies.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs font-normal bg-muted/50 hover:bg-muted">
                TypeScript
              </Badge>
              <Badge variant="secondary" className="text-xs font-normal bg-muted/50 hover:bg-muted">
                Tailwind CSS
              </Badge>
              <Badge variant="secondary" className="text-xs font-normal bg-muted/50 hover:bg-muted">
                MIT License
              </Badge>
            </div>
          </div>

          <nav aria-label="Footer navigation" className="space-y-4">
            <h3 className="font-semibold text-sm tracking-wider uppercase text-muted-foreground">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/docs"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 w-fit"
                  prefetch={true}
                >
                  Documentation
                  <ExternalLink className="w-3 h-3 opacity-50" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/components"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 w-fit block"
                  prefetch={true}
                >
                  Components
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/examples"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 w-fit block"
                  prefetch={true}
                >
                  Examples
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/templates"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 w-fit block"
                  prefetch={true}
                >
                  Templates
                </Link>
              </li>
            </ul>
          </nav>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm tracking-wider uppercase text-muted-foreground">Connect</h3>
            <div className="flex gap-2" role="list">
              <SocialLink href="https://github.com/olova.net" label="GitHub" icon={Github} />
              <SocialLink href="https://www.linkedin.com/in/codernazmulhossain/" label="LinkedIn" icon={Linkedin} />
              <SocialLink href="https://discord.gg/whEJ7K8de" label="Discord" icon={MessageCircle} />
              <SocialLink href="https://www.facebook.com/codervai" label="Facebook" icon={Facebook} />
            </div>
          </div>
        </div>

        <Separator className="bg-border/50" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <div className="text-sm text-muted-foreground text-center sm:text-left">
            © {currentYear} Olova UI. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 px-3 py-1.5 rounded-full border border-border/30">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" aria-label="love" />
            <span>by</span>
            <a
              href="https://olova.net"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              Olova
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});
Footer.displayName = "Footer";
