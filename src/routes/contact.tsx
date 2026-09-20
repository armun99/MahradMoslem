import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/portfolio/site-shell";
import { PageLayout } from "@/components/portfolio/page-header";
import { ContactSection } from "@/components/portfolio/sections/contact-section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: `Contact Rock Climbing Coach in Rasht | Mahrad Moslem`,
      description:
        "Contact Mahrad Moslem, rock climbing coach in Rasht and Gilan, via email, WhatsApp, Telegram, and Instagram.",
      path: "/contact",
      image: "https://mahrad-moslem.vercel.app/contactme-flip.jpg",
      keywords: "contact rock climbing coach Rasht, climbing training Gilan",
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
