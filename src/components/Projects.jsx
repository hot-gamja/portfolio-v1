import { useFadeIn } from '../hooks/useFadeIn'
import { projects } from '../data/projects'

function ProjectChapter({ project }) {
  const ref = useFadeIn()
  const isDark = project.dark

  return (
    <section className={isDark ? 'bg-coal' : 'border-t border-line'}>
      <div ref={ref} className="fade-in max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">

          {/* Left: meta */}
          <div>
            <p className={`text-7xl lg:text-8xl font-semibold tracking-[-0.05em] leading-none mb-6 ${isDark ? 'text-coal-line' : 'text-line'}`}>
              {project.id}
            </p>
            <h3 className={`text-2xl lg:text-3xl font-semibold tracking-[-0.03em] mb-2 ${isDark ? 'text-snow' : 'text-ink'}`}>
              {project.title}
            </h3>
            <p className={`text-sm mb-8 ${isDark ? 'text-smoke' : 'text-dim'}`}>
              {project.subtitle}
            </p>

            {/* Tech stack as inline list */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8">
              {project.techStack.map((t) => (
                <span
                  key={t}
                  className={`text-xs border-b pb-0.5 ${isDark ? 'text-smoke border-coal-line' : 'text-dim border-line'}`}
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
                  className={`border-b pb-0.5 hover:opacity-50 transition-opacity ${isDark ? 'text-snow border-snow' : 'text-ink border-ink'}`}
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className={`border-b pb-0.5 hover:opacity-50 transition-opacity ${isDark ? 'text-smoke border-smoke' : 'text-dim border-dim'}`}
                >
                  Demo
                </a>
              )}
            </div>
          </div>

          {/* Right: content */}
          <div>
            <p className={`text-[17px] leading-[1.75] mb-10 ${isDark ? 'text-snow' : 'text-ink'}`}>
              {project.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              {/* Role */}
              <div>
                <p className={`text-[11px] uppercase tracking-[0.24em] mb-4 ${isDark ? 'text-smoke' : 'text-dim'}`}>
                  역할
                </p>
                <ul className="space-y-2">
                  {project.role.map((r) => (
                    <li key={r} className={`text-[15px] leading-6 ${isDark ? 'text-snow' : 'text-ink'}`}>
                      — {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Design point */}
              <div>
                <p className={`text-[11px] uppercase tracking-[0.24em] mb-4 ${isDark ? 'text-smoke' : 'text-dim'}`}>
                  설계 포인트
                </p>
                <p className={`text-[15px] leading-7 ${isDark ? 'text-smoke' : 'text-dim'}`}>
                  {project.designPoint}
                </p>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className={`border-t pt-8 ${isDark ? 'border-coal-line' : 'border-line'}`}>
              <p className={`text-[11px] uppercase tracking-[0.24em] mb-6 ${isDark ? 'text-smoke' : 'text-dim'}`}>
                트러블슈팅
              </p>
              <div className="space-y-6">
                {project.troubleshooting.map((ts, i) => (
                  <div
                    key={i}
                    className={`border-l-2 pl-5 ${isDark ? 'border-coal-line' : 'border-line'}`}
                  >
                    <p className={`text-sm font-semibold mb-2 ${isDark ? 'text-snow' : 'text-ink'}`}>
                      {ts.titleEn || ts.problem}
                    </p>
                    <p className={`text-xs leading-5 mb-1 ${isDark ? 'text-smoke' : 'text-dim'}`}>
                      <span className="text-red-500 mr-1">●</span>{ts.cause}
                    </p>
                    <p className={`text-xs leading-5 mb-1 ${isDark ? 'text-smoke' : 'text-dim'}`}>
                      <span className="text-blue-500 mr-1">●</span>{ts.solution}
                    </p>
                    <p className={`text-xs leading-5 ${isDark ? 'text-smoke' : 'text-dim'}`}>
                      <span className="mr-1" style={{ color: isDark ? '#5A5650' : '#B8B0A6' }}>●</span>{ts.result}
                    </p>
                  </div>
                ))}
              </div>
            </div>
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
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 lg:pt-32 pb-12">
          <div ref={ref} className="fade-in">
            <p className="text-[11px] font-semibold tracking-[0.28em] text-dim uppercase mb-3">
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
