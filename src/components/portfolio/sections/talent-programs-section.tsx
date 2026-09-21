import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Compass, GraduationCap, Map, Target, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  talentTrainingHero,
  talentTrainingPhotos,
  talentTrainingSrc,
} from "@/content/talent-training-catalog";
import { usePortfolio } from "@/context/locale-context";
import { cn } from "@/lib/utils";

const itemIcons = [Target, GraduationCap, Compass, Map] as const;

export function TalentProgramsSection() {
  const { t, isRtl, arrowClass } = usePortfolio();
  const page = t.talentPrograms;
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") {
        setLightbox((i) => (i === null ? i : (i + (isRtl ? -1 : 1) + talentTrainingPhotos.length) % talentTrainingPhotos.length));
      }
      if (e.key === "ArrowLeft") {
        setLightbox((i) => (i === null ? i : (i + (isRtl ? 1 : -1) + talentTrainingPhotos.length) % talentTrainingPhotos.length));
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, isRtl]);

  const selected = lightbox === null ? undefined : talentTrainingPhotos[lightbox];

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <div className="relative mb-10 aspect-[21/9] overflow-hidden rounded-2xl sm:mb-12 sm:aspect-[2.4/1]">
        <img
          src={talentTrainingSrc(talentTrainingHero)}
          alt=""
          width={1600}
          height={900}
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/25 to-transparent"
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8" dir={isRtl ? "rtl" : "ltr"}>
          <p className="font-display text-xl font-semibold text-white drop-shadow sm:text-2xl">
            {page.title[0]} <span className="text-white/90">{page.title[1]}</span>
          </p>
        </div>
      </div>

      <header className={cn("max-w-3xl", isRtl ? "text-right" : "text-left")}>
        {page.eyebrow ? (
          <p className={cn("mb-3 text-sm font-medium text-primary", !isRtl && "eyebrow")}>{page.eyebrow}</p>
        ) : null}
        <h1
          className={cn(
            "font-display font-bold text-foreground",
            isRtl ? "text-3xl leading-snug sm:text-4xl" : "text-3xl uppercase tracking-tight sm:text-4xl",
          )}
        >
          {page.title[0]}{" "}
          <span className="text-muted-foreground">{page.title[1]}</span>
        </h1>
        {page.intro ? (
          <p className="mt-4 text-base leading-8 text-muted-foreground sm:text-[1.05rem]">{page.intro}</p>
        ) : null}
      </header>

      {page.items.length > 0 ? (
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {page.items.map((item, index) => {
            const Icon = itemIcons[index % itemIcons.length]!;
            return (
              <article key={item.title} className="glass-card glass-card-hover rounded-xl p-7">
                <Icon className="size-8 text-primary" aria-hidden />
                <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {item.role}
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="glass-card mt-12 rounded-xl px-6 py-14 text-center sm:px-10">
          <Target className="mx-auto size-10 text-primary/80" aria-hidden />
          <p className="mt-5 text-base text-muted-foreground">{page.comingSoon}</p>
        </div>
      )}

      <div className="mt-16">
        <p className={cn("mb-5 text-sm font-medium text-primary", !isRtl && "eyebrow")}>{page.galleryHeading}</p>
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {talentTrainingPhotos.map((file, index) => (
            <button
              key={file}
              type="button"
              onClick={() => setLightbox(index)}
              className={cn(
                "group relative mb-4 block w-full overflow-hidden rounded-lg",
                index % 5 === 0 ? "aspect-[4/5]" : "aspect-[4/3]",
              )}
            >
              <img
                src={talentTrainingSrc(file)}
                width={1200}
                height={1500}
                loading="lazy"
                decoding="async"
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            </button>
          ))}
        </div>
      </div>

      <Button asChild variant="ember" size="lg" className="mt-10">
        <Link to="/contact">
          {page.cta} <ArrowRight className={arrowClass} />
        </Link>
      </Button>

      {selected && lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={page.galleryHeading}
          onClick={() => setLightbox(null)}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLightbox(null)}
            className="absolute end-5 top-5 text-foreground"
            aria-label="Close"
          >
            <X />
          </Button>
          <img
            src={talentTrainingSrc(selected)}
            alt=""
            className="max-h-[86vh] max-w-[92vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-5 text-xs tracking-widest text-muted-foreground">
            {lightbox + 1} / {talentTrainingPhotos.length}
          </p>
        </div>
      )}
    </section>
  );
}
