import { useFadeIn } from '../hooks/useFadeIn'
import { architectureProject } from '../data/projects'

export default function Architecture() {
  const ref = useFadeIn()

  return (
    <section className="py-24 lg:py-32 bg-coal">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        <div ref={ref} className="fade-in">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-smoke uppercase mb-3">
            Design
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-snow tracking-[-0.03em] mb-4">
            Architecture / ERD
          </h2>
          <p className="text-smoke mb-16 max-w-xl text-[15px] leading-7">
            기능 구현에 그치지 않고 시스템 구조와 데이터 설계를 함께 고민했습니다.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* System Architecture */}
            <div className="bg-coal-2 border border-coal-line overflow-hidden">
              <div className="p-6 border-b border-coal-line">
                <h3 className="font-semibold text-snow text-sm">System Architecture</h3>
                <p className="text-xs text-smoke mt-1">{architectureProject.title}</p>
              </div>
              <div className="aspect-[4/3] bg-coal flex items-center justify-center">
                <img
                  src={architectureProject.architecture}
                  alt="System Architecture"
                  className="w-full h-full object-contain p-4"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentNode.innerHTML = '<div class="text-center p-8"><p class="text-sm font-medium" style="color:#9E9A93">Architecture 이미지 추가 예정</p><p class="text-xs mt-1" style="color:#3A3A3A">public/images/architecture.png</p></div>'
                  }}
                />
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {architectureProject.systemBullets.map((b) => (
                    <li key={b} className="text-sm text-smoke flex gap-2">
                      <span className="mt-0.5">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ERD */}
            <div className="bg-coal-2 border border-coal-line overflow-hidden">
              <div className="p-6 border-b border-coal-line">
                <h3 className="font-semibold text-snow text-sm">Database Design (ERD)</h3>
                <p className="text-xs text-smoke mt-1">{architectureProject.title}</p>
              </div>
              <div className="aspect-[4/3] bg-coal flex items-center justify-center">
                <img
                  src={architectureProject.erd}
                  alt="ERD"
                  className="w-full h-full object-contain p-4"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentNode.innerHTML = '<div class="text-center p-8"><p class="text-sm font-medium" style="color:#9E9A93">ERD 이미지 추가 예정</p><p class="text-xs mt-1" style="color:#3A3A3A">public/images/erd.png</p></div>'
                  }}
                />
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {architectureProject.erdBullets.map((b) => (
                    <li key={b} className="text-sm text-smoke flex gap-2">
                      <span className="mt-0.5">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
