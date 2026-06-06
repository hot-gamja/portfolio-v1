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
      '사용자 간 중고 도서를 직거래하고 독서모임을 개설·운영할 수 있는 커뮤니티 플랫폼. 도서 검색·거래, 모임 가입 승인·거절, 찜 목록 등 핵심 기능을 제공합니다.',
    role: [
      '독서모임 기능 전체 설계 및 구현 (CRUD, 가입 승인/거절, 리더 승계)',
      '동시성 제어 및 캐시 최적화',
      '보안 공통 모듈 구축 (CSRF, XSS, 파일 업로드 검증)',
    ],
    techStack: ['Spring MVC', 'MyBatis', 'PostgreSQL', 'Redis', 'Spring Security', 'AWS S3'],
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
      '매칭 엔진 설계 및 구현 — Match 서버 분리, TreeMap 기반 오더북, price-time priority 지정가 매칭',
      '동시성 제어 — 비관적 락 전면 적용, 2-phase 트랜잭션 분리, @Retryable 데드락 재시도',
      '체결 정산 — 잔고·보유수량 반영, 평균 매수가 수정, BigDecimal 전환, N+1 개선',
      'JWT 인증 구조 설계, Redis Pub/Sub 실시간 호가창·체결내역 전파',
    ],
    techStack: ['Spring Boot', 'Spring Security', 'JPA', 'JWT', 'PostgreSQL', 'Redis', 'WebSocket'],
    troubleshooting: [
      {
        titleEn: 'Race Condition — Pessimistic Lock + 2-Phase Transaction',
        cause:
          '주문 생성 → match 서버 호출 사이에 수정·취소가 동시에 들어오면 처리 중인 주문이 외부에서 변경되는 race condition 발생. 락 없이 조회 시 잔고 차감이 중복 실행될 수 있는 구조였음',
        solution:
          'PENDING 상태 도입으로 Phase 1(검증·저장·커밋) → Phase 2(match 응답 반영) 분리. PENDING 구간 수정·취소 명시적 차단, Account·Holding 조회 전면 SELECT FOR UPDATE 전환, @Retryable로 데드락 자동 재시도 (3회, 100ms)',
        result: '주문 생성 중 외부 요청 차단, 잔고·보유수량 이중 차감 제거, 데드락 케이스 자동 복구',
      },
      {
        titleEn: 'Order Status Regression in Distributed Response',
        cause:
          '분산 서버 구조에서 match 응답 순서가 보장되지 않아 나중에 도착한 PARTIAL 응답이 FILLED 상태를 덮어쓰는 역행 버그 발생',
        solution:
          '응답 상태를 그대로 저장하는 대신, 누적 체결 수량 기준으로 최종 상태를 재계산해 이전 상태로 역행 불가능하도록 처리',
        result: 'PARTIAL → FILLED 전이 순서 보장, 늦게 도착한 응답이 확정 상태를 되돌리지 않음',
      },
      {
        titleEn: 'Settlement Precision — BigDecimal + Overflow Guard',
        cause:
          'float 연산으로 정밀도 오류 발생, long 단순 곱셈에서 오버플로우 미탐지, 체결가 < 주문가일 때 차액 미환급으로 잔고 부족 발생',
        solution:
          'BigDecimal 전환으로 금융 정밀도 확보, Math.multiplyExact 적용으로 오버플로우 런타임 감지, 차액(주문가 - 체결가) × 수량 환급 로직 추가',
        result: '정밀도 오류 제거, 오버플로우 즉시 감지, 잔고 정합성 보장',
      },
    ],
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