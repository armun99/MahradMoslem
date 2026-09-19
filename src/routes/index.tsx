import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  BookOpen,
  GraduationCap,
  Image,
  Mail,
  Route as RouteIcon,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/portfolio/site-shell";
import { content } from "@/content/portfolio";
import { usePortfolio } from "@/context/locale-context";
import { useThemeContext } from "@/context/theme-context";
import { cn } from "@/lib/utils";

const sectionIcons: Record<string, typeof User> = {
  "/about": User,
  "/books": BookOpen,
  "/routes-line-map": RouteIcon,
  "/gallery": Image,
  "/contact": Mail,
  "/training-courses": GraduationCap,
};

const sectionBackgrounds: Record<string, string> = {
  "/about": "/bio1.jpg",
  "/books": `/books/${encodeURIComponent("کتاب سنگ نگاره.jpg")}`,
  "/routes-line-map": `/routes/${encodeURIComponent("دیواره مهستان.jpg")}`,
  "/gallery": `/gallery/${encodeURIComponent("photo_1_2026-09-05_10-59-53.jpg")}`,
  "/contact": "/lasport.jpg",
  "/training-courses": "/20230924_182642.jpg",
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
  const { t, isRtl } = usePortfolio();
  const { isDark } = useThemeContext();

  const heroImage = isDark ? "/dark-hero.jpg" : isRtl ? "/lasport-flip.jpg" : "/lasport.jpg";
  const heroGradient = isDark
    ? isRtl
      ? "linear-gradient(270deg,color-mix(in oklab,var(--background)_92%,transparent)_0%,color-mix(in oklab,var(--background)_70%,transparent)_28%,color-mix(in oklab,var(--background)_35%,transparent)_50%,transparent_70%)"
      : "linear-gradient(90deg,color-mix(in oklab,var(--background)_92%,transparent)_0%,color-mix(in oklab,var(--background)_70%,transparent)_28%,color-mix(in oklab,var(--background)_35%,transparent)_50%,transparent_70%)"
    : isRtl
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
            fetchPriority="high"
            decoding="async"
            className={cn(
              "hero-drift h-full w-full object-cover",
              isDark
                ? // Mobile: climber high; desktop: show the full night scene again
                  "object-[72%_18%] lg:object-[center_42%]"
                : isRtl
                  ? "object-[28%_center]"
                  : "object-[72%_center]",
            )}
          />
        </div>
        {/* Desktop side wash */}
        <div className={cn("absolute inset-0", isDark && "hidden lg:block")} style={{ background: heroGradient }} />
        {/* Mobile dark: bottom wash so copy sits clear of the climber */}
        {isDark ? (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-black via-black/75 to-transparent lg:hidden"
            aria-hidden
          />
        ) : null}
        <div
          className={cn(
            "absolute z-10 flex flex-col px-5",
            isDark
              ? cn(
                  // Mobile dark: pin copy to the dark lower band
                  "inset-x-0 bottom-0 top-auto justify-end pb-12 pt-28",
                  // Desktop dark: restore side column
                  "lg:inset-y-0 lg:bottom-auto lg:top-0 lg:w-[min(100%,40rem)] lg:justify-center lg:pb-16 lg:pt-28 lg:px-10",
                  isRtl ? "lg:right-0 lg:left-auto" : "lg:left-0 lg:right-auto",
                )
              : cn(
                  "inset-y-0 w-[min(100%,34rem)] justify-center pb-16 pt-28 sm:w-[min(100%,40rem)] lg:px-10",
                  isRtl ? "right-0" : "left-0",
                ),
          )}
        >
          <div dir={isRtl ? "rtl" : "ltr"} className={cn("w-full", isRtl ? "text-right" : "text-left")}>
            {t.hero.tagline ? <p className="eyebrow mb-5 text-primary">{t.hero.tagline}</p> : null}
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
            {t.hero.intro ? (
              <p className="mt-6 text-base leading-relaxed text-hero-foreground/90 sm:text-lg">{t.hero.intro}</p>
            ) : null}
            <div className="mt-8 flex flex-wrap gap-3">
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
        {t.hero.scroll ? (
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
        ) : null}
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="eyebrow mb-4">{t.home.sectionsEyebrow}</p>
        <h2 className={cn("font-display text-3xl font-bold sm:text-4xl", !isRtl && "uppercase")}>{t.home.sectionsTitle}</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.home.sections.map((section) => {
            const Icon = sectionIcons[section.path] ?? User;
            const bg = sectionBackgrounds[section.path] ?? "/lasport.jpg";
            return (
              <Link
                key={section.path}
                to={section.path}
                className="group relative flex min-h-[17rem] cursor-pointer flex-col justify-end overflow-hidden rounded-xl border border-border/40 sm:min-h-[18.5rem]"
              >
                <img
                  src={bg}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/15 transition-opacity duration-300 group-hover:from-black/95 group-hover:via-black/60"
                  aria-hidden
                />
                <div className="relative z-10 flex flex-col justify-end p-6 sm:p-7">
                  <div className="mb-4 inline-flex size-11 items-center justify-center rounded-lg bg-white/15 text-white backdrop-blur-sm transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <h3 className={cn("font-display text-xl font-semibold text-white", !isRtl && "uppercase")}>
                    {section.title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </SiteShell>
  );
}
