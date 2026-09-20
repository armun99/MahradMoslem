import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/portfolio/site-shell";
import { PageLayout } from "@/components/portfolio/page-header";
import { TestimonialsSection } from "@/components/portfolio/sections/testimonials-section";
import { content } from "@/content/portfolio";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [{ title: `${content.en.testimonials.title} | ${content.en.brand}` }],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <SiteShell>
      <PageLayout>
        <TestimonialsSection />
      </PageLayout>
    </SiteShell>
  );
}
