import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/portfolio/site-shell";
import { PageLayout } from "@/components/portfolio/page-header";
import { GallerySection } from "@/components/portfolio/sections/gallery-section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/gallery")({
  head: () =>
    pageHead({
      title: `گالری سنگنوردی و کوهنوردی | مهراد مسلم`,
      description: "گالری عکس‌های سنگنوردی، دیواره، کوه و مربیگری مهراد مسلم در گیلان و ایران.",
      path: "/gallery",
      keywords: "گالری سنگنوردی, عکس سنگنوردی گیلان, مهراد مسلم",
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
