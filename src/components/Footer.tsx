export default function Footer() {
  return (
    <footer style={{ background: "#060E1A", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        {/* Quote */}
        <div className="mb-10">
          <div className="w-10 h-0.5 bg-amber-500 mx-auto mb-8" />
          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto mb-4" style={{ fontFamily: "'Noto Serif KR', serif", lineHeight: 2 }}>
            "우리가 세운 광장과 그곳에서 만난 사람들, 그 모두가 힘을 합쳐 만들어온 충차들은
            벽에 미세하지만 분명한 균열을 내고 있습니다."
          </p>
          <p className="text-amber-500 text-sm">— 도현명 · 백혜림</p>
        </div>

        {/* Final CTA */}
        <div className="mb-12">
          <p className="text-stone-400 text-sm mb-6">
            그 꿈을 다가올 미래로 만드는 여정에 함께할 당신을 기대합니다.
          </p>
          <div className="inline-flex items-center gap-2 bg-amber-500 text-white px-6 py-3 text-sm font-semibold"
            style={{ borderRadius: "2px" }}>
            <span>◈</span>
            <span>The Great Breakthrough</span>
          </div>
        </div>

        {/* Book info */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} className="pt-8">
          <p className="text-stone-600 text-xs leading-relaxed">
            <strong className="text-stone-500">The Great Breakthrough (위대한 돌파)</strong>
            &nbsp;·&nbsp; 도현명 · 백혜림 저 &nbsp;·&nbsp; 2023년 12월 출간 &nbsp;·&nbsp;
            <a
              href="https://www.impactsquare.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 hover:text-amber-400 transition-colors"
            >
              임팩트스퀘어
            </a>
          </p>
          <p className="text-stone-700 text-xs mt-2">
            이 페이지는 도서 요약본입니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
