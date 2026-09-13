import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Instagram, Menu, Moon, Sun, X, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/content/portfolio";
import { usePortfolio } from "@/context/locale-context";
import { useThemeContext } from "@/context/theme-context";
import { cn } from "@/lib/utils";

type SiteShellProps = {
  children: React.ReactNode;
  home?: boolean;
};

export function SiteShell({ children, home = false }: SiteShellProps) {
  const { t, locale, setLocale, isRtl } = usePortfolio();
  const { isDark } = useThemeContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  const navLinks = t.nav;

  useEffect(() => {
    const scrollThreshold = 64;

    const onScroll = () => {
      const y = window.scrollY;

      if (y <= scrollThreshold) {
        setHeaderVisible(true);
      } else if (y > lastScrollY.current + 4) {
        setHeaderVisible(false);
      } else if (y < lastScrollY.current - 4) {
        setHeaderVisible(true);
      }

      lastScrollY.current = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setHeaderVisible(true);
    lastScrollY.current = window.scrollY;
  }, [pathname, locale]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (pathname !== "/") {
      document.getElementById("main-content")?.focus({ preventScroll: true });
    }
  }, [pathname]);

  const showHeader = headerVisible || menuOpen;
  const isHome = home || pathname === "/";

  return (
    <div className="min-h-dvh overflow-x-hidden bg-transparent text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none"
      >
        {isRtl ? "رفتن به محتوا" : "Skip to content"}
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 border-b border-black/5 transition-transform duration-300 ease-out dark:border-white/10",
          showHeader ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div
          dir="ltr"
          className="mx-auto grid h-16 max-w-7xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 px-4 sm:gap-3 sm:px-5 lg:h-[4.75rem] lg:gap-4 lg:px-8"
        >
          {/* Logo — physical left */}
          <Link
            to="/"
            className="shrink-0 rounded-xl bg-foreground px-3.5 py-2 text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-4 sm:py-2.5 lg:px-5 lg:py-3"
            aria-label={t.brand}
          >
            <span
              className={cn(
                "block whitespace-nowrap font-display text-sm font-extrabold sm:text-base lg:text-lg",
                !isRtl && "uppercase tracking-wide",
              )}
              dir={isRtl ? "rtl" : "ltr"}
            >
              {t.brand}
            </span>
          </Link>

          {/* Desktop nav — center/fill */}
          <nav
            className="hidden min-w-0 items-center gap-0.5 overflow-x-auto lg:flex xl:gap-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Primary navigation"
            dir={isRtl ? "rtl" : "ltr"}
          >
            {navLinks.map((item) => (
              <NavLink key={item.path} to={item.path} active={pathname === item.path} label={item.label} />
            ))}
          </nav>
          <div className="min-w-0 lg:hidden" aria-hidden />

          {/* Utilities + menu — physical right */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <ThemeToggle compact />
            <LanguageToggle locale={locale} setLocale={setLocale} compact />
            <a
              href={contactInfo.youtube}
              target="_blank"
              rel="noreferrer"
              className="hidden size-9 shrink-0 items-center justify-center rounded-full bg-[#FF0000] text-white transition-opacity hover:opacity-90 sm:inline-flex sm:size-10"
              aria-label="YouTube"
            >
              <Youtube className="size-[1.05rem] sm:size-[1.15rem]" />
            </a>
            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className="hidden size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white transition-opacity hover:opacity-90 sm:inline-flex sm:size-10"
              aria-label="Instagram"
            >
              <Instagram className="size-[1.05rem] sm:size-[1.15rem]" />
            </a>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "size-10 shrink-0 lg:hidden [&_svg]:!size-6",
                isHome && !isDark
                  ? "!text-black hover:!bg-black/10 hover:!text-black [&_svg]:!text-black"
                  : "text-foreground hover:bg-accent hover:text-accent-foreground",
              )}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X strokeWidth={2.75} /> : <Menu strokeWidth={2.75} />}
            </Button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <button
            type="button"
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <nav
            dir="ltr"
            className="absolute inset-y-0 right-0 flex w-[min(100%,20rem)] flex-col border-l border-border bg-background shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4" dir={isRtl ? "rtl" : "ltr"}>
              <span className={cn("font-display text-lg font-bold", !isRtl && "uppercase")}>{t.brand}</span>
              <Button
                variant="ghost"
                size="icon"
                className="size-11 text-foreground hover:bg-accent hover:text-accent-foreground [&_svg]:!size-6"
                onClick={() => setMenuOpen(false)}
                aria-label="Close"
              >
                <X strokeWidth={2.75} />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto px-3 py-4" dir={isRtl ? "rtl" : "ltr"}>
              {t.nav.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex min-h-12 items-center rounded-md px-4 text-base font-semibold transition-colors duration-200",
                    pathname === item.path ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}

      <main className={home ? undefined : "pt-16 lg:pt-[4.75rem]"}>{children}</main>
    </div>
  );
}

function NavLink({ to, active, label }: { to: string; active: boolean; label: string }) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex shrink-0 items-center whitespace-nowrap rounded-md px-2 py-2 text-[13px] font-bold text-foreground/80 transition-colors hover:text-foreground xl:px-2.5 xl:text-sm",
        active && "text-foreground",
      )}
    >
      {label}
    </Link>
  );
}

function ThemeToggle({ compact, className }: { compact?: boolean; className?: string }) {
  const { isDark, toggleTheme } = useThemeContext();
  const { isRtl } = usePortfolio();

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className={cn(
        "size-10 rounded-full border-border bg-background text-foreground shadow-none",
        compact && "size-10",
        className,
      )}
      onClick={toggleTheme}
      aria-label={isDark ? (isRtl ? "حالت روشن" : "Light mode") : isRtl ? "حالت تاریک" : "Dark mode"}
    >
      {isDark ? <Sun className="size-[1.15rem]" /> : <Moon className="size-[1.15rem]" />}
    </Button>
  );
}

function LanguageToggle({
  locale,
  setLocale,
  compact,
  className,
}: {
  locale: "fa" | "en";
  setLocale: (l: "fa" | "en") => void;
  compact?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex rounded-full border border-border/80 bg-muted/30 p-0.5 font-bold",
        compact ? "text-xs" : "text-sm",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {(["fa", "en"] as const).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLocale(lang)}
          className={cn(
            "min-h-8 rounded-full px-2.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            locale === lang ? "bg-foreground text-background shadow-sm" : "text-muted-foreground hover:text-foreground",
          )}
          aria-pressed={locale === lang}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
