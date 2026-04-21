export interface Chapter {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  bgClass: string;
  content: React.ReactNode;
}

export interface ChapterData {
  id: string;
  number: string;
  title: string;
  navLabel: string;
  subtitle: string;
  bg: string;
  accentBg: string;
}

export const chapters: ChapterData[] = [
  {
    id: "double-movement",
    number: "01",
    title: "임팩트 비즈니스와 이중운동",
    navLabel: "임팩트",
    subtitle: "갈등을 긴장으로 바꾸는 법",
    bg: "#F7F4EF",
    accentBg: "#FFF8E7",
  },
  {
    id: "belief",
    number: "02",
    title: "여정을 가능케 하는 믿음",
    navLabel: "여정의 믿음",
    subtitle: "달로 가려는 맹목적 확신의 힘",
    bg: "#0F1B2D",
    accentBg: "#1E3A5F",
  },
  {
    id: "square",
    number: "03",
    title: "사람들이 모이는 광장",
    navLabel: "광장",
    subtitle: "임팩트스퀘어: 믿음이 흐름이 되는 곳",
    bg: "#F7F4EF",
    accentBg: "#FFF8E7",
  },
  {
    id: "battering-ram",
    number: "04",
    title: "벽을 부수는 충차",
    navLabel: "충차",
    subtitle: "5가지 구성요소로 사회문제를 돌파하다",
    bg: "#0F1B2D",
    accentBg: "#1E3A5F",
  },
  {
    id: "journey",
    number: "05",
    title: "앞으로 나아가야 할 여정",
    navLabel: "앞으로 여정",
    subtitle: "확장 · 혁신 · 자정: 다음 변곡점",
    bg: "#F7F4EF",
    accentBg: "#FFF8E7",
  },
  {
    id: "epilogue",
    number: "06",
    title: "에필로그",
    navLabel: "에필로그",
    subtitle: "위대함은 사소한 것을 지키기 위해 존재한다",
    bg: "#0F1B2D",
    accentBg: "#1E3A5F",
  },
];
