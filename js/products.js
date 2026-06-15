window.AppData = {
  products: [
    {
      id: "officeguard",
      name: "OfficeGuard",
      label: "기본형",
      tagline: "비업무·유해 사이트 차단 솔루션",
      short:
        "업무망의 웹 트래픽을 실시간 분석해 비업무 사이트, 악성코드 유포지, 우회접속 프로그램을 차단합니다.",
      summary:
        "OfficeGuard는 사용자·그룹·IP·시간대별 정책으로 인터넷 사용을 관리하고, AI 기반 유해 DB와 운영자 검증 프로세스를 통해 업무 생산성과 내부 정보보호를 함께 높이는 네트워크 보안 솔루션입니다.",
      accent: "#2563eb",
      image: "./assets/06-screen-dashboard.png",
      highlights: [
        { value: "83개", label: "비업무 사이트 카테고리" },
        { value: "20억+", label: "일일 로그 분석" },
        { value: "Mirror", label: "무중단 미러 모드" },
      ],
      features: [
        "웹하드, 증권, 게임, SNS, P2P, 메신저 등 비업무 사이트 접속 차단",
        "악성코드 유포 사이트, 피싱, 우회접속 프로그램 탐지 및 차단",
        "사용자·그룹·IP·시간대별 허용/차단/예외 정책 관리",
        "대시보드, 트래픽 모니터링, 조건별 통계 보고서 제공",
      ],
      targets: "기업, 공공기관, 교육기관의 인터넷 사용 통제와 내부 정보보호",
    },
    {
      id: "officeguard-sv",
      name: "OfficeGuard SV",
      label: "가시성 강화",
      tagline: "SSL/TLS 스마트 가시성 SWG",
      short:
        "암호화된 HTTPS 트래픽을 보안 장비가 분석 가능한 형태로 가시화해 SSL 구간의 보안 공백을 줄입니다.",
      summary:
        "OfficeGuard SV는 SSL/TLS 암호화 트래픽을 고속으로 복호화·분류하고 IPS, DLP, SIEM 등 기존 보안 장비와 연동해 보이지 않던 위협을 분석할 수 있게 합니다.",
      accent: "#0d9488",
      image: "./assets/05-architecture.png",
      highlights: [
        { value: "SSL/TLS", label: "암호화 트래픽 가시화" },
        { value: "SWG", label: "Secure Web Gateway" },
        { value: "연동", label: "기존 보안장비 활용" },
      ],
      features: [
        "HTTPS 트래픽 복호화와 선택적 검사로 암호화 구간 위협 확인",
        "피싱 링크, C&C 통신, 악성 파일 다운로드 시도 가시화",
        "IPS, DLP, SIEM 등 기존 보안 체계와 연동",
        "교육·공공기관 환경에 맞춘 안정적인 웹 게이트웨이 구성",
      ],
      targets: "SSL 트래픽 비중이 높은 기관, 보안 장비 연동이 필요한 망 환경",
    },
    {
      id: "officeguard-plus",
      name: "OfficeGuard Plus",
      label: "통합형",
      tagline: "SSL 가시성 + 유해 콘텐츠 차단 통합 솔루션",
      short:
        "OfficeGuard의 유해 사이트 차단과 SV의 SSL 가시성을 하나로 결합한 통합형 보안 제품입니다.",
      summary:
        "OfficeGuard Plus는 암호화 트래픽 가시성, 유해 콘텐츠 차단, 인증서 배포·관리, REST API 연동을 통합해 제로 트러스트 환경의 웹 보안 기반을 제공합니다.",
      accent: "#7c3aed",
      image: "./assets/04-db-advantage.png",
      highlights: [
        { value: "통합", label: "SSL + 콘텐츠 차단" },
        { value: "CA", label: "인증서 배포·관리" },
        { value: "API", label: "REST 연동 지원" },
      ],
      features: [
        "SSL/TLS 트래픽 가시화와 AI 기반 유해 사이트 차단 통합",
        "인증서 배포, 유효성 검증, 사용자별 예외 정책 관리",
        "REST API 기반 타 보안 솔루션 및 관리 시스템 연동",
        "원격·하이브리드 근무 환경에서도 일관된 웹 보안 정책 적용",
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
