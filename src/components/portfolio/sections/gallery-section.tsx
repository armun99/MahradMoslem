import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { galleryPhotos, gallerySrc } from "@/content/gallery-catalog";
import { usePortfolio } from "@/context/locale-context";

export function GallerySection() {
  const { t, isRtl } = usePortfolio();
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") {
        setLightbox((i) => (i === null ? i : (i + (isRtl ? -1 : 1) + galleryPhotos.length) % galleryPhotos.length));
      }
      if (e.key === "ArrowLeft") {
        setLightbox((i) => (i === null ? i : (i + (isRtl ? 1 : -1) + galleryPhotos.length) % galleryPhotos.length));
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, isRtl]);

  const selected = lightbox === null ? undefined : galleryPhotos[lightbox];

  return (
    <section className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24">
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {galleryPhotos.map((file, index) => (
          <button
            key={file}
            type="button"
            onClick={() => setLightbox(index)}
            className={`group relative mb-4 block w-full overflow-hidden ${index % 3 === 1 ? "aspect-[4/5]" : "aspect-[4/3]"}`}
          >
            <img
              src={gallerySrc(file)}
              width={1200}
              height={1500}
              loading="lazy"
              alt=""
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
          </button>
        ))}
      </div>

      {selected && lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={t.gallery.title}
          onClick={() => setLightbox(null)}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLightbox(null)}
            className="absolute end-5 top-5 text-foreground"
            aria-label="Close"
          >
            <X />
          </Button>
          <img
            src={gallerySrc(selected)}
            alt=""
            className="max-h-[86vh] max-w-[92vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-5 text-xs tracking-widest text-muted-foreground">
            {lightbox + 1} / {galleryPhotos.length}
          </p>
        </div>
      )}
    </section>
  );
}
