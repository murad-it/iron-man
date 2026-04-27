export const FRAME_COUNT = 169;

export const framePath = (n: number) =>
  `/frames/frame_${String(n).padStart(4, "0")}.jpg`;

export type Dialogue = {
  id: string;
  show: number;
  hide: number;
  quote: string;
  speaker: string;
  film: string;
};

export const DIALOGUES: Dialogue[] = [
  {
    id: "d1",
    show: 0.1,
    hide: 0.3,
    quote: "Иногда нужно бежать, прежде чем научишься ходить.",
    speaker: "Тони Старк",
    film: "ЖЕЛЕЗНЫЙ ЧЕЛОВЕК - 2008",
  },
  {
    id: "d2",
    show: 0.35,
    hide: 0.55,
    quote: "Гений. Миллиардер. Плейбой. Филантроп.",
    speaker: "Тони Старк",
    film: "МСТИТЕЛИ - 2012",
  },
  {
    id: "d3",
    show: 0.6,
    hide: 0.8,
    quote: "Часть пути - это финал.",
    speaker: "Тони Старк",
    film: "МСТИТЕЛИ: ФИНАЛ - 2019",
  },
];

export const HERO_TEXT_FADE_END = 0.08;
