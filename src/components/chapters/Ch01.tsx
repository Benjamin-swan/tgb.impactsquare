export default function Ch01() {
  return (
    <div className="space-y-8">
      {/* Original quote */}
      <div className="fade-up">
        <div className="quote-block">
          <p className="text-stone-700 leading-relaxed text-base" style={{ lineHeight: 2 }}>
            "이는 바로 가치를 만들어 제공하고 그 대가로 창출되는 이윤을 극대화하려는 지극히 이기적인 운동이,
            그로 인해 파괴되고 훼손되는 것들을 회복시키고 서로를 도우려는 지극히 이타적인 운동과 연결되어 있는 모습이다."
          </p>
          <p className="text-amber-600 text-sm mt-3 font-medium">— 도현명 · 백혜림, 《The Great Breakthrough》</p>
        </div>
      </div>

      {/* Polanyi section */}
      <div className="fade-up delay-100">
        <h3 className="text-stone-900 font-bold text-xl mb-4" style={{ fontFamily: "'Noto Serif KR', serif" }}>
          폴라니의 이중운동이란?
        </h3>
        <p className="text-stone-600 leading-relaxed mb-5" style={{ lineHeight: 2 }}>
          칼 폴라니(Karl Polanyi)는 <em>《거대한 전환》(1944)</em>에서 <strong>이중운동(double movement)</strong> 개념을 제시했다.
          시장이 확장될수록 그에 맞서는 사회적 자기보호 운동이 동시에 나타난다는 것이다.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-bold">1</div>
              <span className="font-bold text-blue-800 text-sm">제1 운동</span>
            </div>
            <p className="text-blue-700 text-sm leading-relaxed">시장을 확장하고 이윤을 극대화하려는 힘 — 자본주의적 운동</p>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center font-bold">2</div>
              <span className="font-bold text-emerald-800 text-sm">제2 운동</span>
            </div>
            <p className="text-emerald-700 text-sm leading-relaxed">시장의 파괴로부터 사회·공동체·자연을 보호하려는 힘 — 사회적 자기보호 운동</p>
          </div>
        </div>
      </div>

      {/* Impact Business position table */}
      <div className="fade-up delay-200">
        <h3 className="text-stone-900 font-bold text-xl mb-4" style={{ fontFamily: "'Noto Serif KR', serif" }}>
          임팩트 비즈니스의 위치
        </h3>
        <p className="text-stone-600 leading-relaxed mb-4" style={{ lineHeight: 2 }}>
          저자들은 임팩트 비즈니스가 이 이중운동의 <strong>접점</strong>에 있다고 본다.
        </p>
        <div className="overflow-x-auto">
          <table className="custom-table">
            <thead>
              <tr>
                <th>구분</th>
                <th>성격</th>
                <th>목표</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium">제1운동 (비즈니스)</td>
                <td><span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">이기적</span></td>
                <td className="text-stone-600">가치 제공 → 이윤 극대화</td>
              </tr>
              <tr>
                <td className="font-medium">제2운동 (임팩트)</td>
                <td><span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 rounded-full">이타적</span></td>
                <td className="text-stone-600">파괴된 것을 회복, 서로 돕기</td>
              </tr>
              <tr>
                <td className="font-bold text-amber-700">임팩트 비즈니스</td>
                <td><span className="bg-amber-100 text-amber-700 text-xs px-2 py-0.5 rounded-full">둘의 연결</span></td>
                <td className="font-medium text-amber-700">사회 문제 해결 = 경쟁력</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Conflict → Tension */}
      <div className="fade-up delay-300">
        <h3 className="text-stone-900 font-bold text-xl mb-4" style={{ fontFamily: "'Noto Serif KR', serif" }}>
          갈등에서 긴장으로: 핵심 전환
        </h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-red-50 border border-red-100 rounded-xl p-5">
            <h4 className="font-bold text-red-700 mb-2 text-sm flex items-center gap-2">
              <span>✕</span> 갈등(Conflict)
            </h4>
            <p className="text-red-600 text-sm leading-relaxed">두 힘이 반대 방향으로 동등하게 당길 때 → 결국 끊어짐</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h4 className="font-bold text-amber-700 mb-2 text-sm flex items-center gap-2">
              <span>✓</span> 긴장(Tension)
            </h4>
            <p className="text-amber-700 text-sm leading-relaxed">한쪽을 축으로 고정하고, 다른 쪽의 힘을 방향으로 전환 → 활·새총</p>
          </div>
        </div>
        <div className="quote-block">
          <p className="text-stone-700 text-sm leading-relaxed" style={{ lineHeight: 1.9 }}>
            <strong>고무줄 비유:</strong> 양쪽에서 같은 힘으로 당기면 끊어지지만, 한쪽을 고정점(나뭇가지)으로 삼으면
            그 탄성이 목표를 향한 추진력이 된다.
          </p>
        </div>
      </div>

      {/* Key insight */}
      <div className="fade-up delay-400">
        <div className="insight-box">
          <h4 className="font-bold text-white mb-3 text-lg">위대한 돌파의 본질</h4>
          <div className="diagram-box" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#e5e7eb" }}>
{`시장 논리 (이윤) ←——긴장——→ 사회 보호 (회복)
                      ↓
           임팩트 비즈니스 = 돌파구`}
          </div>
          <p className="text-stone-300 text-sm leading-relaxed mt-3" style={{ lineHeight: 1.9 }}>
            사회적 가치 창출이 비용이 아닌 <strong className="text-amber-400">경쟁 우위</strong>가 될 때,
            두 운동의 긴장은 미로를 부수는 추진력이 된다.
          </p>
        </div>
      </div>
    </div>
  );
}
