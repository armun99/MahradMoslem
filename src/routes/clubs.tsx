import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/portfolio/site-shell";
import { PageLayout } from "@/components/portfolio/page-header";
import { ClubsSection } from "@/components/portfolio/sections/clubs-section";
import { content } from "@/content/portfolio";

export const Route = createFileRoute("/clubs")({
  head: () => ({
    meta: [{ title: `${content.fa.clubs.title.join(" ")} | ${content.fa.brand}` }],
  }),
  component: ClubsPage,
});

function ClubsPage() {
  return (
    <SiteShell>
      <PageLayout>
        <ClubsSection />
      </PageLayout>
    </SiteShell>
  );
}
