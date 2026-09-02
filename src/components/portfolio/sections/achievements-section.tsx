import { SectionTitle } from "@/components/portfolio/section-title";
import { usePortfolio } from "@/context/locale-context";

export function AchievementsSection() {
  const { t } = usePortfolio();

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <SectionTitle eyebrow={t.achievements.eyebrow}>
        {t.achievements.title[0]}
        <br />
        {t.achievements.title[1]}
      </SectionTitle>
      <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {t.achievements.stats.map(([number, label]) => (
          <div key={label} className="glass-card rounded-xl p-6 lg:p-8">
            <div className="font-display text-4xl font-bold text-primary sm:text-6xl">{number}</div>
            <div className="mt-3 text-sm leading-relaxed text-muted-foreground">{label}</div>
          </div>
        ))}
      </div>
      <div className="mt-20 grid gap-10 lg:grid-cols-[.6fr_1.4fr]">
        <p className="font-display text-3xl uppercase text-stone">{t.achievements.timelineLabel}</p>
        <div className="flex flex-col gap-4">
          {t.achievements.timeline.map(([year, title, desc]) => (
            <article
              key={`${year}-${title}`}
              className="group rounded-xl border border-border/60 bg-card/40 p-6 transition-colors duration-200 hover:border-primary/30 hover:bg-card/70"
            >
              <span className="font-display text-lg font-semibold text-primary">{year}</span>
              <h3 className="mt-2 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
