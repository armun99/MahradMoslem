import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/portfolio/site-shell";
import { PageLayout } from "@/components/portfolio/page-header";
import { GallerySection } from "@/components/portfolio/sections/gallery-section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/gallery")({
  head: () =>
    pageHead({
      title: `Climbing & Mountaineering Gallery | Mahrad Moslem`,
      description: "Photo gallery of rock climbing, walls, mountains, and coaching by Mahrad Moslem in Gilan and Iran.",
      path: "/gallery",
      keywords: "rock climbing gallery, Gilan climbing photos, Mahrad Moslem",
    }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <SiteShell>
      <PageLayout>
        <GallerySection />
      </PageLayout>
    </SiteShell>
  );
}
