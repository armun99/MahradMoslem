import { contactInfo } from "@/content/portfolio";

/** Production site URL — override with VITE_SITE_URL if you add a custom domain */
export const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ?? "https://mahrad-moslem.vercel.app";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/lasport.jpg`;

type PageMetaInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string;
};

export function pageHead({ title, description, path = "/", image = DEFAULT_OG_IMAGE, keywords }: PageMetaInput) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      ...(keywords ? [{ name: "keywords", content: keywords }] : []),
      { name: "author", content: "مهراد مسلم | Mahrad Moslem" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "geo.region", content: "IR-16" },
      { name: "geo.placename", content: "Rasht, Gilan, Iran" },
      { property: "og:locale", content: "fa_IR" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "مهراد مسلم" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

/** Person + local coaching business schema for Google */
export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "مهراد مسلم",
        alternateName: ["Mahrad Moslem", "Mahrad Mslm"],
        url: SITE_URL,
        image: DEFAULT_OG_IMAGE,
        jobTitle: "مربی سنگنوردی و کوهنوردی",
        description:
          "مربی حرفه‌ای سنگنوردی و کوهنوردی در رشت و گیلان؛ بنیان‌گذار آلتیوس بولدر استیشن و باشگاه فرست اسنت.",
        email: contactInfo.email,
        telephone: contactInfo.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "رشت",
          addressRegion: "گیلان",
          addressCountry: "IR",
        },
        sameAs: [contactInfo.instagram, contactInfo.youtube, contactInfo.telegram],
        knowsAbout: [
          "سنگنوردی",
          "کوهنوردی",
          "بولدرینگ",
          "آموزش سنگنوردی",
          "دیواره‌نوردی",
          "Rasht rock climbing",
          "Gilan mountaineering",
        ],
      },
      {
        "@type": "SportsActivityLocation",
        "@id": `${SITE_URL}/#business`,
        name: "مهراد مسلم — مربی سنگنوردی رشت",
        alternateName: "Mahrad Moslem Rock Climbing Coach Rasht",
        url: SITE_URL,
        image: DEFAULT_OG_IMAGE,
        description:
          "آموزش سنگنوردی و کوهنوردی در رشت و استان گیلان. دوره‌های تمرینی، مربیگری و کروکی مسیرهای دیواره.",
        telephone: contactInfo.phone,
        email: contactInfo.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "رشت",
          addressRegion: "گیلان",
          addressCountry: "IR",
        },
        areaServed: [
          { "@type": "City", name: "رشت" },
          { "@type": "State", name: "گیلان" },
          { "@type": "Country", name: "Iran" },
        ],
        sport: ["Rock climbing", "Mountaineering", "Bouldering"],
        founder: { "@id": `${SITE_URL}/#person` },
        sameAs: [contactInfo.instagram, contactInfo.youtube],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "مهراد مسلم | مربی سنگنوردی رشت",
        inLanguage: ["fa", "en"],
        publisher: { "@id": `${SITE_URL}/#person` },
      },
    ],
  };
}
