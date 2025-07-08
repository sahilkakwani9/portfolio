"use client";

import BlurFade from "@/components/text/blur-fade";
import Link from "next/link";
import { allBlogPosts } from "@/data/blog";
import { ExternalLinkIcon } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  const BLUR_FADE_DELAY = 0.04;
  return (
    <section className="max-w-2xl mx-auto py-16 flex flex-col items-center justify-center min-h-[60vh]">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-bold text-3xl sm:text-4xl tracking-tight text-center mb-2">Blog</h1>
        <p className="text-muted-foreground text-center text-base italic mb-6">
          My thoughts, learnings, and everything in between
        </p>
        <div className="rounded-lg border border-border/30 bg-muted/30 px-6 py-8 flex flex-col items-center">
          <span className="text-2xl sm:text-3xl font-semibold mb-2">🚧 Coming Soon 🚧</span>
          <span className="text-muted-foreground text-sm">I speak less, work more. :p</span>
        </div>
      </BlurFade>
    </section>
  );
}
