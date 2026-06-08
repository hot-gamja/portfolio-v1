export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative">
      <div className="max-w-6xl mx-auto w-full px-6 sm:px-10 lg:px-16 py-32">

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
            <div className="flex flex-wrap gap-8 text-sm font-medium mt-12">
              <a
                href="https://github.com/hot-gamja"
                target="_blank"
                rel="noreferrer"
                className="text-ink pb-0.5 hover:border-b hover:border-ink transition-all"
              >
                GitHub
              </a>
              <a
                href="mailto:abcd0701@naver.com"
                className="text-ink pb-0.5 hover:border-b hover:border-ink transition-all"
              >
                Contact
              </a>
            </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-line py-4">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
<p className="text-xs font-semibold tracking-[0.24em] text-dim uppercase">
            Selected Work ↓
          </p>
        </div>
      </div>
    </section>
  )
}
