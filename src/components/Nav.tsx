import { useState } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Awards', href: '#awards' },
  { label: 'Contact', href: '#contact' },
]

const sectionIds = navLinks.map((l) => l.href.slice(1))

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(sectionIds)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-ivory/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 h-14 flex items-center justify-between">
        <a href="#" className="text-sm font-semibold text-ink">이동희</a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 text-xs font-semibold tracking-[0.2em] text-dim uppercase">
          {navLinks.map((link) => {
            const isActive = link.href === `#${activeId}`
            return (
              <a
                key={link.href}
                href={link.href}
                className={`pb-0.5 border-b transition-colors hover:text-ink ${isActive ? 'text-ink border-ink' : 'border-transparent'}`}
              >
                {link.label}
              </a>
            )
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-px bg-ink transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-px bg-ink transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-ink transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="menu-drop md:hidden border-t border-line bg-ivory/95 backdrop-blur-sm px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = link.href === `#${activeId}`
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-xs font-semibold tracking-[0.2em] uppercase transition-colors hover:text-ink ${isActive ? 'text-ink' : 'text-dim'}`}
              >
                {link.label}
              </a>
            )
          })}
        </div>
      )}
    </nav>
  )
}
