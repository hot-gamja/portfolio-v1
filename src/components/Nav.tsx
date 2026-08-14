export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-ivory/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 h-14 flex items-center justify-between">
        <a href="#" className="text-sm font-semibold text-ink">이동희</a>
        <div className="flex gap-6 text-xs font-semibold tracking-[0.2em] text-dim uppercase">
          <a href="#projects" className="hover:text-ink transition-colors">Projects</a>
          <a href="#architecture" className="hover:text-ink transition-colors">Architecture</a>
          <a href="#skills" className="hover:text-ink transition-colors">Skills</a>
        </div>
      </div>
    </nav>
  )
}
