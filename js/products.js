window.AppData = {
  products: [
    {
      id: "officeguard",
      name: "OfficeGuard",
      label: "기본형",
      tagline: "비업무·유해 사이트 차단 솔루션",
      short:
        "조직 정책에 따라 비업무·유해 사이트 접속을 통제하는 기본형 제품입니다.",
      summary:
        "OfficeGuard는 업무망의 인터넷 사용 기준을 세우고, 조직별 정책에 따라 비업무 사이트와 유해 사이트 접속을 관리하는 네트워크 보안 솔루션입니다.",
      accent: "#2563eb",
      image: "./assets/06-screen-dashboard.png",
      highlights: [
        { value: "Policy", label: "조직별 접속 정책" },
        { value: "Block", label: "유해 사이트 차단" },
        { value: "Report", label: "운영 현황 확인" },
      ],
      features: [
        "비업무 사이트 접속 통제",
        "유해 사이트 및 악성 경로 차단",
        "조직 기준 정책 운영",
        "운영 현황 및 통계 확인",
      ],
      targets: "기업, 공공기관, 교육기관의 인터넷 사용 통제와 내부 정보보호",
    },
    {
      id: "officeguard-sv",
      name: "OfficeGuard SV",
      label: "가시성 강화",
      tagline: "SSL/TLS 스마트 가시성 SWG",
      short:
        "암호화 트래픽 환경에서 보안 사각지대를 줄이는 SSL 가시성 제품입니다.",
      summary:
        "OfficeGuard SV는 SSL/TLS 기반 웹 사용이 증가한 환경에서 기존 보안 체계가 놓칠 수 있는 암호화 구간의 가시성을 확보하도록 지원합니다.",
      accent: "#0d9488",
      image: "./assets/05-architecture.png",
      highlights: [
        { value: "SSL", label: "암호화 트래픽 가시화" },
        { value: "SWG", label: "Secure Web Gateway" },
        { value: "Link", label: "보안 체계 연동" },
      ],
      features: [
        "SSL/TLS 트래픽 가시성 확보",
        "암호화 구간 보안 공백 완화",
        "기존 보안 체계 연동 지원",
        "기관 환경에 맞춘 안정적 구성",
      ],
      targets: "SSL 트래픽 비중이 높은 기관, 보안 장비 연동이 필요한 망 환경",
    },
    {
      id: "officeguard-plus",
      name: "OfficeGuard Plus",
      label: "통합형",
      tagline: "SSL 가시성 + 유해 콘텐츠 차단 통합 솔루션",
      short:
        "접속 통제와 SSL 가시성을 하나로 묶은 통합형 웹 보안 제품입니다.",
      summary:
        "OfficeGuard Plus는 비업무·유해 사이트 통제와 SSL 가시성 기능을 통합해 더 높은 수준의 웹 보안 운영이 필요한 조직에 적합합니다.",
      accent: "#7c3aed",
      image: "./assets/04-db-advantage.png",
      highlights: [
        { value: "All-in-one", label: "통합 웹 보안" },
        { value: "SSL", label: "가시성 강화" },
        { value: "Manage", label: "정책 운영 효율화" },
      ],
      features: [
        "비업무·유해 사이트 통제",
        "SSL/TLS 트래픽 가시성 강화",
        "통합 정책 운영",
        "조직 보안 체계와 연계 가능",
      ],
      targets: "SSL 가시성과 비업무·유해 콘텐츠 차단을 동시에 요구하는 조직",
    },
  ],
  shared: {
    dbStats: [
      { value: "1,200만+", label: "유해 사이트 DB" },
      { value: "4,300만+", label: "악성코드 URL DB" },
      { value: "60만+", label: "유해 동영상 DB" },
      { value: "96%+", label: "AI 분류 정확도" },
    ],
    process: ["데이터 수집", "AI 1차 분류", "운영자 검증", "DB 배포", "정책 반영"],
  },
  companyInfo: {
    name: "플랜티넷",
    tagline: "네트워크 보안 솔루션 전문기업",
    description:
      "㈜플랜티넷은 '깨끗하고 안전한 인터넷 세상'을 만들고자 하는 마음에서 시작하여 2000년 국내 최초로 유해 콘텐츠 필터링 서비스를 상용화하였습니다. 이후 지난 23년간 비업무·유해사이트 차단 솔루션 PCGuard, OfficeGuard와 SSL 암복호화 솔루션 OfficeGuard SV, OfficeGuard Plus를 제공해오고 있습니다. 디지털 트랜스포메이션 환경으로의 ICT 트렌드 변화에 발맞추어 끊임없이 연구개발에 투자하고 있으며, 축적한 기술력을 기반으로 차세대 네트워크 보안 솔루션까지 사업 영역을 확장하고 있습니다.",
    address: "경기도 성남시 분당구 대왕판교로 670 유스페이스2 A동 6층",
    ceo: "김태주",
    contact: {
      name: "이승엽 프로",
      email: "tmdduqflfl@plantynet.com",
      phone: "010-3345-7392",
    },
  },
};
