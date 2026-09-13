import { bookAuthor, bookCatalog, bookCoverUrl } from "@/content/books-catalog";
import { usePortfolio } from "@/context/locale-context";
import { cn } from "@/lib/utils";

export function BooksSection() {
  const { locale, isRtl } = usePortfolio();

  return (
    <section className="border-t border-border/40 py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {bookCatalog.map((book) => (
            <article key={book.id} className="group flex flex-col">
              <div className="overflow-hidden rounded-lg bg-card shadow-lg ring-1 ring-border/60 transition-transform duration-300 group-hover:-translate-y-1">
                <img
                  src={bookCoverUrl(book.cover)}
                  alt={book.title[locale]}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover object-center"
                />
              </div>
              <div className="mt-5 flex flex-1 flex-col">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{bookAuthor[locale]}</p>
                <h3
                  className={cn(
                    "mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl",
                    !isRtl && "uppercase",
                  )}
                >
                  {book.title[locale]}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{book.description[locale]}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {book.topics[locale].map((topic) => (
                    <span
                      key={topic}
                      className="rounded-sm border border-border px-3 py-1.5 text-[10px] uppercase tracking-wider text-primary"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
