import { useFadeIn } from '../hooks/useFadeIn'

const mainStacks = [
  {
    category: 'Backend',
    items: [
      { name: 'Java', desc: '백엔드 주 개발 언어' },
      { name: 'Spring Boot', desc: 'REST API 설계, 계층 구조, 의존성 주입' },
      { name: 'Spring MVC', desc: '레거시 기반 웹 애플리케이션 개발' },
      { name: 'MyBatis', desc: 'SQL 직접 작성, 데이터 흐름 제어' },
      { name: 'Thymeleaf / JSP', desc: '서버사이드 템플릿 엔진' },
      { name: 'JPA / Hibernate', desc: '엔티티 설계, 연관관계 매핑' },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'PostgreSQL', desc: '운영 DB, 복잡한 쿼리 작성' },
      { name: 'MySQL / MariaDB', desc: '관계형 DB 설계 및 운영' },
      { name: 'Redis', desc: '캐시 적용, 조회 성능 개선' },
    ],
  },
  {
    category: 'Infrastructure',
    items: [
      { name: 'AWS EC2', desc: '서버 배포 및 운영' },
      { name: 'AWS RDS', desc: '관리형 DB 연동' },
      { name: 'AWS S3 / CloudFront', desc: '이미지 스토리지, CDN 배포' },
      { name: 'Docker', desc: '컨테이너 기반 배포' },
      { name: 'Nginx', desc: '리버스 프록시, 정적 파일 서빙' },
    ],
  },
]

const frontendStack = [
  { name: 'React', desc: 'SPA 구성, 컴포넌트 기반 UI' },
  { name: 'JavaScript', desc: '주 언어, 비동기 처리' },
  { name: 'Tailwind CSS', desc: '유틸리티 기반 스타일링' },
]

export default function TechStack() {
  const ref = useFadeIn()

  return (
    <section className="border-t border-line py-24 lg:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        <div ref={ref} className="fade-in">
          <p className="text-xs font-semibold tracking-[0.2em] text-dim uppercase mb-3">
            Skills
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-ink tracking-[-0.03em] mb-16">
            Tech Stack
          </h2>

          {/* Main: Backend / Database / Infrastructure */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            {mainStacks.map((group) => (
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

          {/* Frontend: smaller, separated */}
          <div className="border-t border-line pt-8">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-dim uppercase mb-5 opacity-50">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-x-10 gap-y-3">
              {frontendStack.map((item) => (
                <div key={item.name} className="flex items-baseline gap-2">
                  <p className="text-sm font-semibold text-dim">{item.name}</p>
                  <p className="text-sm text-dim opacity-60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
