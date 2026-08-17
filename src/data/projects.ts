interface Role {
  title: string
  detail: string
}

interface Metric {
  label: string
  value: string
  detail?: string
}

export interface Project {
  id: string
  title: string
  subtitle: string
  dark: boolean
  duration: string
  teamSize: string
  description: string
  techStack: string[]
  github?: string
  demo?: string
  role?: Role[]
  metrics?: Metric[]
  architectureImage?: string
  architectureAlt?: string
  architectureBullets?: string[]
}

export const projects: Project[] = [
  {
    id: '01',
    title: 'STO',
    subtitle: '증권형 토큰 거래 플랫폼',
    dark: false,
    duration: '2026.03 – 2026.04',
    teamSize: '5인 팀 프로젝트',
    description:
      '증권형 토큰(STO)을 실시간으로 매수·매도할 수 있는 거래 플랫폼. 지정가 주문이 오더북에 등록되어 가격·시간 우선으로 체결되며, 호가창과 체결내역이 실시간으로 업데이트됩니다.',
    role: [
      { title: '매칭 엔진 설계 및 서버 계약', detail: 'Match 서버를 분리 구축해 TreeMap 오더북으로 O(log n) 호가 조회와 price-time priority 체결 구현. main·match·batch 서버 간 요청·응답 DTO와 상태값 기준을 구현 전 공통으로 확정해 필드 누락·타입 불일치 방지' },
      { title: 'Race Condition 구조적 차단', detail: '계좌·보유수량에는 락이 있었지만 Order 행 자체에 락이 없어 filledQuantity lost update가 발생하는 시나리오를 발견하고 findWithLockById 추가. PENDING 2-phase로 match 서버 연동 실패 시 compensateFailedOrder로 잔고 복구, 데드락은 @Retryable로 자동 복구' },
      { title: '금융 정산 정확성 확보', detail: 'float 연산을 BigDecimal로 전환하고, Math.multiplyExact로 오버플로우를 방지했으며, 체결가 차액 환급 누락 수정' },
      { title: '실시간 전파 구조 설계', detail: '회원·관리자 권한을 분리한 JWT 인증 구조를 설계하고, Redis Pub/Sub과 WebSocket으로 호가창·체결내역 실시간 전파 구현. 트랜잭션 커밋 후 이벤트를 발행해 미커밋 데이터 노출 방지' },
      { title: '실시간 거래 UI 구현', detail: 'React로 호가창·캔들 차트·주문창을 구성하고, useTradingSocket 훅으로 STOMP 메시지를 구독해 화면에 실시간 반영' },
    ],
    techStack: ['Spring Boot', 'Spring Security', 'JPA', 'PostgreSQL', 'Redis', 'WebSocket', 'React'],
    github: 'https://github.com/SHSWAcademy/STO',
    architectureImage: `${import.meta.env.BASE_URL}sto-architecture.png`,
    architectureAlt: 'STO 증권형 토큰 거래 플랫폼 시스템 아키텍처',
    architectureBullets: [
      'NginX 리버스 프록시를 통해 React와 Main 서버를 분리 배포',
      'Main과 독립된 Match 서버가 TreeMap 오더북으로 체결 처리',
      'Redis Pub/Sub으로 체결 이벤트를 WebSocket에 실시간 전파',
      'Spring Batch로 토큰 수익 배분과 블록체인 Outbox 기록까지 설계한 배치 서버를 별도 구성',
    ],
  },
  {
    id: '02',
    title: 'SecondHandBooks',
    subtitle: '중고 도서 거래 플랫폼',
    dark: true,
    duration: '2026.01 – 2026.02',
    teamSize: '6인 팀 프로젝트',
    description:
      '사용자 간 중고 도서를 직거래하고 독서모임을 개설·운영할 수 있는 커뮤니티 플랫폼. 도서 검색·거래, 모임 가입 승인·거절, 찜 목록 등 핵심 기능을 제공합니다.',
    role: [
      { title: '독서모임 도메인 전담', detail: 'CRUD부터 가입 승인·거절, 리더 승계까지 전체 흐름 직접 설계·구현' },
      { title: '동시성·정합성 처리', detail: '동시 승인 Race Condition을 SELECT FOR UPDATE로 구조적 차단, 이미지 수정 시 S3·DB 불일치를 afterCommit으로 해소' },
      { title: '캐시 개인화 버그 수정', detail: '전체 공유 캐시 키로 인한 찜 목록 데이터 누수를 사용자별 키 분리로 제거, @CacheEvict 무효화 연계' },
      { title: 'Spring Security 도입', detail: 'CSRF·XSS·파일 업로드 공통 보안 처리, 팀 기능 코드 수정 없이 일괄 적용' },
    ],
    techStack: ['Spring MVC', 'JSP', 'MyBatis', 'PostgreSQL', 'Redis', 'Spring Security', 'AWS S3'],
    github: 'https://github.com/SHSWAcademy/SecondHandBooks',
    metrics: [
      { label: 'Load Test · 30 VU · 30분', value: '59.7ms', detail: 'p95 기준 · 에러율 0%' },
      { label: 'Stress Test · 500 VU 점진적 증가', value: '1.85s', detail: 'p95 기준 · 에러율 0% · Auto Scaling 1→2대' },
    ],
  },
  {
    id: '03',
    title: 'Blog Platform',
    subtitle: '개인 기술 블로그',
    dark: false,
    duration: '2025.11 – 현재',
    teamSize: '개인 프로젝트',
    description: 'Spring Boot로 직접 만들어 EC2에 배포해 운영 중인 개인 기술 블로그. GitHub Actions로 Docker 이미지를 빌드해 GHCR에 push하고 EC2에 자동 배포되는 CI/CD 파이프라인을 직접 구성했습니다.',
    role: [
      { title: 'CI/CD 파이프라인 구성', detail: 'GitHub Actions로 Docker 이미지 빌드 → GHCR push → EC2 자동 배포까지 전 과정 직접 구성' },
      { title: '서버 사이드 렌더링', detail: 'Thymeleaf + MyBatis 기반으로 마크다운 파싱, 태그 필터링, 페이지네이션 등 블로그 핵심 기능 구현' },
      { title: '운영 환경 직접 구성', detail: 'EC2 + Nginx 리버스 프록시 + RDS 연동, SSL 인증서 적용까지 인프라 전 과정 직접 셋업' },
    ],
    techStack: ['Spring Boot', 'Thymeleaf', 'MyBatis', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'AWS', 'GitHub Actions'],
    github: 'https://github.com/hot-gamja/blog',
    demo: 'https://hotgamja.dev',
  },
]
