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
      fa: "اطلس جغرافیای گیلان و مسیرهای سنگنوردی آن",
      en: "Atlas of Gilan geography and the rock climbing routes",
    },
    topics: {
      fa: ["سنگنوردی", "جغرافیا", "گیلان"],
      en: ["Rock climbing", "Nature", "Culture"],
    },
  },
  {
    id: "sport-ascent",
    cover: "کتاب صعود ورزشی.jpg",
    title: { fa: "صعود ورزشی", en: "Sport Ascent" },
    description: {
      fa: "طرح درس مربی راهنما صعودهای ورزشی",
      en: "A training plan for sport climbing instructors.",
    },
    topics: {
      fa: ["صعود ورزشی", "مربی", "درسنامه"],
      en: ["Sport climbing", "Instructor", "Lesson"],
    },
  },
  {
    id: "masuleh",
    cover: "کتاب ماسوله.jpg",
    title: { fa: "ماسوله", en: "Masuleh" },
    description: {
      fa: "اطلس کوه‌های ماسوله و سایت‌های سنگنوردی آن",
      en: "Atlas of Masuleh mountains and the rock climbing routes",
    },
    topics: {
      fa: ["ماسوله", "جغرافیا", "گیلان"],
      en: ["Masuleh", "Geography", "Gilan"],
    },
  },
];

export function bookCoverUrl(file: string) {
  return `/books/${encodeURIComponent(file)}`;
}
