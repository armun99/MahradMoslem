import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/portfolio/site-shell";
import { PageLayout } from "@/components/portfolio/page-header";
import { CoachingSection } from "@/components/portfolio/sections/coaching-section";
import { content } from "@/content/portfolio";

export const Route = createFileRoute("/coaching")({
  head: () => ({
    meta: [{ title: `${content.en.coaching.title} | ${content.en.brand}` }],
  }),
  component: CoachingPage,
});

function CoachingPage() {
  return (
    <SiteShell>
      <PageLayout>
        <CoachingSection />
      </PageLayout>
    </SiteShell>
  );
}
