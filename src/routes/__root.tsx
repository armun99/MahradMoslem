import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SITE_LOGO, siteJsonLd } from "../lib/seo";
import { LocaleProvider } from "../context/locale-context";
import { ThemeProvider } from "../context/theme-context";

const themeInitScript = `(function(){try{var t=localStorage.getItem("portfolio-theme");document.documentElement.classList.toggle("dark",t!=="light");}catch(e){document.documentElement.classList.add("dark");}})();`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "مهراد مسلم | مربی سنگنوردی رشت و گیلان" },
      {
        name: "description",
        content:
          "مربی سنگنوردی و کوهنوردی در رشت و گیلان. آموزش سنگنوردی، دوره‌های تمرینی، کروکی مسیرها و باشگاه‌های بولدر.",
      },
      {
        name: "keywords",
        content:
          "سنگنوردی رشت, مربی سنگنوردی رشت, سنگنوردی گیلان, آموزش سنگنوردی, کوهنوردی رشت, بولدرینگ رشت, مهراد مسلم, آلتیوس بولدر استیشن",
      },
      { name: "author", content: "مهراد مسلم | Mahrad Moslem" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "geo.region", content: "IR-16" },
      { name: "geo.placename", content: "Rasht, Gilan, Iran" },
      { property: "og:locale", content: "fa_IR" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "مهراد مسلم" },
      { property: "og:title", content: "مهراد مسلم | مربی سنگنوردی رشت و گیلان" },
      {
        property: "og:description",
        content: "آموزش سنگنوردی و کوهنوردی در رشت و گیلان — بیش از دو دهه تجربه روی دیوار و کوه.",
      },
      { property: "og:image", content: SITE_LOGO },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:image", content: SITE_LOGO },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800&display=swap" },
      { rel: "icon", href: "/favicon.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "canonical", href: "https://mahrad-moslem.vercel.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(siteJsonLd()),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className="dark" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LocaleProvider>
          <Outlet />
        </LocaleProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
