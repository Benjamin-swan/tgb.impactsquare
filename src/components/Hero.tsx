export default function Hero() {
  const scrollToContent = () => {
    document.getElementById("double-movement")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      data-section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0F1B2D 0%, #1a2f4a 50%, #0F1B2D 100%)" }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #D97706, transparent)" }} />
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 md:px-12 py-24 w-full">
        <div className="flex items-center gap-3 mb-8 fade-up">
          <div className="h-px w-10 bg-amber-500" />
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
            도서 요약본 · Book Summary
          </span>
        </div>

        <h1 className="font-bold leading-tight mb-6 fade-up delay-100"
          style={{ fontFamily: "'Noto Serif KR', serif", fontSize: "clamp(2.5rem, 7vw, 5.5rem)", color: "white" }}>
          The Great<br />
          <span className="hero-accent">Breakthrough</span>
        </h1>

        <p className="text-2xl md:text-3xl text-stone-300 font-light mb-4 fade-up delay-200"
          style={{ fontFamily: "'Noto Serif KR', serif" }}>위대한 돌파</p>

        <p className="text-stone-400 text-base mb-8 fade-up delay-200">
          도현명 · 백혜림 저 &nbsp;|&nbsp; 2023
        </p>

        <div className="w-16 h-1 bg-amber-500 mb-8 fade-up delay-200" />

        <p className="text-stone-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-12 fade-up delay-300" style={{ lineHeight: 1.9 }}>
          이윤을 극대화하려는 이기적 운동과, 파괴된 것을 회복하려는 이타적 운동이 연결될 때 — 거대한 미로를 부수는 강력한 힘이 태어난다.
          <br />
          <span className="text-amber-400 font-medium">사회 문제 해결이 비즈니스 경쟁력이 되는 세상을 향한 여정.</span>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-14 fade-up delay-300">
          {[
            { n: "01", t: "이중운동", href: "double-movement" },
            { n: "02", t: "믿음의 힘", href: "belief" },
            { n: "03", t: "광장", href: "square" },
            { n: "04", t: "충차", href: "battering-ram" },
            { n: "05", t: "여정", href: "journey" },
            { n: "06", t: "에필로그", href: "epilogue" },
          ].map((item) => (
            <a key={item.n} href={`#${item.href}`}
              className="flex items-center gap-2 text-stone-400 hover:text-amber-400 transition-colors text-sm group">
              <span className="text-amber-600 font-bold text-xs group-hover:text-amber-400">{item.n}</span>
              <span>{item.t}</span>
            </a>
          ))}
        </div>

        <button onClick={scrollToContent}
          className="fade-up delay-400 flex items-center gap-3 text-white border border-stone-600 hover:border-amber-500 hover:text-amber-400 px-6 py-3 transition-all duration-300 text-sm tracking-wider group"
          style={{ borderRadius: "2px" }}>
          요약 읽기 시작하기
          <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-500 text-xs tracking-widest opacity-60">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-stone-500" />
        <span>SCROLL</span>
      </div>
    </section>
  );
}
