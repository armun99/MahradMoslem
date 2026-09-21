import { Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePortfolio } from "@/context/locale-context";

export function TrainingCoursesSection() {
  const { t, arrowClass, isRtl } = usePortfolio();

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <div className="relative mb-10 aspect-[21/9] overflow-hidden rounded-2xl sm:mb-12 sm:aspect-[2.4/1]">
        <img
          src={`/${encodeURIComponent("traning image.jpg")}`}
          alt=""
          width={1600}
          height={900}
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[center_45%]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8" dir={isRtl ? "rtl" : "ltr"}>
          <p className="font-display text-xl font-semibold text-white drop-shadow sm:text-2xl">
            {t.trainingCourses.title[0]}{" "}
            <span className="text-white/90">{t.trainingCourses.title[1]}</span>
          </p>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {t.trainingCourses.items.map((course) => (
          <article key={course.title} className="glass-card glass-card-hover rounded-xl p-7">
            <GraduationCap className="size-8 text-primary" aria-hidden />
            <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t.trainingCourses.levelLabel}: {course.level}
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold">{course.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{course.description}</p>
          </article>
        ))}
      </div>

      <Button asChild variant="ember" size="lg" className="mt-10">
        <Link to="/contact">
          {t.trainingCourses.enrollCta} <ArrowRight className={arrowClass} />
        </Link>
      </Button>
    </section>
  );
}
