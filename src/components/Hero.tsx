export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative">
      <div className="max-w-6xl mx-auto w-full px-6 sm:px-10 lg:px-16 py-32">

        <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-dim uppercase mb-6">
              Full Stack Developer
            </p>

            <h1 className="text-[clamp(4rem,11vw,7.5rem)] font-semibold text-ink tracking-[-0.04em] leading-[0.93] mb-10">
              이동희
            </h1>

            <p className="text-xl sm:text-2xl text-ink max-w-lg leading-[1.4] tracking-[-0.02em] mb-4">
              백엔드 중심으로 설계하고
              <br />
              프론트까지 구현하는 풀스택 개발자
            </p>
            <div className="flex flex-wrap gap-8 text-sm font-medium mt-12">
              <a
                href="https://github.com/hot-gamja"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub 프로필 (새 탭에서 열림)"
                className="text-ink pb-0.5 border-b border-transparent hover:border-ink transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://hotgamja.dev"
                target="_blank"
                rel="noreferrer"
                aria-label="기술 블로그 (새 탭에서 열림)"
                className="text-ink pb-0.5 border-b border-transparent hover:border-ink transition-colors"
              >
                Blog
              </a>
              <a
                href="mailto:abcd0701@naver.com"
                aria-label="이메일 보내기"
                className="text-ink pb-0.5 border-b border-transparent hover:border-ink transition-colors"
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
