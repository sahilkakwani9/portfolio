"use client";

import BlurFade from "@/components/text/blur-fade";
import { ResumeCard } from "@/components/cards/resume-card";
import { DATA } from "@/data/resume";
import VideoPlayer from "@/components/ui/video";
import TextEffectWithExit from "@/components/headline";
import { ProjectList } from "@/components/cards/project-card";
import { HackathonCard } from "@/components/cards/hackathon-card";
import { Footer } from "@/components/footer";
import { CommandPalette } from "@/components/command-palette";

interface ProjectLink {
  type: string;
  href: string;
  icon: React.ReactNode;
}

interface Project {
  id: number;
  links: readonly ProjectLink[];
  description: string;
}

type ProjectsData = {
  Frontend?: Record<string, Project>;
  Backend?: Record<string, Project>;
  "Full Stack"?: Record<string, Project>;
  "SVM Programs"?: Record<string, Project>
};

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const getAllProjects = () => {
    return DATA.projects[0] as unknown as ProjectsData;
  };

  const getAllWork = () => {
    return [...DATA.work, ...DATA.openSource];
  };

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-2">
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
          <BlurFade
            delay={BLUR_FADE_DELAY * 2}
            className="flex justify-end gap-3 pb-4"
          >
            <span className="text-muted-foreground font-light tracking-wide text-sm italic opacity-80 hover:opacity-100 transition-opacity duration-300">
              — innovator
            </span>
          </BlurFade>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="prose max-w-full text-pretty font-sans text-md text-muted-foreground dark:prose-invert leading-[1.5]">
            I'm a{" "}
            <span className="font-semibold hover:text-foreground/80 cursor-pointer text-foreground">
              full-stack mobile developer
            </span>{" "}
            obsessed with building{" "}
            <span className="font-semibold hover:text-foreground/80 cursor-pointer text-foreground">
              trustless systems
            </span>{" "}
            that actually matter.
            <div className="mt-4">
              I build stuff on{" "}
              <span className="font-semibold hover:text-foreground/80 cursor-pointer text-foreground">
                EVM and SVM chains
              </span>{" "}
              and have{" "}
              <span className="font-semibold hover:text-foreground/80 cursor-pointer text-foreground">
                worked on products of my own
              </span>{" "}
              that are still looking for their moment. Every{" "}
              <span className="font-semibold hover:text-foreground/80 cursor-pointer text-foreground">
                flop teaches me something new
              </span>{" "}
              - so I keep building anyway. I'm part of{" "}
              <span className="font-semibold hover:text-foreground/80 cursor-pointer text-foreground">
                SuperteamIn
              </span>{" "}
              and{" "}
              <span className="font-semibold hover:text-foreground/80 cursor-pointer text-foreground">
                Developer DAO
              </span>,{" "}
              and got lucky enough to join{" "}
              <span className="font-semibold hover:text-foreground/80 cursor-pointer text-foreground">
                Base Fellowship 2.0
              </span>.
            </div>
            <div className="mt-4">
              When I'm not coding, you'll find me{" "}
              <span className="font-semibold hover:text-foreground/80 cursor-pointer text-foreground">
                grinding hackathons
              </span>,{" "}
              <span className="font-semibold hover:text-foreground/80 cursor-pointer text-foreground">
                ideating the next big thing
              </span>,{" "}
              or deep in a{" "}
              <span className="font-semibold hover:text-foreground/80 cursor-pointer text-foreground">
                good book (I'm a voracious reader)
              </span>.
            </div>
            <div className="mt-6 flex justify-center">
              <CommandPalette />
            </div>
          </div>
        </BlurFade>
      </section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzdiYWRseDVha2NwaG9jeXQzbmhmOXZsbGltbmxuMTk5eXBhYnpmNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JqmupuTVZYaQX5s094/giphy.gif"   className="w-full" />
        {/* <VideoPlayer src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzdiYWRseDVha2NwaG9jeXQzbmhmOXZsbGltbmxuMTk5eXBhYnpmNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JqmupuTVZYaQX5s094/giphy.gif" /> */}
      </BlurFade>
      <section id="projects">
        <div className="space-y-8 w-full py-6">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Builds
                </div>
                <p className="text-muted-foreground text-sm">
                  I&apos;ve worked on numerous <span className="font-semibold hover:text-foreground/80 cursor-pointer text-foreground">mobile</span> and <span className="font-semibold hover:text-foreground/80 cursor-pointer text-foreground">fullstack</span> projects, and have experience writing <span className="font-semibold hover:text-foreground/80 cursor-pointer text-foreground">smart contracts</span> as well that have processed more than <span className="font-bold text-foreground">50k+</span> transactions.
                  <br />
                  Here are a few of my favorites.
                </p>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="">
              <ProjectList projects={getAllProjects()} />
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

          <div className="flex flex-col border-t pt-2 border-border/40 w-full">
            {getAllWork().length > 0 ? (
              getAllWork().map((item: any, id: number) => (
                <BlurFade
                  key={item.company}
                  delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                >
                  <ResumeCard
                    key={item.company}
                    logoUrl={item.logoUrl || "/placeholder-logo.png"}
                    altText={item.company}
                    title={item.company}
                    subtitle={item.title}
                    href={item.href}
                    period={
                      item.start && item.end
                        ? `${item.start} - ${item.end || "Present"}`
                        : ""
                    }
                    description={item.description}
                    prLinks={item.prLinks}
                    isOpenSource={!!item.prLinks}
                  />
                </BlurFade>
              ))
            ) : (
              <div className="py-8 text-center text-muted-foreground text-sm italic">
                No work experience to show yet. Check back soon!
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="wins" className="pt-20">
        <div className="flex min-h-0 flex-col justify-center items-center gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="justify-center flex w-32 rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Wins
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 13.5}>
            <p className="text-muted-foreground text-sm text-center mt-2">
              Achievements and recognitions I've received along the way.
            </p>
          </BlurFade>

          <div className="pt-4 flex flex-col gap-y-2 border-t border-border/40 w-full">
            {Object.entries(DATA.wins)
              .slice(0, 5)
              .map(([title, data], id) => (
                <BlurFade key={title} delay={BLUR_FADE_DELAY * 14 + id * 0.05}>
                  <HackathonCard
                    key={title}
                    title={title}
                    href={data.link || "#"}
                  />
                </BlurFade>
              ))}

            <BlurFade delay={BLUR_FADE_DELAY * 15}>
              <div className="flex relative justify-center mt-4">
                <a
                  href="/wins"
                  className="inline-flex z-10 items-center justify-center rounded-md bg-[#b0e721] px-2 py-1 text-sm font-medium text-background shadow transition-colors hover:bg-[#b0e721]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  View All Wins
                </a>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="footer" className="pt-20">
        <Footer />
      </section>
    </main>
  );
}
