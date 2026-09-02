import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/portfolio/site-shell";
import { PageLayout } from "@/components/portfolio/page-header";
import { ContactSection } from "@/components/portfolio/sections/contact-section";
import { content } from "@/content/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [{ title: `${content.fa.nav.find((n) => n.path === "/contact")!.label} | ${content.fa.brand}` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <PageLayout>
        <ContactSection />
      </PageLayout>
    </SiteShell>
  );
}
