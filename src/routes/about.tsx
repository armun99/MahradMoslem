import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/portfolio/site-shell";
import { PageLayout } from "@/components/portfolio/page-header";
import { AboutSection } from "@/components/portfolio/sections/about-section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: `بیوگرافی مهراد مسلم | مربی سنگنوردی رشت`,
      description:
        "بیوگرافی مهراد مسلم، مربی سنگنوردی و کوهنوردی در رشت و گیلان؛ تجربه ایران و سوئد، باشگاه‌ها، مسیرها و آموزش.",
      path: "/about",
      image: "https://mahrad-moslem.vercel.app/bio1.jpg",
      keywords: "بیوگرافی مهراد مسلم, مربی سنگنوردی رشت, سنگنوردی گیلان",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <PageLayout>
        <AboutSection />
      </PageLayout>
    </SiteShell>
  );
}
