import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/portfolio/site-shell";
import { PageLayout } from "@/components/portfolio/page-header";
import { TrainingCoursesSection } from "@/components/portfolio/sections/training-courses-section";
import { content } from "@/content/portfolio";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/training-courses")({
  head: () =>
    pageHead({
      title: `دوره‌های تمرینی سنگنوردی رشت | مهراد مسلم`,
      description:
        "دوره‌های آموزش سنگنوردی و کوهنوردی در رشت و گیلان با مربیگری مهراد مسلم؛ از مبتدی تا پیشرفته.",
      path: "/training-courses",
      keywords: "دوره سنگنوردی رشت, آموزش سنگنوردی رشت, کلاس سنگنوردی گیلان, مربی سنگنوردی",
    }),
  component: TrainingCoursesPage,
});

function TrainingCoursesPage() {
  return (
    <SiteShell>
      <PageLayout>
        <TrainingCoursesSection />
      </PageLayout>
    </SiteShell>
  );
}
