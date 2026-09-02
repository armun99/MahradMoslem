import { usePortfolio } from "@/context/locale-context";
import { cn } from "@/lib/utils";

export function SectionTitle({
  eyebrow,
  children,
  className,
}: {
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { isRtl } = usePortfolio();

  return (
    <div className={className}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2
        className={cn(
          "max-w-3xl font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl",
          !isRtl && "uppercase tracking-tight",
        )}
      >
        {children}
      </h2>
    </div>
  );
}
