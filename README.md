# OfficeGuard 소개 사이트

제품소개서(PDF) 기반으로 구성한 고객 시연용 정적 웹사이트입니다.

## 로컬 실행

브라우저에서 `index.html`을 직접 열어도 되고, 간단한 서버로 실행해도 됩니다.

PowerShell 예시:

```powershell
python -m http.server 5500
```

이후 `http://localhost:5500` 접속

## Vercel 무료 배포

이 프로젝트는 정적 사이트라 무료 플랜에서 바로 배포할 수 있습니다.

1. GitHub에 이 폴더를 push
2. [Vercel](https://vercel.com) 로그인
3. `Add New... > Project`에서 해당 GitHub 저장소 선택
4. Framework Preset은 `Other` 또는 `Static`
5. Build Command 비우기, Output Directory 비우기(루트 정적 파일 사용)
6. `Deploy` 클릭

배포 완료 후 생성된 URL을 고객에게 바로 공유하면 됩니다.
