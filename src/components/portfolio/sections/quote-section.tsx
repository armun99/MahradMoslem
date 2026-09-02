import { Quote } from "lucide-react";
import { usePortfolio } from "@/context/locale-context";
import { placeholderImages } from "@/lib/placeholder-images";

export function QuoteSection() {
  const { t } = usePortfolio();

  return (
    <section className="relative flex min-h-[420px] items-center justify-center bg-background px-5 py-20 text-center lg:min-h-[520px]">
      <img src={placeholderImages.philosophy} width={1920} height={1088} loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover opacity-55" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--background)_40%,transparent),color-mix(in_oklab,var(--background)_82%,transparent))]" />
      <div className="relative max-w-5xl">
        <Quote className="mx-auto size-10 text-primary" />
        <blockquote className="mt-8 font-display text-3xl font-semibold uppercase leading-tight text-hero-foreground sm:text-5xl">
          &ldquo;{t.quote.text[0]}
          <br />
          {t.quote.text[1]}&rdquo;
        </blockquote>
        {t.quote.attribution && (
          <p className="mt-8 text-xs uppercase tracking-[.25em] text-hero-foreground/65">{t.quote.attribution}</p>
        )}
      </div>
    </section>
  );
}
