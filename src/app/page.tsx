"use client";

import BlurFade from "@/components/text/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import { RoughNotation } from "react-rough-notation";
import VideoPlayer from "@/components/video";
import TextEffectWithExit from "@/components/headline";
import { Badge } from "@/components/ui/badge";
import { GradientTracing } from "@/components/gradient-tracing";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex-col flex flex-1 justify-center items-center space-y-1.5">
            <BlurFade
              delay={BLUR_FADE_DELAY}
              className="text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none flex items-center gap-3"
            >
              <div className="font-serif italic main-text-in">
                <TextEffectWithExit />
              </div>
            </BlurFade>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <VideoPlayer src="/sarthak-pfp.mp4" />
          </BlurFade>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 pb-5 flex-col justify-center items-center gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="justify-center flex items-center w-32 rounded-lg bg-foreground text-background px-3 py-0.5 text-sm">
              About
            </div>
          </BlurFade>
        </div>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="prose max-w-full text-pretty font-sans text-md text-muted-foreground dark:prose-invert leading-[1.5]">
            I'm a{" "}
            <span className="font-semibold hover:text-foreground/80 cursor-pointer text-foreground">
              full-stack developer
            </span>{" "}
            with an experience of working with various{" "}
            <span className="font-semibold hover:text-foreground/80 cursor-pointer text-foreground">
              languages, protocols, and blockchains
            </span>
            .
            <div className="mt-4">
              Previously, I’ve interned at{" "}
              <span className="font-semibold hover:text-foreground/80 cursor-pointer text-foreground">
                3x early-stage startups
              </span>
              .
            </div>
            <div className="mt-4">
              I've won{" "}
              <span className="font-semibold hover:text-foreground/80 cursor-pointer text-foreground">
                20x hackathons
              </span>{" "}
              and enjoy{" "}
              <span className="font-semibold hover:text-foreground/80 cursor-pointer text-foreground">
                contributing
              </span>{" "}
              to open source projects. I'm also a contributor at{" "}
              <span className="font-semibold hover:text-foreground/80 cursor-pointer text-foreground">
                SuperteamIn
              </span>{" "}
              and a member at{" "}
              <span className="font-semibold hover:text-foreground/80 cursor-pointer text-foreground">
                FBI
              </span>{" "}
              (@callusfbi).
            </div>
          </div>
        </BlurFade>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-6">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Builds
                </div>
                <p className="text-muted-foreground">
                  I&apos;ve worked on a variety of projects, from{" "}
                  <b className="mr-1 dark:text-white text-black">frontend</b>
                  to <b className="dark:text-white text-black">backend</b> and
                  even{" "}
                  <b className="dark:text-white text-black">smart contracts</b>.
                  Here are a few of my favorites.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work" className="pt-20">
        <div className="flex min-h-0 flex-col justify-center items-center gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="justify-center flex w-42 rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Work Experience
            </div>
          </BlurFade>
          <div className="pt-6 flex flex-col gap-y-4">
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                className=""
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <p className="mx-auto max-w-[600px] text-muted-foreground">
                I'm always open to freelance work. If you're interested, feel
                free to{" "}
                <RoughNotation
                  type="highlight"
                  show={true}
                  strokeWidth={3}
                  animationDuration={400}
                  animationDelay={1000}
                  color="rgb(253 224 71 / 1)"
                >
                  <a
                    href="mailto:notsarthakshah@gmail.com"
                    className="text-black hover:underline"
                  >
                    email
                  </a>{" "}
                  /
                  <a
                    href="https://x.com/0xSarthak13"
                    target="_blank"
                    className="text-black hover:underline"
                  >
                    dm
                  </a>
                </RoughNotation>{" "}
                me.
              </p>
              <GradientTracing
                width={200}
                height={200}
                path="M100,0 L75,75 L125,75 L50,200 L100,100 L50,100 L100,0"
                gradientColors={["#F1C40F", "#F1C40F", "#E67E22"]}
              />
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
