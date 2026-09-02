export type BookEntry = {
  id: string;
  cover: string;
  title: { fa: string; en: string };
  description: { fa: string; en: string };
  topics: { fa: string[]; en: string[] };
};

export const bookAuthor = { fa: "مهراد مسلم", en: "Mahrad Moslem" };

export const bookCatalog: BookEntry[] = [
  {
    id: "sang-negareh",
    cover: "کتاب سنگ نگاره.jpg",
    title: { fa: "سنگ‌نگاره", en: "Sang Negareh" },
    description: {
      fa: "کتابی درباره سنگنوردی و ارتباط سنگنورد با طبیعت و سنگ.",
      en: "A book on rock climbing and the climber's relationship with rock and nature.",
    },
    topics: {
      fa: ["سنگنوردی", "طبیعت", "فرهنگ"],
      en: ["Rock climbing", "Nature", "Culture"],
    },
  },
  {
    id: "sport-ascent",
    cover: "کتاب صعود ورزشی.jpg",
    title: { fa: "صعود ورزشی", en: "Sport Ascent" },
    description: {
      fa: "راهنمای فنی و آموزشی برای سنگنوردان ورزشی.",
      en: "A technical and training guide for sport climbers.",
    },
    topics: {
      fa: ["سنگنوردی ورزشی", "تکنیک", "تمرین"],
      en: ["Sport climbing", "Technique", "Training"],
    },
  },
  {
    id: "masuleh",
    cover: "کتاب ماسوله.jpg",
    title: { fa: "ماسوله", en: "Masuleh" },
    description: {
      fa: "روایت صعود و سنگنوردی در منطقه ماسوله.",
      en: "Stories of climbing and ascents in the Masuleh region.",
    },
    topics: {
      fa: ["ماسوله", "سفر", "سنگنوردی"],
      en: ["Masuleh", "Expeditions", "Climbing"],
    },
  },
];

export function bookCoverUrl(file: string) {
  return `/books/${encodeURIComponent(file)}`;
}
