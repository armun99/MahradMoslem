import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/portfolio/site-shell";
import { PageLayout } from "@/components/portfolio/page-header";
import { AboutSection } from "@/components/portfolio/sections/about-section";
import { content } from "@/content/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [{ title: `${content.fa.nav.find((n) => n.path === "/about")!.label} | ${content.fa.brand}` }],
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
