/** Photos in public/talenttraining — experience in talent ID, training & design */
export const talentTrainingPhotos: string[] = [
  "IMG_9495.JPG",
  "IMG_9480.JPG",
  "IMG_9481.JPG",
  "IMG_9501.JPG",
  "IMG_3549.JPG",
  "IMG_5188.JPG",
  "IMG_5189.JPG",
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

/** Strong wide shot for page banner + home card */
export const talentTrainingHero = "IMG_9495.JPG";

export function talentTrainingSrc(file: string) {
  return `/talenttraining/${encodeURIComponent(file)}`;
}
