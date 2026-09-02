import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/portfolio/section-title";
import { usePortfolio } from "@/context/locale-context";
import { placeholderImages } from "@/lib/placeholder-images";

export function GallerySection() {
  const { t } = usePortfolio();
  const [filter, setFilter] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const allCategory = t.gallery.categories[0];
  const activeFilter = filter ?? allCategory;

  useEffect(() => {
    setFilter(null);
  }, [t.gallery.categories]);

  const galleryItems = t.gallery.items.map((item, index) => ({
    ...item,
    image: placeholderImages.gallery[index],
    index,
  }));

  const visibleGallery = galleryItems.filter(
    (item) => activeFilter === allCategory || item.category === activeFilter,
  );
  const selectedGallery = lightbox === null ? undefined : galleryItems[lightbox];

  return (
    <section className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionTitle eyebrow={t.gallery.eyebrow}>{t.gallery.title}</SectionTitle>
        <div className="flex max-w-full gap-5 overflow-x-auto pb-2">
          {t.gallery.categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`shrink-0 border-b pb-2 text-[11px] uppercase tracking-widest transition-colors ${activeFilter === cat ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {visibleGallery.map(({ image, category, caption, index }, i) => (
          <button
            key={`${category}-${index}`}
            type="button"
            onClick={() => setLightbox(index)}
            className={`group relative mb-4 block w-full overflow-hidden ${i % 3 === 1 ? "aspect-[4/5]" : "aspect-[4/3]"}`}
          >
            <img src={image} width={1200} height={1500} loading="lazy" alt={caption} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 flex items-end bg-[linear-gradient(transparent,color-mix(in_oklab,var(--background)_75%,transparent))] p-5 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="text-xs uppercase tracking-widest text-hero-foreground">
                {category} — {caption}
              </span>
            </div>
          </button>
        ))}
      </div>

      {selectedGallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4" role="dialog" aria-modal="true" aria-label="Gallery">
          <Button variant="ghost" size="icon" onClick={() => setLightbox(null)} className="absolute end-5 top-5 text-foreground" aria-label="Close">
            <X />
          </Button>
          <img src={selectedGallery.image} alt={selectedGallery.caption} className="max-h-[86vh] max-w-[92vw] object-contain" />
          <p className="absolute bottom-5 text-xs uppercase tracking-widest text-muted-foreground">
            {selectedGallery.category} — {selectedGallery.caption}
          </p>
        </div>
      )}
    </section>
  );
}
