import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/portfolio/section-title";
import { usePortfolio } from "@/context/locale-context";
import { coachingIcons } from "@/lib/coaching-icons";

export function CoachingSection() {
  const { t, arrowClass } = usePortfolio();

  return (
    <section className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-2">
        <SectionTitle eyebrow={t.coaching.eyebrow}>{t.coaching.title}</SectionTitle>
        <p className="self-end max-w-xl text-base leading-8 text-muted-foreground">{t.coaching.intro}</p>
      </div>
      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.coaching.items.map(({ icon, title, description }) => {
          const Icon = coachingIcons[icon];
          return (
              <article key={title} className="glass-card rounded-xl p-7 transition-colors duration-200 hover:border-primary/30">
              <Icon className="size-8 text-primary" />
              <h3 className="mt-12 font-display text-2xl font-semibold uppercase">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
            </article>
          );
        })}
      </div>
      <Button asChild variant="ember" size="lg" className="mt-10">
        <Link to="/contact">
          {t.cta.trainWithMe} <ArrowRight className={arrowClass} />
        </Link>
      </Button>
    </section>
  );
}
