import { Quote } from "lucide-react";
import { SectionTitle } from "@/components/portfolio/section-title";
import { usePortfolio } from "@/context/locale-context";

export function TestimonialsSection() {
  const { t } = usePortfolio();

  return (
    <section className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24">
      <SectionTitle eyebrow={t.testimonials.eyebrow}>{t.testimonials.title}</SectionTitle>
      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {t.testimonials.items.map(([q, n, r]) => (
            <article key={n} className="glass-card rounded-xl p-8">
            <Quote className="size-7 text-primary" />
            <p className="mt-8 font-display text-2xl leading-snug">&ldquo;{q}&rdquo;</p>
            <p className="mt-8 text-xs font-semibold uppercase tracking-widest">{n}</p>
            <p className="mt-2 text-xs text-muted-foreground">{r}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
