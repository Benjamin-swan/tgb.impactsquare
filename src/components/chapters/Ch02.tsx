import { Zap, AlertTriangle, Shield } from "lucide-react";

export default function Ch02() {
  const textC = "text-stone-200";
  const subC  = "text-stone-400";

  const beliefLayers = [
    { label: "당위",     content: "이 여정은 반드시 이루어져야 한다",                      Icon: Zap },
    { label: "위기 인식", content: "지금 벽을 부수지 않으면 안 된다 — 위기는 진실이다",     Icon: AlertTriangle },
    { label: "의지",     content: "어떻게 해서든 우리 힘으로 부술 것이라는 자신감",          Icon: Shield },
  ];

  return (
    <div className="space-y-8">
      {/* Quote */}
      <div className="fade-up">
        <div className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.05)", borderLeft: "4px solid #D97706" }}>
          <p className={`${textC} leading-relaxed text-base`} style={{ lineHeight: 2 }}>
            "이 여정이 반드시 이루어져야 할 일이라는 믿음이다. 어떤 방식으로든 벽을 뚫어내고야 말겠다는,
            어찌 보면 맹목적으로 보일 정도의 믿음이 이 여정의 출발선을 이루고, 또 이 여정이 멈추지 않도록 하는 이유가 된다."
          </p>
          <p className="text-amber-500 text-sm mt-3 font-medium">— 《The Great Breakthrough》</p>
        </div>
      </div>

      {/* 3 layers of belief */}
      <div className="fade-up delay-100">
        <h3 className={`${textC} font-bold text-xl mb-5`} style={{ fontFamily: "'Noto Serif KR', serif" }}>
          믿음의 세 층위
        </h3>
        <div className="space-y-3">
          {beliefLayers.map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <item.Icon className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">{item.label}</span>
                <p className={`${textC} text-sm mt-1 leading-relaxed`}>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        <p className={`${subC} text-sm mt-4 leading-relaxed`} style={{ lineHeight: 1.9 }}>
          세 층위가 합쳐져 "맹목적으로 보일 정도의 믿음"이 형성된다.
          저자들은 이를 결함이 아니라, 전례 없는 시도의 <strong className="text-amber-400">필수 연료</strong>로 본다.
        </p>
      </div>

      {/* Moon analogy */}
      <div className="fade-up delay-200">
        <h3 className={`${textC} font-bold text-xl mb-4`} style={{ fontFamily: "'Noto Serif KR', serif" }}>
          달 탐사 비유: 아폴로 프로그램
        </h3>
        <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="p-5" style={{ background: "rgba(217,119,6,0.15)" }}>
            <p className={`${textC} text-sm leading-relaxed`} style={{ lineHeight: 1.9 }}>
              아폴로 프로그램은 당시 비용 대비 효율 계산으로는 정당화되지 않았다.
              그럼에도 실행된 이유는 <strong className="text-amber-300">"달에 가야 한다"는 사회적 합의와 믿음</strong>이 먼저 있었기 때문이다.
            </p>
          </div>
          <div className="p-5 space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-red-400 font-bold text-sm shrink-0">✗</span>
              <p className={`${subC} text-sm`}>효율성 계산이 시도를 <strong className="text-stone-300">막는 이유</strong>가 되어서는 안 된다</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-emerald-400 font-bold text-sm shrink-0">✓</span>
              <p className={`${subC} text-sm`}>단, 효율 개선 자체를 하지 말라는 뜻이 아니다 — 그것이 <strong className="text-stone-300">중단의 근거</strong>가 되어서는 안 된다는 것</p>
            </div>
          </div>
        </div>
      </div>

      {/* 100 vs 100 logic */}
      <div className="fade-up delay-300">
        <h3 className={`${textC} font-bold text-xl mb-4`} style={{ fontFamily: "'Noto Serif KR', serif" }}>
          "100 대 100" 문제
        </h3>
        <div className="rounded-xl p-5 mb-4" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <p className={`${subC} text-sm italic mb-4`}>
            벽을 부수는 데 노력 100, 벽 바깥에서 얻는 이득 100 — 합리적 근거로는 증명 불가
          </p>
          <div className="diagram-box" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)", color: "#d1d5db" }}>
{`합리적 증명 불가 → 시도 포기?  ✗
당위적 믿음 공유 → 시도 지속?  ✓`}
          </div>
        </div>
        <p className={`${subC} text-sm leading-relaxed`} style={{ lineHeight: 1.9 }}>
          증명 가능성이 아닌 <strong className="text-amber-400">당위성</strong>이 행동의 출발점이 된다.
        </p>
      </div>

      {/* Summary chain */}
      <div className="fade-up delay-400">
        <div className="rounded-xl p-6" style={{ background: "rgba(217,119,6,0.12)", border: "1px solid rgba(217,119,6,0.3)" }}>
          <h4 className="text-amber-400 font-bold mb-4 text-sm uppercase tracking-wider">믿음의 연쇄</h4>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            {["믿음", "→", "사회적 합의", "→", "공공·민간·개인의 협업", "→", "지속 가능한 미래"].map((item, i) => (
              <span key={i} className={item === "→" ? "text-amber-600" : `${textC} bg-stone-800 px-3 py-1 rounded-full text-xs font-medium`}>
                {item}
              </span>
            ))}
          </div>
          <p className={`${subC} text-xs mt-4 leading-relaxed`} style={{ lineHeight: 1.8 }}>
            이 연쇄가 작동하려면 먼저 "저 벽은 반드시 부서져야 한다"는 믿음이 충분히 많은 사람에게 공유되어야 한다.
          </p>
        </div>
      </div>
    </div>
  );
}
