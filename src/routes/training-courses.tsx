import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/portfolio/site-shell";
import { PageLayout } from "@/components/portfolio/page-header";
import { TrainingCoursesSection } from "@/components/portfolio/sections/training-courses-section";
import { content } from "@/content/portfolio";

export const Route = createFileRoute("/training-courses")({
  head: () => ({
    meta: [{ title: `${content.fa.nav.find((n) => n.path === "/training-courses")!.label} | ${content.fa.brand}` }],
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
