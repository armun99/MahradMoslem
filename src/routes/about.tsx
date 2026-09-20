import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/portfolio/site-shell";
import { PageLayout } from "@/components/portfolio/page-header";
import { AboutSection } from "@/components/portfolio/sections/about-section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: `Biography | Mahrad Moslem — Rock Climbing Coach in Rasht`,
      description:
        "Biography of Mahrad Moslem, rock climbing and mountaineering coach in Rasht and Gilan — career in Iran and Sweden, clubs, routes, and coaching.",
      path: "/about",
      image: "https://mahrad-moslem.vercel.app/bio1.jpg",
      keywords: "Mahrad Moslem biography, rock climbing coach Rasht, Gilan climbing",
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
