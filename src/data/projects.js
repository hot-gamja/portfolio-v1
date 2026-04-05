export const projects = [
  {
    id: '01',
    title: 'Blog Platform',
    subtitle: '개인 기술 블로그',
    dark: false,
    duration: '2025.11 – 2026.03',
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
      '사용자 간 중고 도서 거래와 독서모임을 지원하는 플랫폼. 동시성 제어, Spring Cache 개인화, S3 정합성 처리 등 백엔드 핵심 과제를 전담했습니다.',
    role: [
      '독서모임 기능 전체 설계 및 구현 (CRUD, 가입 승인/거절, 리더 승계)',
      '동시성 제어 및 캐시 최적화',
      '보안 공통 모듈 구축 (CSRF, XSS, 파일 업로드 검증)',
    ],
    techStack: ['Spring MVC', 'MyBatis', 'PostgreSQL', 'Redis', 'AWS'],
    troubleshooting: [
      {
        titleEn: 'Race Condition on Book Club Approval',
        cause: '두 관리자가 동시에 승인 시 SELECT 이후 INSERT가 각자 실행되어 정원 초과',
        solution: 'SELECT FOR UPDATE로 승인 진입 즉시 비관적 락 획득, 트랜잭션 직렬화',
        result: '동시 요청 시 하나만 통과, 정원 초과 없이 데이터 정합성 보장',
      },
      {
        titleEn: 'S3 / DB Consistency on Image Update',
        cause: '이미지 수정 중 예외 발생 시 DB는 롤백되지만 S3 파일은 이미 삭제되어 DB-스토리지 불일치 발생',
        solution: 'TransactionSynchronizationAdapter afterCommit 적용 — DB 커밋 완료 후에만 S3 삭제 실행',
        result: '롤백 시 기존 이미지 유지, DB-스토리지 정합성 보장',
      },
      {
        titleEn: 'Cache Key Collision — Wish List Cross-User Leak',
        cause: '전 사용자가 동일 캐시 키 공유 — 개인화 데이터(찜 여부)가 섞임',
        solution: '캐시 키에 memberSeq 포함, @CacheEvict를 찜 토글/모임 생성/탈퇴에 연계',
        result: '사용자별 캐시 독립 보장, 성능 유지 + 데이터 정확성 동시 확보',
      },
    ],
    outcomes: [
      'Load Test: 동시 30명 30분 — p95 59.7ms, 에러율 0%',
      'Stress Test: 동시 500명 — p95 1.85초, 에러율 0%, 458,004건 처리',
      'Auto Scaling 실제 동작 확인 (EC2 1대 → 2대 자동 스케일 아웃)',
    ],
    improvements: ['실시간 알림 기능', '포인트/적립금 시스템', '리뷰/평점 시스템'],
    github: 'https://github.com/SHSWAcademy/SecondHandBooks',
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
