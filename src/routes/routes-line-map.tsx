import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/portfolio/site-shell";
import { PageLayout } from "@/components/portfolio/page-header";
import { RoutesLineMapSection } from "@/components/portfolio/sections/routes-line-map-section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/routes-line-map")({
  head: () =>
    pageHead({
      title: `Gilan Rock Climbing Route Line Maps | Mahrad Moslem`,
      description:
        "Line maps and route contours for walls in Gilan and Iran opened or drawn by Mahrad Moslem.",
      path: "/routes-line-map",
      keywords: "Gilan climbing topo, route line map, Mahrad Moslem",
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
