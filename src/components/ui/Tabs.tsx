"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface Tab { id: string; label: string; count?: number; }

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  children: (activeTab: string) => React.ReactNode;
  className?: string;
}

export function Tabs({ tabs, defaultTab, children, className }: TabsProps) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id);
  return (
    <div className={className}>
      <div className="flex gap-1 bg-charcoal-3 border border-charcoal-4 rounded-xl p-1 w-fit mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={cn(
              "flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
              active === tab.id
                ? "bg-charcoal-2 text-ivory border border-charcoal-4 shadow-sm"
                : "text-ivory-mute hover:text-ivory-dim"
            )}
          >
            {tab.label}
            {tab.count !== undefined && (
              <span className={cn("text-[10px] px-1.5 py-0.5 rounded-md font-semibold",
                active === tab.id ? "bg-charcoal-3 text-ivory-mute" : "bg-charcoal-4 text-ivory-mute"
              )}>
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>
      {children(active)}
    </div>
  );
}
