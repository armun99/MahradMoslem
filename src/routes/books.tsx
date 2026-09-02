import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/portfolio/site-shell";
import { PageLayout } from "@/components/portfolio/page-header";
import { BooksSection } from "@/components/portfolio/sections/books-section";
import { content } from "@/content/portfolio";

export const Route = createFileRoute("/books")({
  head: () => ({
    meta: [{ title: `${content.fa.nav.find((n) => n.path === "/books")!.label} | ${content.fa.brand}` }],
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
