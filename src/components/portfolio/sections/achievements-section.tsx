import { useEffect, useRef, useState } from "react";
import { usePortfolio } from "@/context/locale-context";
import { cn } from "@/lib/utils";

export function AchievementsSection() {
  const { t, isRtl } = usePortfolio();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <h1
        className={cn(
          "mb-12 text-2xl font-bold text-foreground sm:text-3xl",
          !isRtl && "uppercase tracking-wide",
        )}
        dir={isRtl ? "rtl" : "ltr"}
      >
        {isRtl ? "مسیر" : "Experience"}
      </h1>

      <div dir="ltr" className="flex flex-col">
        {t.achievements.timeline.map(([year, title], index) => {
          const contentOnLeft = index % 2 === 0;
          return (
            <div
              key={`${year}-${title}`}
              className={cn(
                "flex justify-between transition-all duration-500 ease-out",
                visible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0",
              )}
              style={{ transitionDelay: visible ? `${index * 0.18}s` : "0s" }}
            >
              <div className="flex w-[42%] flex-col gap-2 pb-10">
                {contentOnLeft && <PathCard year={year} title={title} align="end" />}
              </div>

              <div className="flex w-[16%] flex-col items-center">
                <div className="size-4 shrink-0 rounded-full bg-white ring-2 ring-primary dark:bg-zinc-900" />
                {index < t.achievements.timeline.length - 1 && (
                  <div className="w-0.5 flex-1 bg-foreground/80 dark:bg-foreground/50" />
                )}
              </div>

              <div className="flex w-[42%] flex-col gap-2 pb-10">
                {!contentOnLeft && <PathCard year={year} title={title} align="start" />}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function PathCard({
  year,
  title,
  align,
}: {
  year: string;
  title: string;
  align: "start" | "end";
}) {
  return (
    <div className={cn("flex flex-col gap-2", align === "end" ? "items-end text-end" : "items-start text-start")}>
      <h2 className="w-fit rounded-md bg-white px-3 py-2 text-sm font-bold text-foreground shadow-sm dark:bg-zinc-900 dark:ring-1 dark:ring-white/10 sm:text-base">
        {title}
      </h2>
      {year !== "—" && <span className="text-sm font-medium text-primary">{year}</span>}
    </div>
  );
}
