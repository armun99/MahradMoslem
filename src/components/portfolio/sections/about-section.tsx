import { usePortfolio } from "@/context/locale-context";
import { cn } from "@/lib/utils";

export function AboutSection() {
  const { t, isRtl } = usePortfolio();

  return (
    <section className="lg:grid lg:min-h-[calc(100dvh-4.75rem)] lg:grid-cols-2">
      {/* Photo first on mobile — visual anchor before the long bio */}
      <figure className="relative isolate aspect-[3/4] overflow-hidden sm:aspect-[4/5] lg:aspect-auto lg:min-h-full">
        <img
          src="/bio1.jpg"
          width={1024}
          height={1280}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          alt={t.brand}
          className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
        />
        <div
          className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent px-6 pb-7 pt-24 lg:hidden"
          dir={isRtl ? "rtl" : "ltr"}
        >
          {t.about.eyebrow ? (
            <p className="mb-2 text-xs font-medium tracking-wide text-white/75">{t.about.eyebrow}</p>
          ) : null}
          <h1
            className={cn(
              "font-display text-3xl font-bold leading-tight text-white sm:text-4xl",
              !isRtl && "uppercase tracking-tight",
            )}
          >
            {t.about.title[0]}
            <span className="mt-1 block text-lg font-semibold text-white/85 sm:text-xl">
              {t.about.title[1]}
            </span>
          </h1>
        </div>
      </figure>

      <div
        className="flex items-center px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20 xl:px-16"
        dir={isRtl ? "rtl" : "ltr"}
      >
        <div className="mx-auto w-full max-w-2xl">
          <header className="mb-8 hidden lg:block">
            {t.about.eyebrow ? (
              <p className={cn("mb-3 text-sm font-medium text-primary", !isRtl && "eyebrow")}>
                {t.about.eyebrow}
              </p>
            ) : null}
            <h1
              className={cn(
                "font-display text-4xl font-bold leading-tight text-foreground xl:text-5xl",
                !isRtl && "uppercase tracking-tight",
              )}
            >
              {t.about.title[0]}
              <span className="mt-2 block text-xl font-semibold text-muted-foreground xl:text-2xl">
                {t.about.title[1]}
              </span>
            </h1>
          </header>

          <div className="space-y-5 text-[0.95rem] leading-8 text-foreground/80 sm:text-base sm:leading-8">
            {t.about.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
