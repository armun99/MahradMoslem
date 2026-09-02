import { cn } from "@/lib/utils";

export function PageLayout({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div id="main-content" tabIndex={-1} className={cn("page-enter outline-none", className)}>
      {children}
    </div>
  );
}
