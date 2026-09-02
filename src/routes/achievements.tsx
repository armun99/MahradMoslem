import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/portfolio/site-shell";
import { PageLayout } from "@/components/portfolio/page-header";
import { AchievementsSection } from "@/components/portfolio/sections/achievements-section";
import { content } from "@/content/portfolio";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [{ title: `${content.fa.achievements.title.join(" ")} | ${content.fa.brand}` }],
  }),
  component: AchievementsPage,
});

function AchievementsPage() {
  return (
    <SiteShell>
      <PageLayout>
        <AchievementsSection />
      </PageLayout>
    </SiteShell>
  );
}
