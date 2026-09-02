import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/portfolio/section-title";
import { usePortfolio } from "@/context/locale-context";

export function AboutSection() {
  const { t, arrowClass } = usePortfolio();

  return (
    <section className="grid lg:grid-cols-2">
      <div className="relative min-h-[520px] overflow-hidden lg:min-h-[620px]">
        <img
          src="/bio1.jpg"
          width={1024}
          height={1280}
          loading="eager"
          alt={t.brand}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>
      <div className="flex items-center bg-card px-6 py-20 sm:px-12 lg:px-16">
        <div className="max-w-2xl">
          <SectionTitle eyebrow={t.about.eyebrow}>
            {t.about.title[0]}
            <br />
            {t.about.title[1]}
          </SectionTitle>
          <div className="mt-8 space-y-5 text-sm leading-7 text-muted-foreground sm:text-base">
            {t.about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <Button asChild variant="cinematic" size="lg" className="mt-9">
            <Link to="/achievements">
              {t.cta.readStory} <ArrowRight className={arrowClass} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
