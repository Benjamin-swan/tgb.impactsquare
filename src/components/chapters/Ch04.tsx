import { Target, Crosshair, Pen, Scale, TrendingUp, type LucideIcon } from "lucide-react";

interface RamElement {
  number: string;
  title: string;
  sub: string;
  description: string;
  company: string;
  problem: string;
  solution: string;
  Icon: LucideIcon;
}

const ramElements: RamElement[] = [
  {
    number: "1",
    title: "타격 지점",
    sub: "사회문제의 Weak Point",
    description: "벽의 약한 틈을 먼저 찾아라. 문제를 정면 돌파하기보다, 가장 효과적으로 균열을 낼 수 있는 취약 지점을 분석해야 한다.",
    company: "딥비전스",
    problem: "대기오염 / 미세먼지",
    solution: "비전 AI + 스마트폰 & CCTV를 활용해 고가 장비 없이 미세먼지를 측정하는 기술 개발",
    Icon: Target,
  },
  {
    number: "2",
    title: "타격 각도",
    sub: "사회문제의 Pain Point",
    description: "왜 이 문제가 해결되지 않았는지를 먼저 파고들어라. 문제가 지속되어 온 원인을 정확히 겨냥할 때 솔루션이 효과를 발휘한다.",
    company: "오파테크",
    problem: "시각장애인 점자 문맹 (점자 해독 가능자 = 10%)",
    solution: "스마트 점자 학습기 + 앱 → 점자 모르는 보호자도 교육 가능, 저비용·업데이트 구조",
    Icon: Crosshair,
  },
  {
    number: "3",
    title: "뾰족한 나무기둥",
    sub: "솔루션의 명확성",
    description: "각도를 잘 잡았어도 기둥이 뭉툭하면 힘이 분산된다. 찾아낸 Pain Point에 완벽하게 맞아떨어지는 날카로운 솔루션이어야 한다.",
    company: "넷스파",
    problem: "폐어망 재활용의 어려움 (여러 소재 혼합으로 분리 불가)",
    solution: "분광분석 + 분쇄기로 나일론만 단일 소재로 완벽 추출하는 공정 설계",
    Icon: Pen,
  },
  {
    number: "4",
    title: "무게",
    sub: "문제 해결에 맞는 최적 규모",
    description: "기둥이 날카로워도 너무 가벼우면 벽이 안 뚫린다. 문제의 크기에 걸맞은 규모화 가능한 구조를 설계해야 한다.",
    company: "포이엔",
    problem: "커피 찌꺼기 (원두의 99.8%가 버려짐)",
    solution: "커피 찌꺼기 → 팰릿 연료 대량 제조 → 탄소배출권 확보 → 기업에 대량 판매 (규모화 구조)",
    Icon: Scale,
  },
  {
    number: "5",
    title: "가속도",
    sub: "기존 방식을 뛰어넘는 운영의 혁신",
    description: "F = ma. 무게가 충분하다면, 이제 속도를 높여야 한다. 솔루션 자체뿐 아니라 그것을 운영하는 방식에서도 혁신이 있어야 파괴력이 생긴다.",
    company: "(주)같다",
    problem: "대형 폐기물 처리 및 자원 회수",
    solution: "모바일 앱 연결 + AI 사진 판독 → 100여 개 업체의 수거 흐름 데이터화 → 수십 개 지자체 도입",
    Icon: TrendingUp,
  },
];

export default function Ch04() {
  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="fade-up">
        <div className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.05)", borderLeft: "4px solid #D97706" }}>
          <p className="text-stone-200 leading-relaxed text-base" style={{ lineHeight: 2 }}>
            "작은 것으로 더 큰 무언가를 뚫어 내야 할 때 중요한 점은 모을 수 있는 힘을 최대한 응축해서
            뾰족한 한 점에 집중시키고, 그 지점을 강하게 가격하는 것이다."
          </p>
          <p className="text-amber-500 text-sm mt-3 font-medium">— 《The Great Breakthrough》</p>
        </div>
      </div>

      {/* Summary table */}
      <div className="fade-up delay-100">
        <h3 className="text-stone-200 font-bold text-xl mb-4" style={{ fontFamily: "'Noto Serif KR', serif" }}>
          충차의 5가지 구성요소
        </h3>
        <div className="overflow-x-auto mb-6">
          <table className="custom-table">
            <thead>
              <tr>
                <th style={{ background: "#1E3A5F" }}>구성요소</th>
                <th style={{ background: "#1E3A5F" }}>의미</th>
                <th style={{ background: "#1E3A5F" }}>사례 기업</th>
              </tr>
            </thead>
            <tbody>
              {ramElements.map((el) => (
                <tr key={el.number}>
                  <td style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}>
                    <span className="flex items-center gap-2 text-amber-400 font-bold">
                      <el.Icon className="w-4 h-4 shrink-0" />
                      {el.title}
                    </span>
                  </td>
                  <td style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }} className="text-stone-400 text-sm">{el.sub}</td>
                  <td style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }} className="text-stone-300 font-medium text-sm">{el.company}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detailed cards */}
      <div className="space-y-5">
        {ramElements.map((el, i) => (
          <div key={el.number} className={`fade-up delay-${(i + 1) * 100 > 400 ? 400 : (i + 1) * 100}`}>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
              {/* Card header */}
              <div className="flex items-center gap-4 p-4" style={{ background: "rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="w-9 h-9 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {el.number}
                </div>
                <div className="flex items-center gap-2">
                  <el.Icon className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-base leading-tight">{el.title}</h4>
                    <p className="text-amber-400 text-xs">{el.sub}</p>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5" style={{ background: "rgba(255,255,255,0.03)" }}>
                <p className="text-stone-300 text-sm leading-relaxed mb-4" style={{ lineHeight: 1.9 }}>
                  {el.description}
                </p>
                <div className="rounded-lg p-4 space-y-2" style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="flex items-start gap-3">
                    <span className="text-amber-500 text-xs font-bold w-16 shrink-0">기업</span>
                    <span className="text-amber-300 text-sm font-semibold">{el.company}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-stone-500 text-xs font-bold w-16 shrink-0">문제</span>
                    <span className="text-stone-300 text-sm">{el.problem}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-500 text-xs font-bold w-16 shrink-0">솔루션</span>
                    <span className="text-stone-300 text-sm">{el.solution}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Key insight */}
      <div className="fade-up delay-400">
        <div className="rounded-xl p-6" style={{ background: "rgba(217,119,6,0.12)", border: "1px solid rgba(217,119,6,0.3)" }}>
          <h4 className="text-amber-400 font-bold mb-3 text-sm uppercase tracking-wider">핵심 공식</h4>
          <div className="diagram-box" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)", color: "#fcd34d" }}>
{`F = m × a

파괴력(Force) = 무게(Mass) × 가속도(Acceleration)
             = [문제의 규모에 맞는 솔루션] × [운영 방식의 혁신]`}
          </div>
          <p className="text-stone-300 text-sm mt-3 leading-relaxed" style={{ lineHeight: 1.9 }}>
            혁신은 한번 반짝하고 생겨나는 것이 아니라, 반복적으로 만들어져서 복제되고 확장될 수 있어야 한다.
          </p>
        </div>
      </div>
    </div>
  );
}
