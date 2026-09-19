import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/portfolio/site-shell";
import { PageLayout } from "@/components/portfolio/page-header";
import { BooksSection } from "@/components/portfolio/sections/books-section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/books")({
  head: () =>
    pageHead({
      title: `کتاب‌های سنگنوردی و کوهنوردی | مهراد مسلم`,
      description: "کتاب‌ها و نوشتار مهراد مسلم درباره سنگنوردی، کوهنوردی و طبیعت.",
      path: "/books",
      keywords: "کتاب سنگنوردی, کتاب کوهنوردی, مهراد مسلم",
    }),
  component: BooksPage,
});

function BooksPage() {
  return (
    <SiteShell>
      <PageLayout>
        <BooksSection />
      </PageLayout>
    </SiteShell>
  );
}
