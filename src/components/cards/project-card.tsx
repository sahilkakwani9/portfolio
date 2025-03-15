import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectLink {
  type: string;
  href: string;
  icon: string;
}

interface ProjectCardProps {
  tag: string;
  title: string;
  links: ProjectLink[];
  description?: string;
  className?: string;
}

export function ProjectCard({
  tag,
  title,
  links,
  description,
  className,
}: ProjectCardProps) {
  return (
    <div className={cn("flex flex-col sm:flex-row sm:items-center justify-between group", className)}>
      <div className="flex items-center gap-3">
        <h3 className="text-sm">{title}</h3>
      </div>
      
      <div className="flex items-center gap-3">
        {links.map((link, index) => (
          <React.Fragment key={link.type}>
            <Link 
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1"
            >
              {link.icon}
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
} 