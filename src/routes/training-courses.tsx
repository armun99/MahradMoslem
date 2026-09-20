import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/portfolio/site-shell";
import { PageLayout } from "@/components/portfolio/page-header";
import { TrainingCoursesSection } from "@/components/portfolio/sections/training-courses-section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/training-courses")({
  head: () =>
    pageHead({
      title: `Rock Climbing Training Courses in Rasht | Mahrad Moslem`,
      description:
        "Rock climbing and mountaineering training courses in Rasht and Gilan with Mahrad Moslem — from beginner to advanced.",
      path: "/training-courses",
      keywords: "rock climbing course Rasht, climbing training Rasht, Gilan climbing class",
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
