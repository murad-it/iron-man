export const CINE_FRAME_COUNT = 169;

export const cineFramePath = (n: number) =>
  `/frames2/frame_${String(n).padStart(4, "0")}.jpg`;

export type Beat = {
  id: string;
  show: number;
  hide: number;
  label: string;
  quote: string;
  speaker: string;
  film: string;
};

export const BEATS: Beat[] = [
  {
    id: "b1",
    show: 0.1,
    hide: 0.3,
    label: "01 - Зажигание",
    quote: "Да, я умею летать.",
    speaker: "Тони Старк",
    film: "ЖЕЛЕЗНЫЙ ЧЕЛОВЕК - 2008",
  },
  {
    id: "b2",
    show: 0.35,
    hide: 0.55,
    label: "02 - Синхронизация",
    quote: "Костюм и я - одно целое.",
    speaker: "Тони Старк",
    film: "ЖЕЛЕЗНЫЙ ЧЕЛОВЕК 3 - 2013",
  },
  {
    id: "b3",
    show: 0.6,
    hide: 0.8,
    label: "03 - Последствия",
    quote: "Важно не то, сколько мы потеряли. Важно, сколько у нас осталось.",
    speaker: "Тони Старк",
    film: "МСТИТЕЛИ: ФИНАЛ - 2019",
  },
];

export const CINE_INTRO_FADE_END = 0.08;
