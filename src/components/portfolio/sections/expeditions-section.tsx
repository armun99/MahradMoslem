import { Compass, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/portfolio/section-title";
import { usePortfolio } from "@/context/locale-context";
import { placeholderImages } from "@/lib/placeholder-images";

export function ExpeditionsSection() {
  const { t, arrowClass } = usePortfolio();

  return (
    <section className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24">
      <SectionTitle eyebrow={t.expeditions.eyebrow}>
        {t.expeditions.title[0]}
        <br />
        {t.expeditions.title[1]}
      </SectionTitle>
      <div className="mt-14 grid lg:grid-cols-[1.1fr_.9fr]">
        <div className="relative min-h-[420px] lg:min-h-[650px]">
          <img src={placeholderImages.expedition} width={1200} height={1504} loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover" />
          <span className="absolute start-6 top-6 bg-background/85 px-4 py-3 text-xs uppercase tracking-widest">
            <MapPin className="me-2 inline size-4 text-primary" />
            {t.expeditions.featured.locationTag}
          </span>
        </div>
        <div className="flex flex-col justify-center border border-border bg-background p-7 sm:p-12">
          <p className="text-xs uppercase tracking-[.22em] text-primary">{t.expeditions.featured.label}</p>
          <h3 className="mt-4 font-display text-5xl font-bold uppercase">{t.expeditions.featured.title}</h3>
          <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-border py-7 text-sm">
            <div>
              <dt className="text-muted-foreground">{t.expeditions.featured.locationLabel}</dt>
              <dd className="mt-2 uppercase">{t.expeditions.featured.location}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">{t.expeditions.featured.difficultyLabel}</dt>
              <dd className="mt-2 uppercase">{t.expeditions.featured.difficulty}</dd>
            </div>
          </dl>
          <p className="mt-7 leading-7 text-muted-foreground">{t.expeditions.featured.story}</p>
          <Button variant="cinematic" size="lg" className="mt-8 self-start">
            {t.expeditions.featured.cta} <Compass className={arrowClass} />
          </Button>
        </div>
      </div>
    </section>
  );
}
