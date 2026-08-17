import { useState, useEffect } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import { projects, type Project } from '../data/projects'

function ProjectChapter({ project }: { project: Project }) {
  const ref = useFadeIn()
  const isDark = project.dark
  const [archOpen, setArchOpen] = useState(false)

  useEffect(() => {
    if (!archOpen) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setArchOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [archOpen])

  return (
    <section className={isDark ? 'bg-coal' : 'border-t border-line'}>
      <div ref={ref} className="fade-in max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">

          {/* Left: meta */}
          <div>
            <p className={`text-6xl lg:text-7xl font-semibold tracking-[-0.05em] leading-none mb-6 ${isDark ? 'text-coal-line' : 'text-line'}`}>
              {project.id}
            </p>
            <h3 className={`text-2xl lg:text-3xl font-semibold tracking-[-0.03em] mb-1 ${isDark ? 'text-snow' : 'text-ink'}`}>
              {project.title}
            </h3>
            <p className={`text-sm mb-1 ${isDark ? 'text-smoke' : 'text-dim'}`}>
              {project.subtitle}
            </p>
            <p className={`text-sm mb-8 ${isDark ? 'text-smoke' : 'text-dim'}`}>
              {project.duration} · {project.teamSize}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8">
              {project.techStack.map((t) => (
                <span
                  key={t}
                  className={`text-sm border-b pb-0.5 ${isDark ? 'text-smoke border-coal-line' : 'text-dim border-line'}`}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-6 text-sm font-medium">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`pb-0.5 border-b border-transparent hover:border-current transition-colors ${isDark ? 'text-snow' : 'text-ink'}`}
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className={`pb-0.5 border-b border-transparent hover:border-current transition-colors ${isDark ? 'text-snow' : 'text-ink'}`}
                >
                  {project.demo.replace('https://', '')}
                </a>
              )}
            </div>
          </div>

          {/* Right: content */}
          <div>
            <div className="mb-10">
              <p className={`text-xs font-medium uppercase tracking-[0.2em] mb-4 ${isDark ? 'text-smoke' : 'text-dim'}`}>
                서비스 소개
              </p>
              <p className={`text-lg leading-[1.75] ${isDark ? 'text-snow' : 'text-ink'}`}>
                {project.description}
              </p>
            </div>

            {project.role && (
              <div className="mb-10">
                <p className={`text-xs font-medium uppercase tracking-[0.2em] mb-4 ${isDark ? 'text-smoke' : 'text-dim'}`}>
                  역할
                </p>
                <ul className="space-y-6">
                  {project.role.map((r) => (
                    <li key={r.title}>
                      <p className={`text-base font-semibold mb-1.5 ${isDark ? 'text-snow' : 'text-ink'}`}>
                        {r.title}
                      </p>
                      <p className={`text-sm leading-relaxed ${isDark ? 'text-smoke' : 'text-dim'}`}>
                        {r.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.metrics && (
              <div>
                <p className={`text-xs font-medium uppercase tracking-[0.2em] mb-4 ${isDark ? 'text-smoke' : 'text-dim'}`}>
                  부하 테스트 (k6)
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className={`p-5 ${isDark ? 'bg-coal-2 border border-coal-line' : 'border border-line'}`}
                    >
                      <p className={`text-xs mb-3 ${isDark ? 'text-smoke' : 'text-dim'}`}>{m.label}</p>
                      <p className={`text-3xl font-semibold tracking-[-0.04em] leading-none mb-2 ${isDark ? 'text-snow' : 'text-ink'}`}>
                        {m.value}
                      </p>
                      {m.detail && (
                        <p className={`text-xs ${isDark ? 'text-smoke' : 'text-dim'}`}>{m.detail}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.architectureImage && (
              <div className="mt-10">
                <p className={`text-xs font-medium uppercase tracking-[0.2em] mb-4 ${isDark ? 'text-smoke' : 'text-dim'}`}>
                  System Architecture
                </p>
                <button
                  onClick={() => setArchOpen(true)}
                  className={`text-sm font-medium pb-0.5 border-b border-transparent hover:border-current transition-colors ${isDark ? 'text-snow' : 'text-ink'}`}
                >
                  아키텍처 보기 →
                </button>
              </div>
            )}

            {archOpen && project.architectureImage && (
              <div
                className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6"
                onClick={() => setArchOpen(false)}
              >
                <div
                  className="modal-content bg-ivory max-w-5xl w-full max-h-[90vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-line">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-dim">System Architecture</p>
                    <button
                      onClick={() => setArchOpen(false)}
                      className="text-dim hover:text-ink transition-colors text-lg leading-none"
                      aria-label="닫기"
                    >
                      ✕
                    </button>
                  </div>
                  <img
                    src={project.architectureImage}
                    alt={project.architectureAlt ?? `${project.title} 시스템 아키텍처`}
                    className="w-full object-contain p-6"
                  />
                  {project.architectureBullets && (
                    <ul className="px-6 pb-6 space-y-2 border-t border-line pt-4">
                      {project.architectureBullets.map((b) => (
                        <li key={b} className="text-sm flex gap-2 text-dim">
                          <span className="mt-0.5">—</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  )
}

export default function Projects() {
  const ref = useFadeIn()

  return (
    <div>
      {/* Section header */}
      <section id="projects" className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 lg:pt-32 pb-12">
          <div ref={ref} className="fade-in">
            <p className="text-xs font-semibold tracking-[0.2em] text-dim uppercase mb-3">
              Work
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold text-ink tracking-[-0.03em]">
              Featured Projects
            </h2>
          </div>
        </div>
      </section>

      {projects.map((project) => (
        <ProjectChapter key={project.id} project={project} />
      ))}
    </div>
  )
}
