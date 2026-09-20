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
      { title: "Mahrad Moslem | Rock Climbing Coach in Rasht, Gilan" },
      {
        name: "description",
        content:
          "Professional rock climbing and mountaineering coach in Rasht, Gilan. Training courses, route line maps, founder of Altius Boulder Station and First Ascent Club.",
      },
      {
        name: "keywords",
        content:
          "rock climbing Rasht, rock climbing coach Rasht, Gilan climbing, mountaineering Iran, bouldering Rasht, Mahrad Moslem, Altius Boulder Station",
      },
      { name: "author", content: "Mahrad Moslem | مهراد مسلم" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "geo.region", content: "IR-16" },
      { name: "geo.placename", content: "Rasht, Gilan, Iran" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "fa_IR" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Mahrad Moslem" },
      { property: "og:title", content: "Mahrad Moslem | Rock Climbing Coach in Rasht, Gilan" },
      {
        property: "og:description",
        content:
          "Rock climbing and mountaineering coaching in Rasht and Gilan — over two decades on walls and mountains.",
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
    <html lang="en" dir="ltr" className="dark" suppressHydrationWarning>
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
