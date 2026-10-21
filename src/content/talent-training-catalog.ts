/** Photos in public/talenttraining — experience in talent ID, training & design */
export const talentTrainingPhotos: string[] = [
  // Newest additions (shown first)
  "photo_2026-10-18_11-33-34.jpg",
  "photo_2026-10-21_14-50-462110.jpg",
  "photo_2026-10-18_11-33-26.jpg",
  "photo_2026-10-18_11-33-21.jpg",
  "photo_2026-10-18_11-33-18.jpg",
  "photo_2026-10-18_11-33-15.jpg",
  "photo_2026-10-18_11-33-11.jpg",
  "photo_2026-10-18_11-33-07.jpg",
  "photo_2026-10-18_11-33-02.jpg",
  "photo_2026-10-18_11-32-38.jpg",
  // Existing set
  "IMG_9495.JPG",
  "IMG_9480.JPG",
  "IMG_9481.JPG",
  "IMG_9501.JPG",
  "IMG_3549.JPG",
  "IMG_5188.JPG",
  "BDNZ1000.JPG",
  "CPFN1691.JPG",
  "GNWH7654.JPG",
  "GSNJ6962.JPG",
  "HKJZ2697.JPG",
  "IFFV4688.JPG",
  "KKIE4198.JPG",
  "OESK4353.JPG",
  "OLYO8060.JPG",
  "QYDB6911.JPG",
  "RBIP8492.JPG",
  "SHZH9532.JPG",
];

/** Classroom / coaching session — page banner + home card */
export const talentTrainingHero = "main.JPG";

export function talentTrainingSrc(file: string) {
  return `/talenttraining/${encodeURIComponent(file)}`;
}
