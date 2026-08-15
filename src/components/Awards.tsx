import { useFadeIn } from '../hooks/useFadeIn'

const awards = [
  {
    year: '2026.04',
    title: '프로젝트부문 우수상',
    org: '대한상공회의소 · 신한DS 금융SW 아카데미 6기',
  },
  {
    year: '2024.11',
    title: 'IP기반 캡스톤디자인 장려상',
    org: '안양대학교 · 한국발명진흥회',
  },
]

export default function Awards() {
  const ref = useFadeIn()

  return (
    <section className="border-t border-line py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div ref={ref} className="fade-in">
          <p className="text-xs font-semibold tracking-[0.2em] text-dim uppercase mb-3">
            Recognition
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-ink tracking-[-0.03em] mb-16">
            Awards & Patent
          </h2>

          <div className="space-y-0">
            {awards.map((award) => (
              <div
                key={award.title}
                className="border-t border-line py-8 grid grid-cols-[5rem_1fr] gap-8 lg:gap-16"
              >
                <span className="text-sm text-dim tabular-nums pt-0.5">{award.year}</span>
                <div>
                  <p className="text-base font-semibold text-ink">{award.title}</p>
                  <p className="text-sm text-dim mt-1">{award.org}</p>
                </div>
              </div>
            ))}

            <div className="border-t border-line py-8 grid grid-cols-[5rem_1fr] gap-8 lg:gap-16">
              <span className="text-sm text-dim pt-0.5">특허</span>
              <div>
                <p className="text-base font-semibold text-ink">
                  부동산 청약 서비스 자격 판단·배점 산출·공고 추천 흐름
                </p>
                <p className="text-sm text-dim mt-1">1건 출원</p>
              </div>
            </div>
            <div className="border-t border-line" />
          </div>
        </div>
      </div>
    </section>
  )
}
