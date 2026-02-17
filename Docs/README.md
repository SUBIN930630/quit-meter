# 🔥 퇴사각 측정기

직장인 번아웃 자가진단 테스트 서비스

## 🚀 Quick Start

### 1. 프로젝트 클론 & 설치

```bash
# 저장소 클론
git clone https://github.com/your-username/resignation-test.git
cd resignation-test

# 패키지 설치
npm install
```

### 2. 환경변수 설정

```bash
# .env.local 파일 생성
cp .env.example .env.local
```

`.env.local` 파일을 열어서 아래 값들을 입력:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_KAKAO_JS_KEY=your_kakao_javascript_key
```

### 3. 로컬 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 열기

---

## 📦 Vercel 배포 가이드

### Step 1: GitHub에 푸시

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/resignation-test.git
git push -u origin main
```

### Step 2: Vercel 연결

1. [vercel.com](https://vercel.com) 접속 & 로그인
2. "Add New Project" 클릭
3. GitHub 저장소 선택
4. "Import" 클릭

### Step 3: 환경변수 설정

Vercel 프로젝트 설정에서 Environment Variables 추가:

| Key | Value |
|-----|-------|
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` |
| `NEXT_PUBLIC_KAKAO_JS_KEY` | `your_kakao_key` |

### Step 4: 배포

"Deploy" 클릭하면 자동 배포!

배포 후 URL: `https://your-project.vercel.app`

---

## 🔑 카카오 개발자 등록 가이드

### Step 1: 카카오 개발자 등록

1. [developers.kakao.com](https://developers.kakao.com) 접속
2. 로그인 후 "내 애플리케이션" 클릭
3. "애플리케이션 추가하기" 클릭
4. 앱 이름: `퇴사각 측정기` 입력
5. 저장

### Step 2: JavaScript 키 복사

1. 생성된 앱 클릭
2. "앱 키" 메뉴에서 **JavaScript 키** 복사
3. `.env.local`의 `NEXT_PUBLIC_KAKAO_JS_KEY`에 붙여넣기

### Step 3: 플랫폼 등록

1. "플랫폼" 메뉴 클릭
2. "Web 플랫폼 등록" 클릭
3. 사이트 도메인 추가:
   - 개발: `http://localhost:3000`
   - 배포: `https://your-project.vercel.app`

### Step 4: 카카오 로그인 활성화 (공유 기능용)

1. "카카오 로그인" 메뉴 클릭
2. 활성화 설정 ON
3. Redirect URI 추가: `https://your-project.vercel.app`

---

## 📊 Google Analytics 설정 가이드

### Step 1: GA4 속성 생성

1. [analytics.google.com](https://analytics.google.com) 접속
2. "관리" → "속성 만들기"
3. 속성 이름: `퇴사각 측정기`
4. 시간대: 대한민국
5. 웹 스트림 생성

### Step 2: 측정 ID 복사

1. 웹 스트림 클릭
2. **측정 ID** (G-XXXXXXXXXX 형식) 복사
3. `.env.local`의 `NEXT_PUBLIC_GA_ID`에 붙여넣기

### Step 3: 주요 이벤트 확인

자동으로 트래킹되는 이벤트:

| 이벤트 | 설명 |
|--------|------|
| `test_start` | 테스트 시작 |
| `question_answer` | 질문 응답 |
| `test_complete` | 테스트 완료 |
| `share` | 공유 클릭 |
| `retry` | 다시하기 클릭 |

### Step 4: 퍼널 보고서 만들기

1. "탐색" → "새 탐색 만들기"
2. 기법: "퍼널 탐색"
3. 단계 설정:
   - 단계 1: `test_start`
   - 단계 2: `test_complete`
   - 단계 3: `share`

---

## 💰 Google AdSense 연동 가이드

### Step 1: AdSense 신청

1. [adsense.google.com](https://adsense.google.com) 접속
2. "시작하기" 클릭
3. 사이트 URL 입력: `https://your-project.vercel.app`
4. 신청 제출

> ⚠️ 승인까지 1-2주 소요. 트래픽이 어느 정도 있어야 승인 확률 높음!

### Step 2: 광고 코드 삽입

승인 후 `src/app/layout.tsx`에 AdSense 코드 추가:

```tsx
// head 안에 추가
<Script
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
  strategy="afterInteractive"
  crossOrigin="anonymous"
/>
```

### Step 3: 광고 단위 생성

1. AdSense에서 "광고" → "광고 단위 기준"
2. "디스플레이 광고" 선택
3. 광고 단위 이름: `result-page-bottom`
4. 코드 복사

### Step 4: 결과 화면에 광고 삽입

`src/app/page.tsx`의 광고 영역 placeholder를 실제 광고로 교체:

```tsx
{/* 광고 영역 */}
<ins
  className="adsbygoogle"
  style={{ display: 'block' }}
  data-ad-client="ca-pub-XXXXXXXXXX"
  data-ad-slot="XXXXXXXXXX"
  data-ad-format="auto"
  data-full-width-responsive="true"
/>
<Script id="ads-init">
  {`(adsbygoogle = window.adsbygoogle || []).push({});`}
</Script>
```

---

## 🎨 OG 이미지 만들기

카카오톡/SNS 공유 시 보여지는 썸네일 이미지

### 권장 사이즈
- 1200 x 630px

### 만드는 방법
1. [Canva](https://canva.com)에서 "소셜 미디어" 템플릿 선택
2. 텍스트: "🔥 퇴사각 측정기 - 나 지금 버틸 만해...?"
3. PNG로 저장
4. `/public/og-image.png`에 저장

---

## 📁 프로젝트 구조

```
resignation-test/
├── src/
│   ├── app/
│   │   ├── globals.css      # 글로벌 스타일
│   │   ├── layout.tsx       # 루트 레이아웃 (GA, Kakao SDK)
│   │   └── page.tsx         # 메인 페이지 (테스트 로직)
│   ├── components/          # (필요시 컴포넌트 추가)
│   ├── data/
│   │   ├── questions.ts     # 질문 데이터
│   │   └── results.ts       # 결과 유형 데이터
│   └── lib/
│       ├── gtag.ts          # GA 이벤트 트래킹
│       └── kakao.ts         # 카카오 공유 유틸
├── public/
│   └── og-image.png         # OG 이미지 (직접 추가)
├── .env.example             # 환경변수 예시
├── .env.local               # 환경변수 (git 제외)
├── package.json
├── tailwind.config.ts
└── README.md
```

---

## ✅ 배포 전 체크리스트

- [ ] 카카오 개발자 등록 완료
- [ ] 카카오 플랫폼에 배포 도메인 등록
- [ ] Google Analytics 속성 생성
- [ ] `.env.local` 환경변수 설정
- [ ] Vercel 환경변수 설정
- [ ] OG 이미지 생성 (`/public/og-image.png`)
- [ ] `layout.tsx`의 OG URL 실제 도메인으로 변경

---

## 🚀 런칭 체크리스트

배포 후:

- [ ] 모바일에서 테스트 완료
- [ ] 카카오톡 공유 테스트
- [ ] GA 실시간 데이터 확인
- [ ] 블라인드/커뮤니티에 첫 시드 뿌리기

---

## 📈 성공 지표

| 지표 | 목표 |
|------|------|
| 완료율 (시작→결과) | 80%+ |
| 공유율 (결과→공유) | 15%+ |
| 바이럴 계수 | 1.5+ |

---

## 🛠 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **배포**: Vercel
- **분석**: Google Analytics 4
- **공유**: Kakao SDK
- **수익화**: Google AdSense

---

## 📝 라이선스

MIT License
