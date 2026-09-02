import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/portfolio/site-shell";
import { PageLayout } from "@/components/portfolio/page-header";
import { RoutesLineMapSection } from "@/components/portfolio/sections/routes-line-map-section";
import { content } from "@/content/portfolio";

export const Route = createFileRoute("/routes-line-map")({
  head: () => ({
    meta: [{ title: `${content.fa.nav.find((n) => n.path === "/routes-line-map")!.label} | ${content.fa.brand}` }],
  }),
  component: RoutesLineMapPage,
});

function RoutesLineMapPage() {
  return (
    <SiteShell>
      <PageLayout>
        <RoutesLineMapSection />
      </PageLayout>
    </SiteShell>
  );
}
