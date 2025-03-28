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

interface ProjectListProps {
  projects: {
    tag: string;
    title: string;
    links: ProjectLink[];
    description?: string;
  }[];
}

export function ProjectCard({
  tag,
  title,
  links,
  description,
  className,
}: ProjectCardProps) {
  return (
    <div className={cn("flex flex-row items-center justify-between group", className)}>
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

export function ProjectList({ projects }: ProjectListProps) {
  const [visibleProjects, setVisibleProjects] = React.useState<number>(5);
  const [isAnimating, setIsAnimating] = React.useState<boolean>(false);
  
  const displayedProjects = projects.slice(0, visibleProjects);
  const isExpanded = visibleProjects > 5;
  const showLoadMore = projects.length > visibleProjects;
  
  const handleLoadMore = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setVisibleProjects(prev => Math.min(prev + 5, projects.length));
      setTimeout(() => setIsAnimating(false), 150);
    }, 50);
  };
  
  const handleLoadLess = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setVisibleProjects(5);
      setTimeout(() => setIsAnimating(false), 150);
    }, 50);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="space-y-0 transition-all duration-500 ease-in-out">
        {displayedProjects.map((project, index) => (
          <div 
            key={`${project.title}-${index}`} 
            className={`transition-all duration-300 ease-in-out transform ${
              isAnimating ? 'opacity-70 scale-[0.99]' : 'opacity-100 scale-100'
            }`}
          >
            <ProjectCard
              tag={project.tag}
              title={project.title}
              links={project.links}
              description={project.description}
              className={index !== 0 ? "border-t border-border/40 py-0.5" : ""}
            />
          </div>
        ))}
      </div>
      
      <div className={`flex relative justify-center mt-4 gap-4 transition-opacity duration-300 ${isAnimating ? 'opacity-70' : 'opacity-100'}`}>
        {showLoadMore && (
          <button
            onClick={handleLoadMore}
            className="inline-flex z-10 items-center justify-center rounded-md bg-[#b0e721] px-3 py-1 text-sm font-medium text-background shadow transition-all duration-300 hover:bg-[#b0e721]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:scale-105"
            disabled={isAnimating}
          >
            Load More
          </button>
        )}
        
        {isExpanded && (
          <button
            onClick={handleLoadLess}
            className="inline-flex z-10 items-center justify-center rounded-md bg-muted px-3 py-1 text-sm font-medium text-muted-foreground shadow transition-all duration-300 hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:scale-105"
            disabled={isAnimating}
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
} 