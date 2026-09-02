import { Building2 } from "lucide-react";
import { SectionTitle } from "@/components/portfolio/section-title";
import { usePortfolio } from "@/context/locale-context";

export function ClubsSection() {
  const { t } = usePortfolio();

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <SectionTitle eyebrow={t.clubs.eyebrow}>
        {t.clubs.title[0]}
        <br />
        {t.clubs.title[1]}
      </SectionTitle>
      <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground">{t.clubs.intro}</p>
      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {t.clubs.items.map((club) => (
          <article key={club.name} className="glass-card glass-card-hover rounded-xl p-8">
            <Building2 className="size-8 text-primary" />
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-primary">{club.role}</p>
            <h3 className="mt-3 font-display text-3xl font-semibold uppercase">{club.name}</h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{club.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
