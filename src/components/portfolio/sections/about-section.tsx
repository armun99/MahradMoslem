import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePortfolio } from "@/context/locale-context";

export function AboutSection() {
  const { t, arrowClass } = usePortfolio();

  return (
    <section className="grid lg:grid-cols-2">
      {/* Bio text first on mobile; image first on desktop */}
      <div className="order-1 flex items-center px-6 py-14 sm:px-12 sm:py-16 lg:order-2 lg:px-16 lg:py-20">
        <div className="max-w-2xl space-y-5 text-sm leading-7 text-muted-foreground sm:text-base">
          {t.about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <Button asChild variant="cinematic" size="lg" className="mt-4">
            <Link to="/achievements">
              {t.cta.readStory} <ArrowRight className={arrowClass} />
            </Link>
          </Button>
        </div>
      </div>

      <div className="relative order-2 min-h-[280px] overflow-hidden sm:min-h-[360px] lg:order-1 lg:min-h-[620px]">
        <img
          src="/bio1.jpg"
          width={1024}
          height={1280}
          loading="eager"
          alt={t.brand}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>
    </section>
  );
}
