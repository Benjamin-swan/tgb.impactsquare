import { Landmark, Bell, BookOpen, Store, Home, Palette } from "lucide-react";

const squareRows = [
  { icon: Landmark, label: "동상 (중심축)",  role: "광장의 정체성·방향",  activity: '미션: "더 많은 사람들이 임팩트 비즈니스를 소비하도록"', bold: true },
  { icon: Bell,     label: "종탑",          role: "사람을 모으는 신호",   activity: "IBR 발간, 컨퍼런스 기획·참여" },
  { icon: BookOpen, label: "학교·교회",     role: "지식 축적과 전수",     activity: "사회적 가치 측정 연구, 교육·강의 활동" },
  { icon: Store,    label: "아케이드",      role: "실전 교류와 협력",     activity: "소셜벤처 투자·액셀러레이팅, 대기업 협력 프로젝트" },
  { icon: Home,     label: "공동체 공간",   role: "삶이 연결되는 체류",   activity: "심오피스·심센터, 서울숲 클러스터 형성" },
  { icon: Palette,  label: "문화 공간",     role: "공유된 문화·정체성",   activity: "성수동 클러스터, 임팩트 얼라이언스 (연합체 조직)" },
];

export default function Ch03() {
  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="fade-up">
        <div className="quote-block">
          <p className="text-stone-700 leading-relaxed text-base" style={{ lineHeight: 2 }}>
            "위대한 돌파가 실제로 일어나기 위해서는 흩어져 있는 믿음들을 그러모아서,
            벽을 뚫으러 향하는 흐름을 만들어 내야 한다."
          </p>
          <p className="text-amber-600 text-sm mt-3 font-medium">— 《The Great Breakthrough》</p>
        </div>
      </div>

      {/* Why square needed */}
      <div className="fade-up delay-100">
        <h3 className="text-stone-900 font-bold text-xl mb-4" style={{ fontFamily: "'Noto Serif KR', serif" }}>
          광장이 필요한 이유
        </h3>
        <div className="diagram-box text-center">
{`개인의 믿음 (분산)  →  광장 (집결)  →  흐름 (돌파력)`}
        </div>
        <p className="text-stone-600 text-sm leading-relaxed mt-4" style={{ lineHeight: 1.9 }}>
          벽 하나를 부수려면 혼자의 힘으론 안 된다. 같은 방향을 바라보는 사람들이 한 곳에 모여야
          운동 에너지가 임계점을 넘는다.
        </p>
      </div>

      {/* Camillo Sitte */}
      <div className="fade-up delay-200">
        <h3 className="text-stone-900 font-bold text-xl mb-4" style={{ fontFamily: "'Noto Serif KR', serif" }}>
          카밀로 지테의 광장 모델
        </h3>
        <div className="bg-stone-100 border border-stone-200 rounded-xl p-5 mb-4">
          <p className="text-stone-600 text-sm leading-relaxed" style={{ lineHeight: 1.9 }}>
            도시 이론가 <strong>카밀로 지테(Camillo Sitte)</strong>는 광장을 단순한 빈 공간이 아니라,
            <strong> 도시 조직을 통합하고 시민 활동을 수용하는 구조화된 요소</strong>로 봤다.
            임팩트스퀘어는 이 모델을 임팩트 생태계에 직접 대응시킨다.
          </p>
        </div>
      </div>

      {/* Structure table */}
      <div className="fade-up delay-300">
        <h3 className="text-stone-900 font-bold text-xl mb-4" style={{ fontFamily: "'Noto Serif KR', serif" }}>
          임팩트스퀘어의 구조: 1중심 + 4테두리
        </h3>
        <div className="overflow-x-auto">
          <table className="custom-table">
            <thead>
              <tr>
                <th>요소</th>
                <th>광장의 역할</th>
                <th>임팩트스퀘어의 실제 활동</th>
              </tr>
            </thead>
            <tbody>
              {squareRows.map((row) => (
                <tr key={row.label}>
                  <td>
                    <span className={`flex items-center gap-2 ${row.bold ? "font-bold text-amber-700" : "font-medium"}`}>
                      <row.icon className="w-4 h-4 shrink-0 text-amber-600" />
                      {row.label}
                    </span>
                  </td>
                  <td className="text-stone-500 text-sm">{row.role}</td>
                  <td className="text-stone-600 text-sm">{row.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key insight */}
      <div className="fade-up delay-400">
        <div className="insight-box">
          <h4 className="font-bold text-white mb-3">임팩트스퀘어 = 인프라</h4>
          <div className="diagram-box" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#e5e7eb" }}>
{`믿음 → 광장 → 돌파
         ↑
  변환점: 믿음이 집단적 힘으로 전환되는 곳`}
          </div>
          <p className="text-stone-300 text-sm mt-3 leading-relaxed" style={{ lineHeight: 1.9 }}>
            서울숲·성수동의 소셜벤처 클러스터는 정부 주도가 아닌 <span className="text-amber-400 font-medium">민간이 자발적으로 형성</span>한 클러스터이며,
            임팩트스퀘어가 그 형성에 깊이 관여했다.
          </p>
        </div>
      </div>
    </div>
  );
}
