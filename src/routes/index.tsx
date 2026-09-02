import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Image,
  Mail,
  Route as RouteIcon,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/portfolio/site-shell";
import { QuoteSection } from "@/components/portfolio/sections/quote-section";
import { content } from "@/content/portfolio";
import { usePortfolio } from "@/context/locale-context";
import { cn } from "@/lib/utils";

const sectionIcons: Record<string, typeof User> = {
  "/about": User,
  "/books": BookOpen,
  "/routes-line-map": RouteIcon,
  "/gallery": Image,
  "/contact": Mail,
  "/training-courses": GraduationCap,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: content.fa.meta.title },
      { name: "description", content: content.fa.meta.description },
      { property: "og:title", content: content.fa.meta.title },
      { property: "og:description", content: content.fa.meta.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t, isRtl, arrowClass } = usePortfolio();

  const heroImage = isRtl ? "/lasport-flip.jpg" : "/lasport.jpg";
  const heroObjectPosition = isRtl ? "28% center" : "72% center";
  const heroGradient = isRtl
    ? "linear-gradient(270deg,color-mix(in oklab,var(--background)_98%,transparent)_0%,color-mix(in oklab,var(--background)_88%,transparent)_32%,color-mix(in oklab,var(--background)_45%,transparent)_55%,transparent_72%)"
    : "linear-gradient(90deg,color-mix(in oklab,var(--background)_98%,transparent)_0%,color-mix(in oklab,var(--background)_88%,transparent)_32%,color-mix(in oklab,var(--background)_45%,transparent)_55%,transparent_72%)";

  return (
    <SiteShell home>
      <section className="relative min-h-[100dvh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            width={1920}
            height={1280}
            alt=""
            className="hero-drift h-full w-full object-cover"
            style={{ objectPosition: heroObjectPosition }}
          />
        </div>
        <div className="absolute inset-0" style={{ background: heroGradient }} />
        <div
          className={cn(
            "absolute inset-y-0 flex w-[min(100%,34rem)] flex-col justify-center px-5 pb-16 pt-28 sm:w-[min(100%,40rem)] lg:px-10",
            isRtl ? "right-0" : "left-0",
          )}
        >
          <div dir={isRtl ? "rtl" : "ltr"} className={cn("w-full", isRtl ? "text-right" : "text-left")}>
            <p className="eyebrow mb-5 text-primary">{t.hero.tagline}</p>
            <h1
              className={cn(
                "font-display text-[clamp(2rem,6vw,4.25rem)] font-extrabold leading-[1.12] text-hero-foreground drop-shadow-sm",
                !isRtl && "uppercase tracking-tight",
              )}
            >
              {t.hero.headline[0]}
              <br />
              <span className="text-primary">{t.hero.headline[1]}</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-hero-foreground/90 sm:text-lg">{t.hero.intro}</p>
            <div className={cn("mt-8 flex flex-wrap gap-3", isRtl && "justify-end")}>
              <Button asChild variant="ember" size="lg">
                <Link to="/about">
                  {t.cta.explore} <ArrowDown />
                </Link>
              </Button>
              <Button asChild variant="cinematic" size="lg">
                <Link to="/contact">{t.cta.workWithMe}</Link>
              </Button>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "absolute bottom-8 flex items-center gap-3 text-xs text-hero-foreground/70",
            isRtl ? "right-5 lg:right-10" : "left-5 lg:left-10",
          )}
        >
          <span className="h-10 w-px overflow-hidden bg-hero-foreground/25">
            <span className="scroll-mark block h-4 w-px bg-primary" />
          </span>
          {t.hero.scroll}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="eyebrow mb-4">{t.home.sectionsEyebrow}</p>
        <h2 className={cn("font-display text-3xl font-bold sm:text-4xl", !isRtl && "uppercase")}>{t.home.sectionsTitle}</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.home.sections.map((section) => {
            const Icon = sectionIcons[section.path] ?? Mountain;
            return (
              <Link
                key={section.path}
                to={section.path}
                className="glass-card glass-card-hover group flex min-h-[11rem] cursor-pointer flex-col justify-between rounded-xl p-6 sm:p-7"
              >
                <div>
                  <div className="mb-4 inline-flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <h3 className={cn("font-display text-xl font-semibold", !isRtl && "uppercase")}>{section.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{section.description}</p>
                </div>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  {t.cta.learnMore}
                  <ArrowRight className={cn("size-4 transition-transform duration-200 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5", arrowClass)} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <QuoteSection />
    </SiteShell>
  );
}
