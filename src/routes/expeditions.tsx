import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/portfolio/site-shell";
import { PageLayout } from "@/components/portfolio/page-header";
import { ExpeditionsSection } from "@/components/portfolio/sections/expeditions-section";
import { content } from "@/content/portfolio";

export const Route = createFileRoute("/expeditions")({
  head: () => ({
    meta: [{ title: `${content.fa.expeditions.title.join(" ")} | ${content.fa.brand}` }],
  }),
  component: ExpeditionsPage,
});

function ExpeditionsPage() {
  return (
    <SiteShell>
      <PageLayout>
        <ExpeditionsSection />
      </PageLayout>
    </SiteShell>
  );
}
