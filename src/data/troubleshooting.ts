export interface TroubleshootingCase {
  no: string
  titleEn: string
  problem: string
  cause: string
  solution: string
  learned: string
}

export const cases: TroubleshootingCase[] = [
  {
    no: '01',
    titleEn: 'DB Connection Failed on Production',
    problem: '배포 후 애플리케이션이 DB에 연결되지 않음',
    cause: '로컬 환경과 EC2 환경 간 드라이버 설정 및 환경 변수 차이를 사전에 확인하지 않음',
    solution:
      'application.properties를 환경별로 분리 (local / prod), RDS 보안 그룹 인바운드 규칙 수정 후 재배포',
    learned: '기능 구현보다 운영 환경 이해가 중요하다는 점을 체감. 환경 설정은 처음부터 분리해야 한다.',
  },
  {
    no: '02',
    titleEn: 'Race Condition on Transaction State',
    problem: '동시 요청 시 거래 상태 불일치 발생',
    cause: '두 사용자가 동시에 동일 도서를 구매 시도했을 때 트랜잭션 처리가 미흡해 상태가 중복 업데이트됨',
    solution: '비관적 락(SELECT FOR UPDATE) 도입, 단일 트랜잭션만 상태를 변경할 수 있도록 구조적 차단',
    learned: '동시성 문제는 기능 완성 후 발견되기 쉬움. 상태 변경이 있는 API는 처음부터 동시성 시나리오를 고려해야 한다.',
  },
  {
    no: '03',
    titleEn: 'High Latency on S3 Image Upload',
    problem: 'S3 이미지 업로드 시 응답 지연',
    cause: '이미지 원본을 그대로 S3에 전송, 파일 크기가 클수록 지연 증가',
    solution: '업로드 전 서버 사이드에서 이미지 리사이징 처리, 이후 CloudFront CDN 경유로 전달',
    learned: '인프라 연동은 기능이 아닌 성능 관점에서도 설계해야 함. CDN 도입 전후 응답 시간 측정이 중요하다.',
  },
]
