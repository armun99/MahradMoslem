import { Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/portfolio/section-title";
import { usePortfolio } from "@/context/locale-context";

export function TrainingCoursesSection() {
  const { t, arrowClass } = usePortfolio();

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <SectionTitle eyebrow={t.trainingCourses.eyebrow}>
        {t.trainingCourses.title[0]}
        <br />
        {t.trainingCourses.title[1]}
      </SectionTitle>
      <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">{t.trainingCourses.intro}</p>

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
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
