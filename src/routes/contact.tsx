import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/portfolio/site-shell";
import { PageLayout } from "@/components/portfolio/page-header";
import { ContactSection } from "@/components/portfolio/sections/contact-section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: `تماس با مربی سنگنوردی رشت | مهراد مسلم`,
      description:
        "ارتباط با مهراد مسلم، مربی سنگنوردی رشت و گیلان از طریق ایمیل، واتساپ، تلگرام و اینستاگرام.",
      path: "/contact",
      image: "https://mahrad-moslem.vercel.app/contactme-flip.jpg",
      keywords: "تماس مربی سنگنوردی رشت, آموزش سنگنوردی گیلان",
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
