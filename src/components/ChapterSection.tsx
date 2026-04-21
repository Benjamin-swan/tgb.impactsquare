import type { ChapterData } from "@/data/chapters";
import { Scale, Flame, Building2, Target, Compass, Sun } from "lucide-react";
import Ch01 from "@/components/chapters/Ch01";
import Ch02 from "@/components/chapters/Ch02";
import Ch03 from "@/components/chapters/Ch03";
import Ch04 from "@/components/chapters/Ch04";
import Ch05 from "@/components/chapters/Ch05";
import Ch06 from "@/components/chapters/Ch06";

interface Props {
  chapter: ChapterData;
}

const contentMap: Record<string, React.ReactNode> = {
  "double-movement": <Ch01 />,
  "belief": <Ch02 />,
  "square": <Ch03 />,
  "battering-ram": <Ch04 />,
  "journey": <Ch05 />,
  "epilogue": <Ch06 />,
};

const chapterIconMap: Record<string, React.ReactNode> = {
  "double-movement": <Scale className="w-5 h-5" />,
  "belief":          <Flame className="w-5 h-5" />,
  "square":          <Building2 className="w-5 h-5" />,
  "battering-ram":   <Target className="w-5 h-5" />,
  "journey":         <Compass className="w-5 h-5" />,
  "epilogue":        <Sun className="w-5 h-5" />,
};

const isDark = (id: string) => ["belief", "battering-ram", "epilogue"].includes(id);

export default function ChapterSection({ chapter }: Props) {
  const dark = isDark(chapter.id);
  const textColor = dark ? "text-stone-100" : "text-stone-900";
  const subColor  = dark ? "text-stone-300" : "text-stone-500";
  const borderColor = dark ? "border-amber-500/40" : "border-amber-500/60";

  return (
    <section
      id={chapter.id}
      data-section
      className="relative py-20 md:py-28"
      style={{ background: chapter.bg }}
    >
      {/* Chapter number watermark */}
      <div
        className="absolute top-8 right-8 pointer-events-none select-none"
        style={{
          fontFamily: "'Noto Serif KR', serif",
          fontSize: "7rem",
          fontWeight: 900,
          lineHeight: 1,
          color: dark ? "rgba(217,119,6,0.12)" : "rgba(217,119,6,0.10)",
        }}
      >
        {chapter.number}
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Chapter header */}
        <div className="mb-12 fade-up">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-amber-500" />
            <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">
              Chapter {chapter.number}
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-1 text-amber-500 shrink-0">
              {chapterIconMap[chapter.id]}
            </span>
            <div>
              <h2
                className={`font-bold mb-2 ${textColor}`}
                style={{ fontFamily: "'Noto Serif KR', serif", fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.3 }}
              >
                {chapter.title}
              </h2>
              <p className={`text-lg ${subColor}`} style={{ fontFamily: "'Noto Serif KR', serif" }}>
                {chapter.subtitle}
              </p>
            </div>
          </div>
          <div className={`mt-6 h-px w-full border-t ${borderColor}`} style={{ borderStyle: "dashed" }} />
        </div>

        {/* Chapter content */}
        <div className={`prose-custom ${dark ? "dark-mode" : ""}`}>
          {contentMap[chapter.id]}
        </div>
      </div>
    </section>
  );
}
