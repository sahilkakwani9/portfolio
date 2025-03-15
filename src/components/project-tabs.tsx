import React from "react";
import { cn } from "@/lib/utils";

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

const tabMapping = {
  "Smart Contracts": "Contracts",
  "Full Stack": "Fullstack",
  "hackathon": "Hackathons",
  "title": "Title",
  "speaker": "Speaking"
};

export function Tabs({
  tabs,
  activeTab,
  onTabChange,
  className,
}: TabsProps) {
  return (
    <div className={cn("flex flex-wrap gap-2 justify-center", className)}>
      {tabs.map((tab) => {
        const displayTab = tabMapping[tab as keyof typeof tabMapping] || tab;
        const isActive = activeTab === tab;
        
        return (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={cn(
              "px-4 py-1.5 text-xs rounded-full transition-all duration-300 font-medium",
              isActive
                ? "bg-foreground text-background shadow-sm" 
                : "bg-background hover:bg-muted/50 border border-border/40 hover:border-border/80"
            )}
          >
            {displayTab}
          </button>
        );
      })}
    </div>
  );
}

// For backward compatibility
export const ProjectTabs = Tabs; 