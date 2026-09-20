import { createContext, useContext, type ReactNode } from "react";
import { content, type Locale, type PortfolioContent } from "@/content/portfolio";
import { useLocale } from "@/hooks/use-locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isRtl: boolean;
  t: PortfolioContent;
  arrowClass: string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const { locale, setLocale, isRtl } = useLocale("en");
  const t = content[locale];
  const arrowClass = isRtl ? "rtl:-scale-x-100" : "";

  return (
    <LocaleContext.Provider value={{ locale, setLocale, isRtl, t, arrowClass }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function usePortfolio() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("usePortfolio must be used within LocaleProvider");
  return ctx;
}
