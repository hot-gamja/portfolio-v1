import { useFadeIn } from '../hooks/useFadeIn'
import { stacks } from '../data/techstack'

export default function TechStack() {
  const ref = useFadeIn()

  return (
    <section id="skills" className="border-t border-line py-24 lg:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        <div ref={ref} className="fade-in">
          <p className="text-xs font-semibold tracking-[0.2em] text-dim uppercase mb-3">
            Skills
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-ink tracking-[-0.03em] mb-16">
            Tech Stack
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {stacks.map((group) => (
              <div key={group.category}>
                <h3 className="text-xs font-semibold tracking-[0.2em] text-dim uppercase mb-6">
                  {group.category}
                </h3>
                <ul className="space-y-5">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <p className="text-sm font-semibold text-ink">{item.name}</p>
                      <p className="text-sm text-dim mt-0.5 leading-relaxed">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
