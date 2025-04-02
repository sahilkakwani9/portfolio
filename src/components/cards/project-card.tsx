import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import BlurFade from "@/components/text/blur-fade";
import { motion } from "framer-motion";

interface ProjectLink {
  type: string;
  href: string;
  icon: React.ReactNode;
}

interface ProjectCardProps {
  title: string;
  links: ProjectLink[];
  description?: string;
  className?: string;
}

interface ProjectListProps {
  projects: {
    title: string;
    links: ProjectLink[];
    description?: string;
  }[];
}

export function ProjectCard({
  title,
  links,
  description,
  className,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className={cn("flex flex-col group", className)}>
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-sm font-medium">{title}</h3>
        <div className="flex items-center">
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
          {description && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {isExpanded ? (
                <ChevronUpIcon className="h-4 w-4" />
              ) : (
                <ChevronDownIcon className="h-4 w-4" />
              )}
            </button>
          )}
        </div>
      </div>
      {description && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isExpanded ? 1 : 0,
            height: isExpanded ? "auto" : 0,
          }}
          transition={{
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-sm text-muted-foreground"
        >
          {description}
        </motion.div>
      )}
    </div>
  );
}

export function ProjectList({ projects }: ProjectListProps) {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const [isAnimating, setIsAnimating] = React.useState<boolean>(false);
  
  const displayedProjects = expanded ? projects : projects.slice(0, 5);
  const showLoadMore = !expanded && projects.length > 5;
  
  const handleToggleExpand = (expand: boolean) => {
    setIsAnimating(true);
    setTimeout(() => {
      setExpanded(expand);
      setTimeout(() => setIsAnimating(false), 150);
    }, 50);
  };

  return (
    <div className="flex flex-col">
      <BlurFade delay={0.04} className="transition-all duration-500 ease-in-out">
        {displayedProjects.map((project, index) => (
          <div 
            key={`${project.title}-${index}`} 
            className="transition-all duration-300 ease-in-out transform"
          >
            <ProjectCard
              title={project.title}
              links={project.links}
              description={project.description}
              className={index !== 0 ? "border-t border-border/40" : ""}
            />
          </div>
        ))}
      </BlurFade>
      
      <div className="flex relative justify-center mt-4 gap-4">
        {showLoadMore && (
          <BlurFade delay={0.04}>
            <button
              onClick={() => handleToggleExpand(true)}
              className="inline-flex z-10 gap-2 items-center justify-center rounded-md px-3 py-1 text-sm font-medium shadow transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:scale-105 text-foreground"
              disabled={isAnimating}
            >
              Load More <ChevronDownIcon className="w-4 h-4" />
            </button>
          </BlurFade>
        )}
        
        {expanded && (
          <BlurFade delay={0.04}>
            <button
              onClick={() => handleToggleExpand(false)}
              className="inline-flex z-10 gap-2 items-center justify-center rounded-md px-3 py-1 text-sm font-medium text-muted-foreground shadow transition-all duration-300 hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:scale-105"
              disabled={isAnimating}
            >
              Show Less <ChevronUpIcon className="w-4 h-4" />
            </button>
          </BlurFade>
        )}
      </div>
    </div>
  );
} 