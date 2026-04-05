export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative">
      <div className="max-w-6xl mx-auto w-full px-6 sm:px-10 lg:px-16 py-32">

        <div className="lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">

          {/* Left: main content */}
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-dim uppercase mb-6">
              Backend Developer
            </p>

            <h1 className="text-[clamp(4rem,11vw,7.5rem)] font-semibold text-ink tracking-[-0.04em] leading-[0.93] mb-10">
              이동희
            </h1>

            <p className="text-xl sm:text-2xl text-ink max-w-lg leading-[1.4] tracking-[-0.02em] mb-4">
              데이터 정합성과 운영 관점에서
              <br />
              문제를 해결하는 백엔드 개발자
            </p>
            <p className="text-sm text-dim mb-12">
              Spring Boot · PostgreSQL · MyBatis · AWS
            </p>

            <div className="flex flex-wrap gap-8 text-sm font-medium">
              <a
                href="https://github.com/hot-gamja"
                target="_blank"
                rel="noreferrer"
                className="border-b border-ink text-ink pb-0.5 hover:opacity-50 transition-opacity"
              >
                GitHub
              </a>
<a
                href="mailto:abcd0701@naver.com"
                className="border-b border-ink text-ink pb-0.5 hover:opacity-50 transition-opacity"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right: text index (lg only) */}
          <div className="hidden lg:block">
            <div className="border-l border-line pl-8 space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-dim mb-3">Core Stack</p>
                <p className="text-base leading-7 text-ink">
                  Spring Boot / PostgreSQL
                  <br />
                  MyBatis / AWS
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-dim mb-3">Focus</p>
                <p className="text-base leading-7 text-ink">
                  Structure / Correctness
                  <br />
                  Operations
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-line py-4">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          <p className="text-xs text-dim tracking-wide">
            이 포트폴리오를 React + Tailwind CSS로 직접 구현했습니다
          </p>
          <p className="text-xs font-semibold tracking-[0.24em] text-dim uppercase">
            Selected Work ↓
          </p>
        </div>
      </div>
    </section>
  )
}
