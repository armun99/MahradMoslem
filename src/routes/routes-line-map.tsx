import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/portfolio/site-shell";
import { PageLayout } from "@/components/portfolio/page-header";
import { RoutesLineMapSection } from "@/components/portfolio/sections/routes-line-map-section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/routes-line-map")({
  head: () =>
    pageHead({
      title: `کروکی مسیرهای سنگنوردی گیلان | مهراد مسلم`,
      description:
        "کروکی و نقشه خطوط مسیرهای دیواره‌های گیلان و ایران که مهراد مسلم باز کرده یا ترسیم کرده است.",
      path: "/routes-line-map",
      keywords: "کروکی سنگنوردی گیلان, مسیر سنگنوردی, دیواره گیلان, مهراد مسلم",
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
