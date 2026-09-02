import { useCallback, useEffect, useState } from "react";
import { type Locale } from "@/content/portfolio";

const STORAGE_KEY = "portfolio-locale";

export function useLocale(defaultLocale: Locale = "fa") {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return defaultLocale;
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "en" || stored === "fa" ? stored : defaultLocale;
  });

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "fa" ? "rtl" : "ltr";
  }, [locale]);

  return { locale, setLocale, isRtl: locale === "fa" };
}
