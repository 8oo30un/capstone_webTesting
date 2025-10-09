# 🔐 환경 설정 가이드 (Environment Setup Guide)

## ⚠️ 중요: 회사 레포에서 테스트가 실행되지 않는 이유

이 프로젝트는 **2가지 중요한 파일**이 필요합니다:

### 1️⃣ **AI API 키** (필수)
Donobu의 Self-Healing 기능을 위해 AI API 키가 필요합니다.

### 2️⃣ **로그인 세션 파일** (중요)
`login-state.json` - 이 파일은 자동 로그인을 위한 세션 정보를 포함합니다.

---

## 📋 설정 방법

### Step 1: 환경 변수 파일 생성

```bash
# .env.example을 복사하여 .env 파일 생성
cp .env.example .env
```

### Step 2: .env 파일 수정

```bash
# .env 파일을 열어서 실제 API 키 입력
# 아래 중 하나를 선택:

# Option 1: Google Gemini (권장)
GOOGLE_GENERATIVE_AI_API_KEY=실제_API_키_입력
GOOGLE_GENERATIVE_AI_MODEL_NAME=gemini-2.5-flash

# Option 2: OpenAI
OPENAI_API_KEY=실제_API_키_입력

# Option 3: Anthropic
ANTHROPIC_API_KEY=실제_API_키_입력

# Self-Healing 활성화
SELF_HEAL_TESTS_ENABLED=true
```

### Step 3: 로그인 세션 생성

**방법 1: Donobu Studio 사용 (권장)**
1. Donobu Studio 앱 실행
2. 프로젝트 폴더 열기
3. 테스트 실행 → `login-state.json` 자동 생성됨

**방법 2: 수동 테스트 실행**
```bash
# 처음 실행하면 login-state.json이 자동 생성됩니다
npx playwright test --headed
```

---

## 🚀 실행 명령어

### 로컬 환경에서 실행
```bash
# 환경 변수와 함께 실행
npx playwright test --headed --project="Test-for-https---staging-dashboard-immerse-online"
```

### GitHub Actions에서 실행
환경 변수는 GitHub Secrets에 저장되어 있어야 합니다:
- `GOOGLE_GENERATIVE_AI_API_KEY`

---

## 📁 중요 파일 정리

| 파일 | 용도 | Git 추적 | 비고 |
|------|------|----------|------|
| `.env` | AI API 키 저장 | ❌ (gitignore) | 개인별로 생성 필요 |
| `.env.example` | 환경 변수 템플릿 | ✅ | 공유용 샘플 |
| `login-state.json` | 로그인 세션 정보 | ❌ (gitignore) | 자동 생성됨 |
| `playwright.config.ts` | Playwright 설정 | ✅ | 공유됨 |
| `.github/workflows/run-tests.yml` | CI/CD 설정 | ✅ | GitHub Secrets 사용 |

---

## 🔍 문제 해결

### Q: "donobu not found" 에러
**A:** `npm install` 후 `npx playwright test` 사용

### Q: 페이지가 자꾸 닫힘
**A:** `login-state.json` 파일이 오래되었을 수 있음. 삭제 후 재생성:
```bash
rm login-state.json
npx playwright test --headed
```

### Q: AI 분석이 작동하지 않음
**A:** `.env` 파일에 올바른 API 키가 설정되었는지 확인:
```bash
cat .env
```

### Q: 회사 레포에서 실행 안 됨
**A:** 다음을 확인하세요:
1. ✅ `npm install` 실행했는지
2. ✅ `.env` 파일 생성했는지 (API 키 포함)
3. ✅ `login-state.json` 파일이 있는지

---

## 🎯 Quick Start (회사 레포 클론 후)

```bash
# 1. 의존성 설치
npm install
npx playwright install

# 2. 환경 변수 설정
cp .env.example .env
# .env 파일 열어서 API 키 입력

# 3. 테스트 실행 (login-state.json 자동 생성)
npx playwright test --headed --project="Test-for-https---staging-dashboard-immerse-online"
```

---

## 📧 문의
환경 설정에 문제가 있으면 프로젝트 관리자에게 문의하세요.
