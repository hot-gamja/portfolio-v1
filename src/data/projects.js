export const projects = [
  {
    id: '01',
    title: 'Blog Platform',
    subtitle: '개인 블로그 서비스',
    dark: false,
    description:
      '개인 콘텐츠를 관리하고 조회할 수 있는 블로그 서비스. 백엔드 구조 설계부터 EC2 기반 배포/운영까지 직접 수행했습니다.',
    role: [
      '백엔드 API 설계 및 구현',
      'PostgreSQL 연동 및 쿼리 작성',
      'EC2/RDS/Nginx 배포 환경 구성',
      '장애 원인 분석 및 수정',
    ],
    techStack: ['Spring Boot', 'MyBatis', 'PostgreSQL', 'AWS EC2', 'RDS', 'Nginx'],
    features: ['게시글 CRUD', '댓글 / 방명록', '이미지 업로드', 'REST API'],
    designPoint:
      'Controller → Service → Repository 계층 분리로 의존성 명확화. SQL을 직접 작성하며 데이터 흐름을 구조적으로 파악. EC2-RDS-Nginx 구조에서 애플리케이션과 인프라 연결 방식 이해.',
    troubleshooting: [
      {
        problem: '배포 후 DB 연결 실패',
        titleEn: 'DB Connection Failed on Production',
        cause: '로컬과 EC2 환경의 드라이버 설정 차이 미확인',
        solution: 'application.properties 환경별 분리 및 RDS 보안 그룹 인바운드 규칙 수정',
        result: '배포 환경에서 안정적 DB 연결 확인',
      },
      {
        problem: '정적 리소스가 배포 후 미반영',
        titleEn: 'Static Resources Not Served After Deploy',
        cause: 'Nginx 리버스 프록시 설정 누락',
        solution: 'Nginx proxy_pass 경로 및 CORS 헤더 설정 수정',
        result: '정적 파일 정상 응답 확인',
      },
    ],
    github: 'https://github.com/[username]/[repo]',
    demo: '',
  },
  {
    id: '02',
    title: 'SecondHandBooks',
    subtitle: '중고 도서 거래 플랫폼',
    dark: true,
    description:
      '사용자 간 중고 도서 거래를 지원하는 플랫폼. 트랜잭션 처리, Redis 캐시, AWS S3/CloudFront 이미지 처리 등 기술 깊이에 집중했습니다.',
    role: [
      '백엔드 API 설계 및 구현',
      'Redis 캐시 적용',
      'AWS S3 / CloudFront 이미지 처리',
      '트랜잭션 및 거래 상태 설계',
    ],
    techStack: ['Spring Boot', 'JPA', 'MySQL', 'Redis', 'AWS S3', 'CloudFront'],
    features: ['도서 등록 / 거래', '거래 상태 관리', 'S3 이미지 업로드', 'Redis 캐시 조회 최적화'],
    designPoint:
      'Redis 캐시 도입으로 도서 목록 반복 조회 부하 감소. CloudFront CDN 연동으로 이미지 응답 속도 개선. 트랜잭션 처리로 거래 정합성 확보.',
    troubleshooting: [
      {
        problem: '동시 요청 시 거래 상태 불일치',
        titleEn: 'Race Condition on Transaction State',
        cause: '동시 접근에 대한 트랜잭션 처리 미흡',
        solution: '낙관적 락 도입 후 충돌 시 재시도 로직 적용',
        result: '거래 상태 정합성 유지 확인',
      },
      {
        problem: 'S3 업로드 응답 지연',
        titleEn: 'High Latency on S3 Image Upload',
        cause: '이미지 원본 그대로 전송',
        solution: '업로드 전 리사이징 처리로 전송 용량 감소',
        result: '업로드 응답 시간 단축',
      },
    ],
    github: 'https://github.com/[username]/[repo]',ㅈ
    demo: '',
  },
]

export const architectureProject = {
  title: 'Blog Platform',
  systemDesc:
    '클라이언트 → Nginx (리버스 프록시) → Spring Boot 애플리케이션 → PostgreSQL (RDS) 구조. AWS EC2 위에서 동작하며, 정적 리소스는 Nginx가 직접 서빙.',
  systemBullets: [
    'Reverse proxy with Nginx',
    'Spring Boot application layer',
    'Managed DB on AWS RDS',
  ],
  erdDesc:
    'User, Post, Comment, Image 테이블 중심의 ERD. 게시글과 댓글은 1:N, 이미지는 게시글에 종속된 구조.',
  erdBullets: [
    'User · Post · Comment · Image',
    '1:N 관계 설계',
    '외래키 기반 정합성 관리',
  ],
  architecture: '/portfolio-v1/images/architecture.png',
  erd: '/portfolio-v1/images/erd.png',
}
