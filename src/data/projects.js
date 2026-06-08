export const projects = [
  {
    id: '01',
    title: 'Blog Platform',
    subtitle: '개인 기술 블로그',
    dark: false,
    duration: '2025.11 – 현재',
    teamSize: '개인 프로젝트',
    description: 'Spring Boot로 직접 만들어 EC2에 배포해 운영 중인 개인 기술 블로그.',
    techStack: ['Spring Boot', 'Thymeleaf', 'MyBatis', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'AWS'],
    github: 'https://github.com/hot-gamja/spring-boot-thymeleaf',
    demo: 'https://hotgamja.dev',
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
      '독서모임 도메인 전담 — CRUD부터 가입 승인·거절, 리더 승계까지 전체 흐름 직접 설계·구현',
      '동시성·정합성 처리 — 동시 승인 Race Condition을 SELECT FOR UPDATE로 구조적 차단, 이미지 수정 시 S3·DB 불일치를 afterCommit으로 해소',
      '캐시 개인화 버그 수정 — 전체 공유 캐시 키로 인한 찜 목록 데이터 누수를 사용자별 키 분리로 제거, @CacheEvict 무효화 연계',
      'Spring Security 도입 — CSRF·XSS·파일 업로드 공통 보안 처리, 팀 기능 코드 수정 없이 일괄 적용',
    ],
    techStack: ['Spring MVC', 'JSP', 'MyBatis', 'PostgreSQL', 'Redis', 'Spring Security', 'AWS S3'],
    outcomes: [
      'Load Test: 동시 30명 30분 — p95 59.7ms, 에러율 0%',
      'Stress Test: 동시 500명 — p95 1.85초, 에러율 0%, 458,004건 처리',
      'Auto Scaling 실제 동작 확인 (EC2 1대 → 2대 자동 스케일 아웃)',
    ],
    improvements: ['실시간 알림 기능', '포인트/적립금 시스템', '리뷰/평점 시스템'],
    github: 'https://github.com/SHSWAcademy/SecondHandBooks',
  },
  {
    id: '03',
    title: 'STO',
    subtitle: '증권형 토큰 거래 플랫폼',
    dark: false,
    duration: '2026.03 – 2026.04',
    teamSize: '5인 팀 프로젝트',
    description:
      '증권형 토큰(STO)을 실시간으로 매수·매도할 수 있는 거래 플랫폼. 지정가 주문이 오더북에 등록되어 가격·시간 우선으로 체결되며, 호가창과 체결내역이 실시간으로 업데이트됩니다.',
    role: [
      '매칭 엔진 직접 설계 — Main과 분리된 Match 서버 구축, TreeMap 오더북으로 O(log n) 호가 조회 보장, price-time priority 지정가 체결 구현',
      'Race Condition 구조적 차단 — 주문 생성 중 외부 수정·취소가 끼어드는 문제를 PENDING 2-phase 트랜잭션으로 설계, 잔고 이중 차감은 비관적 락으로 방지, 데드락은 @Retryable로 자동 복구',
      '금융 정산 정확성 확보 — float→BigDecimal 전환, Math.multiplyExact 오버플로우 방어, 체결가 차액 환급 누락 발견·수정, N+1 개선',
      'JWT 인증 구조 전담 설계 — 회원·관리자 권한 분리, Redis Pub/Sub + WebSocket으로 호가창·체결내역 실시간 전파 구현',
    ],
    techStack: ['Spring Boot', 'Spring Security', 'JPA', 'PostgreSQL', 'Redis', 'WebSocket', 'React'],
    github: 'https://github.com/SHSWAcademy/STO',
  },
]

export const architectureProject = {
  title: 'SecondHandBooks',
  systemBullets: [
    'ALB → EC2 (Auto Scaling)',
    'Spring MVC + MyBatis',
    'PostgreSQL (RDS) · Redis (ElastiCache)',
  ],
  erdBullets: [
    'Member · BookClub · BookClubMember · Trade · Book',
    '독서모임 가입/승인 상태 관리',
    '외래키 기반 정합성 관리',
  ],
  architecture: '/portfolio-v1/images/architecture.png',
  erd: '/portfolio-v1/images/erd.png',
}