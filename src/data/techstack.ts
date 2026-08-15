export interface StackItem {
  name: string
  desc: string
}

export interface StackGroup {
  category: string
  items: StackItem[]
}

export const stacks: StackGroup[] = [
  {
    category: 'Language',
    items: [
      { name: 'Java', desc: '백엔드 주 개발 언어' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Spring Boot', desc: 'REST API 설계, 계층 구조, 의존성 주입' },
      { name: 'Spring MVC', desc: '레거시 기반 웹 애플리케이션 개발' },
      { name: 'Spring Security', desc: 'JWT 인증·인가, 권한 분리 설계' },
      { name: 'JPA / MyBatis', desc: '엔티티 설계, SQL 직접 작성' },
      { name: 'Thymeleaf / JSP', desc: '서버사이드 템플릿 엔진' },
      { name: 'WebSocket', desc: '서버 → 클라이언트 실시간 Push (SockJS/STOMP)' },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'PostgreSQL', desc: '운영 DB, 복잡한 쿼리 작성' },
      { name: 'MySQL / MariaDB', desc: '관계형 DB 설계 및 운영' },
      { name: 'Redis', desc: '캐시, Pub/Sub 기반 실시간 이벤트 전파' },
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
  {
    category: 'Frontend',
    items: [
      { name: 'React', desc: 'SPA 구성, 컴포넌트 기반 UI' },
      { name: 'JavaScript', desc: '주 언어, 비동기 처리' },
      { name: 'Tailwind CSS', desc: '유틸리티 기반 스타일링' },
    ],
  },
  {
    category: 'CI/CD',
    items: [
      { name: 'GitHub Actions', desc: 'Docker 빌드 → GHCR → EC2 자동 배포' },
      { name: 'Jenkins', desc: 'Pipeline 기반 배포 자동화' },
    ],
  },
]
