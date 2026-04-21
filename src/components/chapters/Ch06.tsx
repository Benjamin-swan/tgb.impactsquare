import { Compass, Mail } from "lucide-react";

export default function Ch06() {
  const paradox = [
    { left: "위대한 돌파", right: "즐거운 한 끼 식사" },
    { left: "거대한 사회문제 해결", right: "사랑하는 사람의 웃음" },
    { left: "생태계 혁신", right: "작은 생명의 행복" },
    { left: "시스템의 변화", right: "아름다운 노을" },
  ];

  return (
    <div className="space-y-8">
      {/* Main quote */}
      <div className="fade-up">
        <div className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.05)", borderLeft: "4px solid #D97706" }}>
          <p className="text-stone-200 leading-relaxed text-base" style={{ lineHeight: 2 }}>
            "위대한 돌파에 대한 희망을 품는 이유는 그 길이 쉽거나 편해서가 아니다.
            그럼에도 불구하고 우리가 위대한 돌파를 향한 걸음을 멈추지 않는 여러 이유 중 하나는,
            그 길이 우리가 사랑하는 지극히 사소한 것들을 지켜 내는 길이기 때문이다."
          </p>
          <p className="text-amber-500 text-sm mt-3 font-medium">— 《The Great Breakthrough》</p>
        </div>
      </div>

      {/* Paradox of greatness */}
      <div className="fade-up delay-100">
        <h3 className="text-stone-200 font-bold text-xl mb-5" style={{ fontFamily: "'Noto Serif KR', serif" }}>
          위대함의 역설
        </h3>
        <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="grid grid-cols-2" style={{ background: "rgba(255,255,255,0.04)" }}>
            <div className="p-3 text-xs font-bold text-stone-400 uppercase tracking-wider border-r" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              겉으로 보이는 것
            </div>
            <div className="p-3 text-xs font-bold text-amber-500 uppercase tracking-wider">
              실제로 지키려는 것
            </div>
          </div>
          {paradox.map((item, i) => (
            <div key={i} className="grid grid-cols-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="p-4 text-stone-400 text-sm border-r" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                {item.left}
              </div>
              <div className="p-4 text-amber-300 text-sm font-medium" style={{ background: "rgba(217,119,6,0.06)" }}>
                {item.right}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl p-4" style={{ background: "rgba(217,119,6,0.12)", border: "1px solid rgba(217,119,6,0.2)" }}>
          <p className="text-amber-300 text-sm text-center font-medium" style={{ fontFamily: "'Noto Serif KR', serif" }}>
            "위대하다"는 단어가 붙는 이유는 목표의 장엄함이 아니라,
            <br className="hidden md:block" />
            <strong> 지키려는 것의 소중함</strong>에 있다.
          </p>
        </div>
      </div>

      {/* Honest face of journey */}
      <div className="fade-up delay-200">
        <h3 className="text-stone-200 font-bold text-xl mb-4" style={{ fontFamily: "'Noto Serif KR', serif" }}>
          여정의 솔직한 민낯
        </h3>
        <p className="text-stone-400 text-sm mb-4 leading-relaxed" style={{ lineHeight: 1.9 }}>
          저자들은 이 여정이 낭만적이지 않음을 인정한다:
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "만신창이가 되기도 하고",
            "소중한 동료가 쓰러지는 것을 보기도 하고",
            "한 발자국도 못 나아가고 주저앉기도 하고",
            "무엇을 부수려 했는지 잊은 채 망연히 서 있기도 한다",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <span className="text-stone-500 text-lg mt-0.5">—</span>
              <p className="text-stone-300 text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
        <p className="text-stone-400 text-sm mt-4 leading-relaxed italic" style={{ lineHeight: 1.9 }}>
          "가까이서 보면 비극에 가까워 보일 때도 있다"는 고백은, 이 책이 성공 신화가 아니라 진짜 여정의 기록임을 보여준다.
        </p>
      </div>

      {/* Why this book */}
      <div className="fade-up delay-300">
        <h3 className="text-stone-200 font-bold text-xl mb-4" style={{ fontFamily: "'Noto Serif KR', serif" }}>
          이 책을 쓴 이유
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <h4 className="text-amber-400 font-bold mb-2 text-sm flex items-center gap-1.5"><Compass className="w-3.5 h-3.5" /> 위로</h4>
            <p className="text-stone-300 text-sm leading-relaxed" style={{ lineHeight: 1.9 }}>
              고된 순간, 처음의 이야기를 되뇌는 것이 나침반이 된다
            </p>
          </div>
          <div className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <h4 className="text-amber-400 font-bold mb-2 text-sm flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> 초대</h4>
            <p className="text-stone-300 text-sm leading-relaxed" style={{ lineHeight: 1.9 }}>
              더 많은 사람들을 이 광장으로 이끌기 위해
            </p>
          </div>
        </div>
      </div>

      {/* Final message */}
      <div className="fade-up delay-400">
        <div className="rounded-xl p-8 text-center" style={{ background: "linear-gradient(135deg, rgba(217,119,6,0.2), rgba(30,58,95,0.5))", border: "1px solid rgba(217,119,6,0.3)" }}>
          <p className="text-white text-lg leading-relaxed mb-4" style={{ fontFamily: "'Noto Serif KR', serif", lineHeight: 2 }}>
            위대한 돌파는 사소한 것들을 사랑하기 때문에 시작된다.
            <br />
            그 여정은 반드시 힘들다.
            <br />
            그럼에도 걷는 이유는 —
          </p>
          <p className="text-amber-400 font-bold text-xl" style={{ fontFamily: "'Noto Serif KR', serif" }}>
            그 사소한 것들이 지킬 만한 가치가 있기 때문이다.
          </p>
          <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <p className="text-stone-400 text-sm">이 책은 완성된 성과를 자랑하는 책이 아니다.</p>
            <p className="text-amber-300 text-sm font-medium mt-1">함께 걸어갈 사람을 부르는 초대장이다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
