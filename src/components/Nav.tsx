import type { ChapterData } from "@/data/chapters";

interface NavProps {
  visible: boolean;
  activeSection: string;
  chapters: ChapterData[];
}

export default function Nav({ visible, activeSection, chapters }: NavProps) {
  return (
    <nav
      className={`nav-bar fixed top-0 left-0 right-0 z-50 ${visible ? "visible-nav" : "hidden-nav"}`}
      style={{ background: "rgba(15,27,45,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <a href="#hero" className="text-white font-bold text-sm tracking-wider flex items-center gap-2">
          <span className="text-amber-400">◈</span>
          <span className="hidden sm:inline">The Great Breakthrough</span>
          <span className="sm:hidden">TGB</span>
        </a>

        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
          {chapters.map((ch) => (
            <a
              key={ch.id}
              href={`#${ch.id}`}
              className={`px-3 py-1 text-xs transition-all duration-200 whitespace-nowrap rounded-sm ${
                activeSection === ch.id
                  ? "text-amber-400 bg-amber-500/10"
                  : "text-stone-400 hover:text-white"
              }`}
            >
              <span className="text-amber-600/70 mr-1">{ch.number}</span>
              <span className="hidden md:inline">{ch.navLabel}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
