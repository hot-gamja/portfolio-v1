export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line py-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

          {/* Name */}
          <div>
            <p className="font-semibold text-ink">이동희</p>
            <p className="text-sm text-dim mt-0.5">Full Stack Developer</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8 text-sm">
            <a
              href="https://github.com/hot-gamja"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub 프로필 (새 탭에서 열림)"
              className="text-dim pb-0.5 border-b border-transparent hover:border-dim transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://hotgamja.dev"
              target="_blank"
              rel="noreferrer"
              aria-label="기술 블로그 (새 탭에서 열림)"
              className="text-dim pb-0.5 border-b border-transparent hover:border-dim transition-colors"
            >
              Blog
            </a>
            <a
              href="mailto:abcd0701@naver.com"
              aria-label="이메일 보내기"
              className="text-dim pb-0.5 border-b border-transparent hover:border-dim transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        <p className="text-xs text-dim mt-10 opacity-50">
          © 2026 이동희. Built with React + Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
