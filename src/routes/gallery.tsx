import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/portfolio/site-shell";
import { PageLayout } from "@/components/portfolio/page-header";
import { GallerySection } from "@/components/portfolio/sections/gallery-section";
import { content } from "@/content/portfolio";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [{ title: `${content.fa.nav.find((n) => n.path === "/gallery")!.label} | ${content.fa.brand}` }],
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
