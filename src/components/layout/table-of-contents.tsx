"use client";

import { useTableOfContents } from "@/hooks/use-table-of-contents";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import React, { useState } from "react";

export const TableOfContents: React.FC = () => {
  const { toc, activeId, scrollToHeading } = useTableOfContents();
  const [isCollapsed, setIsCollapsed] = useState(false);

  if (toc.length === 0 || toc.every((item) => !item.text.trim())) {
    return null;
  }

  return (
    <aside className="hidden xl:block w-72 h-[calc(100dvh-57px)] sticky top-[57px] flex-shrink-0 border-l border-r border-neutral-200 dark:border-zinc-800">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex-shrink-0 p-4 pb-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              On this page
            </h3>

            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isCollapsed ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronUp className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Navigation */}
        {!isCollapsed && (
          <div className="flex-1 overflow-y-auto px-4 pb-4">
            <nav className="space-y-1">
              {toc.map((item) => {
                const isActive = item.id === activeId;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToHeading(item.id)}
                    className={cn(
                      "block w-full text-left py-1.5 border-l px-4 -ml-[1px] transition-none",
                      isActive
                        ? "border-primary font-medium text-foreground"
                        : "border-border hover:text-foreground hover:border-border/80 border-transparent",
                      // Font size hierarchy
                      item.level === 1 && "text-sm", // H1
                      item.level === 2 && "text-sm text-muted-foreground", // H2
                      item.level === 3 && "text-xs text-muted-foreground", // H3
                      !isActive && item.level !== 1 && "text-muted-foreground"
                    )}
                  >
                    {item.text}
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </aside>
  );
};
