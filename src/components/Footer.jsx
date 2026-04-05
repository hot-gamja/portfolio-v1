export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

          {/* Name */}
          <div>
            <p className="font-semibold text-ink">이동희</p>
            <p className="text-sm text-dim mt-0.5">Backend Developer</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8 text-sm">
            <a
              href="https://github.com/hot-gamja"
              target="_blank"
              rel="noreferrer"
              className="text-dim border-b border-dim pb-0.5 hover:opacity-60 transition-opacity"
            >
              GitHub
            </a>
            <a
              href="mailto:abcd0701@naver.com"
              className="text-dim border-b border-dim pb-0.5 hover:opacity-60 transition-opacity"
            >
              Email
            </a>
          </div>
        </div>

        <p className="text-xs text-dim mt-10 opacity-50">
          © 2025 이동희. Built with React + Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
