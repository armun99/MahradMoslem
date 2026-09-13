import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Images, Maximize2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { routeMapPublicUrl, routeWallCover, routeWalls, type RouteWall } from "@/content/route-maps";
import { usePortfolio } from "@/context/locale-context";
import { cn } from "@/lib/utils";

export function RoutesLineMapSection() {
  const { t, locale, isRtl } = usePortfolio();
  const [activeWallId, setActiveWallId] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const activeWall = activeWallId === null ? undefined : routeWalls.find((w) => w.id === activeWallId);

  useEffect(() => {
    if (activeWallId === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (lightboxIndex !== null) setLightboxIndex(null);
        else setActiveWallId(null);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeWallId, lightboxIndex]);

  const closeWall = () => {
    setLightboxIndex(null);
    setActiveWallId(null);
  };

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {routeWalls.map((wall) => (
          <WallCard key={wall.id} wall={wall} locale={locale} onOpen={() => setActiveWallId(wall.id)} />
        ))}
      </div>

      {activeWall && (
        <WallDetail
          wall={activeWall}
          locale={locale}
          isRtl={isRtl}
          labels={t.routeMaps}
          onClose={closeWall}
          onOpenLightbox={setLightboxIndex}
        />
      )}

      {activeWall && lightboxIndex !== null && (
        <ImageLightbox
          wall={activeWall}
          index={lightboxIndex}
          locale={locale}
          isRtl={isRtl}
          labels={t.routeMaps}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}

function WallCard({
  wall,
  locale,
  onOpen,
}: {
  wall: RouteWall;
  locale: "fa" | "en";
  onOpen: () => void;
}) {
  const { t } = usePortfolio();
  const name = wall.name[locale];
  const hasStory = Boolean(wall.story?.[locale]?.trim());
  const imageCount = wall.images.length;

  return (
    <button
      type="button"
      onClick={onOpen}
      className="glass-card glass-card-hover group cursor-pointer overflow-hidden rounded-xl text-start"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted/30">
        <img
          src={routeWallCover(wall)}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <span className="absolute end-3 top-3 inline-flex size-9 items-center justify-center rounded-md bg-background/80 text-foreground opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
          <Maximize2 className="size-4" aria-hidden />
        </span>
        {imageCount > 1 && (
          <span className="absolute start-3 top-3 inline-flex items-center gap-1 rounded-md bg-background/85 px-2.5 py-1 text-xs font-medium backdrop-blur-sm">
            <Images className="size-3.5" aria-hidden />
            {imageCount} {t.routeMaps.images}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold">{name}</h3>
        {hasStory && <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{wall.story![locale]}</p>}
        <p className="mt-3 text-sm font-medium text-primary">{t.routeMaps.viewWall}</p>
      </div>
    </button>
  );
}

function WallDetail({
  wall,
  locale,
  isRtl,
  labels,
  onClose,
  onOpenLightbox,
}: {
  wall: RouteWall;
  locale: "fa" | "en";
  isRtl: boolean;
  labels: {
    storyHeading: string;
    imagesHeading: string;
    images: string;
    close: string;
  };
  onClose: () => void;
  onOpenLightbox: (index: number) => void;
}) {
  const story = wall.story?.[locale]?.trim();

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={wall.name[locale]}
    >
      <div className="flex shrink-0 items-center justify-between gap-4 border-b border-border/60 px-5 py-4 lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold sm:text-xl">{wall.name[locale]}</p>
          <p className="text-sm text-muted-foreground">
            {wall.images.length} {labels.images}
          </p>
        </div>
        <Button variant="ghost" size="icon" className="size-11 shrink-0" onClick={onClose} aria-label={labels.close}>
          <X />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-6 lg:px-8 lg:py-8">
        {story && (
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">{labels.storyHeading}</p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{story}</p>
          </div>
        )}

        <div className={cn("mx-auto max-w-5xl", story && "mt-10")}>
          <p className="eyebrow">{labels.imagesHeading}</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {wall.images.map((image, index) => {
              const caption = image.caption?.[locale];
              const src = routeMapPublicUrl(image.file);

              return (
                <button
                  key={image.file}
                  type="button"
                  onClick={() => onOpenLightbox(index)}
                  className="glass-card group overflow-hidden rounded-xl text-start transition-colors hover:border-primary/30"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted/30">
                    <img
                      src={src}
                      alt={caption ?? wall.name[locale]}
                      className={cn(
                        "h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]",
                        image.file.endsWith(".png") && "bg-white",
                      )}
                    />
                    <span
                      className={cn(
                        "absolute bottom-3 inline-flex size-9 items-center justify-center rounded-md bg-background/80 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100",
                        isRtl ? "start-3" : "end-3",
                      )}
                    >
                      <Maximize2 className="size-4" aria-hidden />
                    </span>
                  </div>
                  {caption && <p className="px-4 py-3 text-sm text-muted-foreground">{caption}</p>}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageLightbox({
  wall,
  index,
  locale,
  isRtl,
  labels,
  onClose,
  onNavigate,
}: {
  wall: RouteWall;
  index: number;
  locale: "fa" | "en";
  isRtl: boolean;
  labels: { previous: string; next: string; close: string };
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const image = wall.images[index]!;
  const caption = image.caption?.[locale];
  const hasPrev = index > 0;
  const hasNext = index < wall.images.length - 1;
  const PrevIcon = isRtl ? ChevronRight : ChevronLeft;
  const NextIcon = isRtl ? ChevronLeft : ChevronRight;

  return (
    <div
      className="fixed inset-0 z-[60] flex flex-col bg-background/98 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={caption ?? wall.name[locale]}
    >
      <div className="flex shrink-0 items-center justify-between gap-4 border-b border-border/60 px-5 py-4 lg:px-8">
        <div>
          <p className="font-display text-base font-semibold sm:text-lg">{wall.name[locale]}</p>
          {caption && <p className="text-sm text-muted-foreground">{caption}</p>}
          {wall.images.length > 1 && (
            <p className="text-xs text-muted-foreground">
              {index + 1} / {wall.images.length}
            </p>
          )}
        </div>
        <Button variant="ghost" size="icon" className="size-11 shrink-0" onClick={onClose} aria-label={labels.close}>
          <X />
        </Button>
      </div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden p-4 lg:p-8">
        {hasPrev && (
          <Button
            variant="ghost"
            size="icon"
            className={cn("absolute z-10 size-12", isRtl ? "end-4" : "start-4")}
            onClick={() => onNavigate(index - 1)}
            aria-label={labels.previous}
          >
            <PrevIcon />
          </Button>
        )}

        <img
          src={routeMapPublicUrl(image.file)}
          alt={caption ?? wall.name[locale]}
          className={cn("max-h-full max-w-full object-contain", image.file.endsWith(".png") && "bg-white")}
        />

        {hasNext && (
          <Button
            variant="ghost"
            size="icon"
            className={cn("absolute z-10 size-12", isRtl ? "start-4" : "end-4")}
            onClick={() => onNavigate(index + 1)}
            aria-label={labels.next}
          >
            <NextIcon />
          </Button>
        )}
      </div>
    </div>
  );
}
