import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/portfolio/site-shell";
import { PageLayout } from "@/components/portfolio/page-header";
import { BooksSection } from "@/components/portfolio/sections/books-section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/books")({
  head: () =>
    pageHead({
      title: `Rock Climbing & Mountaineering Books | Mahrad Moslem`,
      description: "Books and writing by Mahrad Moslem on rock climbing, mountaineering, and nature.",
      path: "/books",
      keywords: "rock climbing books, mountaineering books, Mahrad Moslem",
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
