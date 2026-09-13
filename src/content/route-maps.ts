export type RouteWallImage = {
  file: string;
  caption?: { fa: string; en: string };
};

export type RouteWall = {
  id: string;
  name: { fa: string; en: string };
  /** Optional wall story — add fa/en text when available */
  story?: { fa: string; en: string };
  images: RouteWallImage[];
};

/** Walls where Mahrad Moslem opened routes or drew line maps */
export const routeWalls: RouteWall[] = [
  {
    id: "mehestan",
    name: { fa: "دیواره مهستان", en: "Mehestan Wall" },
    images: [
      { file: "دیواره  ی مهستان.jpg", caption: { fa: "نقشه خطوط", en: "Line map" } },
      { file: "دیواره مهستان.jpg", caption: { fa: "نمای دیوار", en: "Wall overview" } },
    ],
  },
  {
    id: "khalil-dasht",
    name: { fa: "دیواره خلیل‌دشت", en: "Khalil Dasht Wall" },
    images: [
      { file: "دیواره ی خلیل دشت.jpg", caption: { fa: "نقشه خطوط", en: "Line map" } },
      { file: "دیواره خلیل دشت.jpg", caption: { fa: "نمای دیوار", en: "Wall overview" } },
    ],
  },
  {
    id: "darsar",
    name: { fa: "دیواره دارسر", en: "Darsar Wall" },
    images: [
      { file: "دیواره دارسر - ماسوله.jpg", caption: { fa: "ماسوله", en: "Masuleh" } },
      { file: "دیواره دارسر.jpg", caption: { fa: "نمای دیوار", en: "Wall overview" } },
    ],
  },
  {
    id: "ghaleh-bon",
    name: { fa: "دیواره قلعه‌بن", en: "Ghaleh Bon Wall" },
    images: [{ file: "دیواره قلعه بن.jpg", caption: { fa: "نقشه خطوط", en: "Line map" } }],
  },
  {
    id: "chaharmahal",
    name: { fa: "دیواره چهارمحل", en: "Chaharmahal Wall" },
    images: [{ file: "دیواره چهارمحل.jpg", caption: { fa: "نقشه خطوط", en: "Line map" } }],
  },
  {
    id: "beshkafte-sang",
    name: { fa: "دیواره بشکافته سنگ", en: "Beshkafte Sang Wall" },
    images: [{ file: "دیواره بشکافته سنگ.jpg", caption: { fa: "نقشه خطوط", en: "Line map" } }],
  },
  {
    id: "garmabdasht",
    name: { fa: "دیواره گرمابدشت", en: "Garmabdasht Wall" },
    images: [
      { file: "دیواره بلند گرمابدشت.jpg", caption: { fa: "دیواره بلند", en: "Tall wall" } },
      { file: "دیواره کوتاه گرمابدشت.jpg", caption: { fa: "دیواره کوتاه", en: "Short wall" } },
    ],
  },
  {
    id: "bisotun-gilani",
    name: { fa: "دیواره بیستون — مسیر گیلانی‌ها", en: "Bisotun Wall — Gilanian Route" },
    images: [
      {
        file: "دیواره بیستون- مسیر گیلانیها.jpeg",
        caption: { fa: "مسیر گیلانی‌ها", en: "Gilanian Route" },
      },
    ],
  },
  {
    id: "kharbo",
    name: { fa: "دیواره خربو", en: "Kharbo Wall" },
    images: [{ file: "دیواره خربو.jpg", caption: { fa: "نقشه خطوط", en: "Line map" } }],
  },
  {
    id: "sang-sori",
    name: { fa: "دیواره سنگ سوری", en: "Sang Sori Wall" },
    images: [{ file: "دیواره سنگ سوری.jpg", caption: { fa: "نقشه خطوط", en: "Line map" } }],
  },
  {
    id: "shirin-dasht",
    name: { fa: "دیواره شیرین‌دشت", en: "Shirin Dasht Wall" },
    images: [{ file: "دیواره شیرین دشت.jpg", caption: { fa: "نقشه خطوط", en: "Line map" } }],
  },
  {
    id: "ali-abad",
    name: { fa: "دیواره علی‌آباد", en: "Ali Abad Wall" },
    images: [{ file: "دیواره ی علی آباد.jpg", caption: { fa: "نقشه خطوط", en: "Line map" } }],
  },
];

export function routeMapPublicUrl(file: string) {
  return `/routes/${encodeURIComponent(file)}`;
}

export function routeWallCover(wall: RouteWall) {
  return routeMapPublicUrl(wall.images[0]!.file);
}
