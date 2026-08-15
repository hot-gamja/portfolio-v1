export interface Award {
  year: string
  title: string
  org: string
}

export interface Patent {
  title: string
  count: string
}

export const awards: Award[] = [
  {
    year: '2026.04',
    title: '프로젝트부문 우수상',
    org: '대한상공회의소 · 신한DS 금융SW 아카데미 6기',
  },
  {
    year: '2024.11',
    title: 'IP기반 캡스톤디자인 장려상',
    org: '안양대학교 IP기반융합인재양성단',
  },
]

export const patent: Patent = {
  title: '부동산 청약 서비스 자격 판단·배점 산출·공고 추천 흐름',
  count: '1건 출원',
}
