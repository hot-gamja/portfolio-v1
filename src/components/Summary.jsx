import { useFadeIn } from '../hooks/useFadeIn'

export default function Summary() {
  const ref = useFadeIn()

  return (
    <section className="border-t border-line py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        <div ref={ref} className="fade-in">

          {/* Declaration blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line mb-12">
            <div className="stagger bg-surface p-10 lg:p-12">
              <p className="text-xs font-semibold tracking-[0.2em] text-dim uppercase mb-8">
                Philosophy
              </p>
              <h2 className="text-3xl font-semibold leading-[1.2] tracking-[-0.03em] text-ink">
                구현보다 구조를
                <br />먼저 봅니다.
              </h2>
              <p className="mt-6 text-base leading-7 text-dim">
                계층 분리, 데이터 흐름, 배포 구조를 함께 보며
                시스템이 어떻게 움직이는지부터 정리합니다.
              </p>
            </div>

            <div className="stagger bg-coal p-10 lg:p-12">
              <p className="text-xs font-semibold tracking-[0.2em] text-smoke uppercase mb-8">
                Problem Solving
              </p>
              <h2 className="text-3xl font-semibold leading-[1.2] tracking-[-0.03em] text-snow">
                증상보다 원인을
                <br />먼저 봅니다.
              </h2>
              <p className="mt-6 text-base leading-7 text-smoke">
                DB 연결, 동시성, 응답 지연 문제를
                원인 중심으로 파악하고 수정해왔습니다.
              </p>
            </div>
          </div>

          {/* Skill rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="stagger border-t border-line pt-6">
              <p className="text-sm font-semibold text-ink mb-3">데이터 설계와 처리</p>
              <p className="text-base leading-7 text-dim">
                PostgreSQL, MySQL, MyBatis 기반으로 SQL을 직접 다루며
                데이터 흐름을 구조적으로 파악했습니다.
              </p>
            </div>
            <div className="stagger border-t border-line pt-6">
              <p className="text-sm font-semibold text-ink mb-3">배포와 운영 경험</p>
              <p className="text-base leading-7 text-dim">
                EC2, RDS, Nginx 환경에서 직접 배포하며
                설정 차이와 운영 이슈를 해결했습니다.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
