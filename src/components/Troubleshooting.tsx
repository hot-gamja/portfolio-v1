import { useFadeIn } from '../hooks/useFadeIn'
import { cases } from '../data/troubleshooting'

export default function Troubleshooting() {
  const ref = useFadeIn()

  return (
    <section id="troubleshooting" className="border-t border-line py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        <div ref={ref} className="fade-in">
          <p className="text-xs font-semibold tracking-[0.2em] text-dim uppercase mb-3">
            Problem Solving
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-ink tracking-[-0.03em] mb-4">
            Troubleshooting
          </h2>
          <p className="text-dim mb-16 max-w-xl text-[15px] leading-7">
            장애 발생 시 증상만 수정하는 것이 아니라 원인을 구조적으로 파악하려 했습니다.
          </p>

          <div className="space-y-0">
            {cases.map((c) => (
              <div
                key={c.no}
                className="border-t border-line py-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-12">
                  <span className="text-5xl font-semibold text-line tracking-[-0.05em] leading-none">
                    {c.no}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-ink mb-1">{c.titleEn}</h3>
                    <p className="text-xs text-dim mb-6">{c.problem}</p>

                    <div className="space-y-2">
                      <p className="text-sm text-ink">
                        <span className="text-caution mr-2">●</span>
                        <span className="text-dim mr-1">원인</span>
                        {c.cause}
                      </p>
                      <p className="text-sm text-ink">
                        <span className="text-resolve mr-2">●</span>
                        <span className="text-dim mr-1">해결</span>
                        {c.solution}
                      </p>
                      <p className="text-sm text-dim">
                        <span className="mr-2" style={{ color: '#B8B0A6' }}>●</span>
                        <span className="mr-1">배운 점</span>
                        {c.learned}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-line" />
          </div>
        </div>
      </div>
    </section>
  )
}
