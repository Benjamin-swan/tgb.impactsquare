export default function Ch05() {
  return (
    <div className="space-y-8">
      {/* Current position */}
      <div className="fade-up">
        <div className="diagram-box text-center" style={{ fontSize: "0.9rem" }}>
{`허무맹랑한 꿈 (출발)  →  공명하는 사람들이 생겨남 (지금)  →  변곡점을 지나 가파른 성장 (다음)`}
        </div>
        <p className="text-stone-600 text-sm leading-relaxed mt-4" style={{ lineHeight: 1.9 }}>
          생태계는 조성되었고, 협력과 갈등을 통해 성장해 왔다. 그러나 벽은 여전히 굳건하다.
          이제 단순한 연속 성장이 아니라 <strong>변곡점을 지나는 질적 도약</strong>이 필요하다.
        </p>
      </div>

      {/* 3 challenges */}
      <div className="fade-up delay-100">
        <h3 className="text-stone-900 font-bold text-xl mb-5" style={{ fontFamily: "'Noto Serif KR', serif" }}>
          다음 단계의 세 과제
        </h3>
        <div className="space-y-4">
          {[
            {
              num: "01",
              title: "확장",
              color: "bg-blue-500",
              textColor: "text-blue-700",
              bgColor: "bg-blue-50",
              borderColor: "border-blue-200",
              content: "여러 광장들이 서로 연결되어 하나의 흐름을 만들어야 한다. 더 많은 광장과 충차들이 만들어지고 더 많은 사람들이 힘을 보태야 하며, 그 과정에서 믿음과 목표의식이 희석되지 않도록 해야 한다.",
              key: "믿음과 목표의식이 희석되지 않는 연대",
            },
            {
              num: "02",
              title: "혁신",
              color: "bg-amber-500",
              textColor: "text-amber-700",
              bgColor: "bg-amber-50",
              borderColor: "border-amber-200",
              content: "문제가 커질수록 충차도 고도화되어야 한다. 주먹구구식 설계보다는 정교한 데이터 분석을 바탕으로 복제 가능한 충차의 설계도를 발전시켜야 한다.",
              key: "직관이 아닌 데이터 기반의 복제 가능한 설계",
            },
            {
              num: "03",
              title: "자정",
              color: "bg-emerald-500",
              textColor: "text-emerald-700",
              bgColor: "bg-emerald-50",
              borderColor: "border-emerald-200",
              content: "생태계의 본질을 지켜내야 한다. 포상금·지원금에 이끌려 들어왔다가 수령 후 사라지는 사례가 생겨나고 있다. 진정성 없이 이익만 취하는 참여자를 걸러내는 구조가 필요하다.",
              key: "진정성 없이 이익만 취하는 참여자를 걸러내는 구조",
            },
          ].map((item) => (
            <div key={item.num} className={`border ${item.borderColor} ${item.bgColor} rounded-xl p-5`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-8 h-8 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0`}>
                  {item.num}
                </div>
                <h4 className={`font-bold text-lg ${item.textColor}`} style={{ fontFamily: "'Noto Serif KR', serif" }}>
                  {item.title}
                </h4>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed mb-3" style={{ lineHeight: 1.9 }}>{item.content}</p>
              <div className="flex items-start gap-2">
                <span className="text-stone-400 text-xs">핵심:</span>
                <span className={`${item.textColor} text-xs font-medium`}>{item.key}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Self-purification */}
      <div className="fade-up delay-200">
        <h3 className="text-stone-900 font-bold text-xl mb-4" style={{ fontFamily: "'Noto Serif KR', serif" }}>
          자정(自淨)의 필요성
        </h3>
        <div className="bg-stone-100 border border-stone-200 rounded-xl p-5">
          <p className="text-stone-600 text-sm leading-relaxed" style={{ lineHeight: 1.9 }}>
            생태계가 성장하면서 <strong>본래 의도 없이 유입되는 참여자</strong>가 늘고 있다.
            포상금·지원금에 이끌려 들어왔다가 수령 후 사라지는 사례가 생겨난다.
            자원은 한정되어 있고, 시간은 촉박하다 — 낭비를 줄이는 자정 구조가 필수다.
          </p>
        </div>
      </div>

      {/* Final diagram */}
      <div className="fade-up delay-300">
        <div className="insight-box">
          <h4 className="font-bold text-white mb-4">다음 단계 로드맵</h4>
          <div className="diagram-box" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#e5e7eb" }}>
{`확장 (광장들의 연대)
  + 혁신 (데이터 기반 충차)
  + 자정 (생태계 본질 수호)
             ↓
더 크고 단단한 벽을 뚫을 수 있는 다음 단계`}
          </div>
          <p className="text-stone-300 text-sm mt-4 leading-relaxed" style={{ lineHeight: 1.9 }}>
            이 여정의 끝은 돌벽이 부서지고 그 너머의 빛을 만끽하는 날이다.
            저자들은 그 꿈을 현실로 만들 동반자를 기다린다.
          </p>
        </div>
      </div>
    </div>
  );
}
