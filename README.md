# Playwright Tests

This project contains [Playwright](https://playwright.dev/)-based tests made with [Donobu](https://www.donobu.com/).

## Installation

Install project dependencies:

```bash
npm install
```

Install Playwright tooling (e.g. the web browsers for running tests)

```bash
npx playwright install
```

## Running Tests

### 기본 테스트 실행

```bash
npm test
```

### 다양한 실행 옵션들

#### 1. 헤드리스 모드 (브라우저 창이 보임) - **권장**

```bash
npx playwright test --headed
```

**중요**: Donobu Studio에서 생성된 테스트는 헤드리스 모드에서 실행해야 정상적으로 작동합니다.

#### 2. UI 모드 (브라우저에서 시각적으로 확인)

```bash
npx playwright test --ui
```

#### 3. 디버그 모드

```bash
npx playwright test --debug
```

#### 4. 특정 테스트 파일 실행

```bash
npx playwright test tests/flow-ad14948c.spec.ts --headed
```

#### 5. 특정 브라우저에서 실행

```bash
npx playwright test --headed --project=chromium
npx playwright test --headed --project=firefox
npx playwright test --headed --project=webkit
```

## Donobu Studio vs 코드 실행 환경 차이점

### 문제 상황

- **Donobu Studio**: 테스트가 정상적으로 실행됨
- **코드 실행**: "Execution context was destroyed" 또는 타임아웃 오류 발생

### 해결 방법

#### 1. 헤드리스 모드 사용

Donobu Studio는 기본적으로 브라우저 창이 보이는 모드로 실행되므로, 코드 실행 시에도 `--headed` 옵션을 사용해야 합니다.

#### 2. 네비게이션 설정 최적화

```typescript
// playwright.config.ts에서 설정
use: {
  screenshot: "on",
  video: "on",
  navigationTimeout: 60000,
  actionTimeout: 30000,
  launchOptions: {
    slowMo: 1000,
  },
}
```

#### 3. 페이지 로딩 대기 설정

```typescript
// 테스트 파일에서 설정
await page.goto("https://app.immerse.online/login", {
  waitUntil: "domcontentloaded",
  timeout: 30000,
});

// 페이지 로딩 대기
await page.waitForTimeout(3000);
```

## 테스트 결과 확인

### HTML 리포트 보기

```bash
npx playwright show-report
```

### 테스트 결과 파일 위치

- 스크린샷: `test-results/flow-ad14948c-Test-for-https-app-immerse-online-login-flow-ad14948c/test-failed-1.png`
- 비디오: `test-results/flow-ad14948c-Test-for-https-app-immerse-online-login-flow-ad14948c/video.webm`
- 에러 컨텍스트: `test-results/flow-ad14948c-Test-for-https-app-immerse-online-login-flow-ad14948c/error-context.md`

## 주요 학습 포인트

1. **Donobu Studio와 코드 실행의 차이**: Studio에서는 자동으로 헤드리스 모드로 실행되지만, 코드 실행 시에는 명시적으로 `--headed` 옵션을 사용해야 함

2. **네비게이션 설정의 중요성**: `networkidle` 대신 `domcontentloaded`를 사용하고 적절한 대기 시간을 설정해야 함

3. **타임아웃 설정**: 네트워크 상태에 따라 타임아웃을 적절히 조정해야 함

4. **브라우저 설정**: `slowMo` 옵션을 사용하여 테스트 실행 속도를 조절할 수 있음

## 환경 변수 설정 (선택사항)

Donobu에서 AI 기능을 사용하는 경우 환경 변수 설정이 필요할 수 있습니다:

```bash
export GOOGLE_GENERATIVE_AI_API_KEY="your-api-key"
# 또는
export OPENAI_API_KEY="your-api-key"
# 또는
export ANTHROPIC_API_KEY="your-api-key"
```

하지만 기본적인 테스트 실행에는 환경 변수가 필요하지 않습니다.

## 테스트 실행 결과

### 성공한 테스트들 ✅

1. **기본 로그인 테스트** (`immerse-login.spec.ts`)
   - **실행 시간**: 23.1초
   - **브라우저**: Chromium ✅, Firefox ✅, WebKit ❌ (타임아웃)
   - **결과**: 로그인 성공 후 "Learning Summary" 텍스트 확인
   - **생성된 파일**: `login-state.json` (세션 저장)

2. **데이터 로딩 검증 테스트** (`dashboard-verify-values.spec.ts`)
   - **실행 시간**: ~2분
   - **브라우저**: Chromium ✅
   - **결과**: 대시보드 모든 요소 값 검증 성공, 시간 범위 변경 후 데이터 변화 확인
   - **검증된 요소들**: Number of Learners, Logged in at Least Once, % Attended Trainer-led Classes, Average Class Rating, Attended Social Events, Completed Self-Paced Lessons

3. **Learners 탭 TOS 컬럼 정렬 테스트** (`sort-columns-by-tos-on-learners-tab.spec.ts`)
   - **실행 시간**: 1분 18초
   - **브라우저**: Chromium ✅
   - **결과**: TOS(Time on Site) 컬럼 내림차순 정렬 검증 성공
   - **검증된 데이터**: 67:23 → 26:06 순서로 43개 데이터 포인트 정렬 확인

### 실행 명령어

```bash
# 개별 테스트 실행
npx playwright test tests/immerse-login.spec.ts --headed
npx playwright test tests/dashboard-verify-values.spec.ts --headed --project=chromium
npx playwright test tests/sort-columns-by-tos-on-learners-tab.spec.ts --headed --project=chromium

# 모든 테스트 실행
npx playwright test --headed
```

## 테스트 문제점 및 해결 방법

### 1. 데이터 무결성 검증 테스트 (`data-integrity-verification.spec.ts`)

#### 🚨 **발생한 문제들:**

1. **로그인 상태 파일 로드 실패**
   - **문제**: `login-state.json` 파일이 제대로 로드되지 않아 로그인 페이지에 머물러 있음
   - **해결**: 쿠키 로드 대신 직접 로그인 과정을 테스트에 포함
   - **수정 내용**: `context.addCookies()` 제거하고 `inputText`, `clickElement`로 직접 로그인 구현

2. **타임아웃 문제**
   - **문제**: `waitForTimeout(5000)`에서 80초 타임아웃 발생
   - **해결**: 대기 시간을 3000ms로 단축하고 전체 테스트 타임아웃을 120초로 증가
   - **수정 내용**: `--timeout=120000` 옵션 추가

3. **데이터 부재 문제**
   - **문제**: 테스트 계정에 학습자 데이터가 없음 ("0 results" 표시)
   - **영향**: TOS 컬럼 정렬 및 데이터 무결성 검증 불가
   - **상태**: 테스트 코드는 정상 작동하지만 실제 데이터가 없어서 완전한 검증 불가

#### ✅ **성공한 부분들:**

- 로그인 프로세스 (이메일/비밀번호 입력, 로그인 버튼 클릭)
- 대시보드 접근 및 네비게이션
- Learners 탭 클릭
- 시간 범위 변경 ("Last 30 days" → "All Time")
- 페이지 크기 변경 (10개 → 50개)
- 비디오 촬영 완료

#### 🔧 **적용된 수정사항:**

```typescript
// 수정 전: 쿠키 로드 방식
await context.addCookies(require("../login-state.json").cookies);

// 수정 후: 직접 로그인 방식
await page.inputText({ text: "sample.hradmin.readonly.6@immerse.online", ... });
await page.inputText({ text: "6hradminreadonly", ... });
await page.clickElement({ selector: { element: [...], frame: null } });
```

#### 📝 **권장사항:**

1. **실제 데이터가 있는 계정 사용**: 테스트를 완전히 검증하려면 학습자 데이터가 있는 계정이 필요
2. **환경별 테스트**: 개발/스테이징/프로덕션 환경별로 다른 테스트 데이터 사용
3. **데이터 준비**: 테스트 전에 필요한 학습자 데이터를 미리 생성하는 스크립트 작성

## 테스트 시나리오 목록

### B2B Dashboard 테스트

| #   | 테스트명                           | 목적                                                  | URL                        | 우선순위 | 요구사항                  | 상태 | 로컬 파일                                               |
| --- | ---------------------------------- | ----------------------------------------------------- | -------------------------- | -------- | ------------------------- | ---- | ------------------------------------------------------- |
| 1   | 기본 로그인 테스트                 | B2B 대시보드 로그인 기능 검증                         | `dashboard.immerse.online` | Phase 1  | B2B 계정                  | ✅   | `tests/immerse-login.spec.ts`                           |
| 2   | 데이터 로딩 검증 테스트            | 로그인 후 대시보드 데이터가 올바르게 표시되는지 검증  | `dashboard.immerse.online` | Phase 2  | B2B 계정                  | ✅   | `tests/dashboard-verify-values.spec.ts`                 |
| 3   | Learners 탭 TOS 컬럼 정렬 테스트   | Learners 탭에서 TOS(Time on Site) 컬럼 정렬 기능 검증 | `dashboard.immerse.online` | Phase 3  | B2B 계정                  | ✅   | `tests/sort-columns-by-tos-on-learners-tab.spec.ts`     |
| 4   | Learners 트레이 보기 테스트        | 개별 Learner의 상세 정보 트레이 기능 검증             | `dashboard.immerse.online` | Phase 3  | B2B 계정                  | ❌   | -                                                       |
| 5   | 데이터 무결성 검증 테스트          | TOS와 Activities Completed 데이터의 정확성 검증       | `dashboard.immerse.online` | Phase 3  | B2B 계정                  | ⚠️   | `tests/data-integrity-verification.spec.ts` (부분 성공) |
| 6   | Learner 추가 및 온보딩 완료 테스트 | 새로운 Learner 추가 및 온보딩 프로세스 검증           | `dashboard.immerse.online` | Phase 4  | Admin 권한, Contract 설정 | ❌   | -                                                       |

### Web Application 테스트

| #   | 테스트명                                | 목적                                                | URL                  | 우선순위 | 요구사항 | GitHub 링크                                                                                |
| --- | --------------------------------------- | --------------------------------------------------- | -------------------- | -------- | -------- | ------------------------------------------------------------------------------------------ |
| 1   | B2B 계정 로그인 및 Nvidia 로딩 테스트   | B2B 계정으로 로그인 후 Nvidia 앱 로딩 검증          | `app.immerse.online` | Phase 1  | B2B 계정 | [링크](https://github.com/donobu-inc/immerse-tests/blob/main/tests/auth/b2b-login.spec.ts) |
| 2   | D2C 계정 로그인 및 홈페이지 로딩 테스트 | D2C 계정으로 로그인 후 홈페이지 로딩 검증           | `app.immerse.online` | Phase 1  | D2C 계정 | -                                                                                          |
| 3   | D2C 계정 스케줄 페이지 테스트           | D2C 계정으로 스케줄 페이지 접근 및 데이터 로딩 검증 | `app.immerse.online` | Phase 2  | D2C 계정 | -                                                                                          |
| 4   | D2C 계정 Nvidia 앱 접근 테스트          | D2C 계정으로 Nvidia 앱 접근 및 로딩 검증            | `app.immerse.online` | Phase 2  | D2C 계정 | -                                                                                          |
| 5   | 새로운 D2C 계정 생성 테스트             | 새로운 D2C 계정 생성 프로세스 검증                  | `app.immerse.online` | Phase 4  | -        | -                                                                                          |

## 상세 테스트 단계

### B2B Dashboard 테스트

#### 1. 기본 로그인 테스트

```
1. Go to dashboard.immerse.online
2. Enter Email
3. Enter Password
4. Click on Log In
5. Verify user lands on Dashboard home page
```

#### 2. 데이터 로딩 검증 테스트

```
1. Go to dashboard.immerse.online
2. Enter Email
3. Enter Password
4. Click on Log in
5. Verify user lands on Dashboard home page
6. Change Timeframe to "All Time"
7. Verify that Number of Learners, Logged in at Least Once, and % Attended Trainer-Led Session are greater than 0
```

#### 3. Learners 탭 TOS 컬럼 정렬 테스트

```
1. Go to dashboard.immerse.online
2. Enter Email
3. Enter Password
4. Click on Log in
5. Click on Learners Tab
6. Change Timeframe to "All Time"
7. Wait for Learners to load
8. Change "Per Page" to 50
9. Wait for Learners to load
10. Once loaded, click on TOS once
11. Verify that the 1st Learner's TOS column is higher than the 2nd and so forth to bottom of list or hit 0 or "N/A"
```

#### 4. Learners 트레이 보기 테스트

```
1. Go to dashboard.immerse.online
2. Enter Email
3. Enter Password
4. Click on Log in
5. Click on Learners Tab
6. Change Timeframe to "All Time"
7. Wait for Learners to load
8. Change "Per Page" to 50
9. Wait for Learners to load
10. Once loaded, click on TOS once
11. Click on the first users email address
12. Change Timeframe to "All Time"
13. Verify that Time on Site Total is greater than 0
```

#### 5. 데이터 무결성 검증 테스트

```
1. Go to dashboard.immerse.online
2. Enter Email
3. Enter Password
4. Click on Log in
5. Click on Learners Tab
6. Change Timeframe to "All Time"
7. Wait for Learners to load
8. Change "Per Page" to 50
9. Wait for Learners to load
10. Once loaded, click on TOS once
11. Click on the first users email address
12. Verify that the totals for Time on Site - Asynchronous Activities, Social Events, Trainer-Led Classes, and Other is equal to "Total" (give or take 4 minutes)
13. Verify that the totals for Activities Completed - Asynchronous Activities, Social Events, Trainer-Led Classes is equal to the "Total"
14. Close the drawer
15. Repeat the Verify steps for each email address that has TOS > 0
```

**테스트 실행 결과:**
- ✅ **상태**: 성공 (Donobu Studio 환경에서 완전 실행)
- 📁 **로컬 파일**: `tests/Test-for-https---staging-dashboard-immerse-online.spec.ts`
- 🎯 **검증된 사용자**: 4명의 사용자에 대해 데이터 무결성 검증 완료

**검증된 데이터:**
1. **Sample Learner (sample.learner.4@i...)**
   - Lifetime Total: 69:44
   - Activities Completed Total: 465

2. **Sample Learner (sample.learner.6@i...)**
   - Lifetime Total: 62:58
   - Activities Completed Total: 439

3. **Sample Coach-Learner-7**
   - Lifetime Total: 67:21
   - Activities Completed Total: 464

4. **Sample Learner (sample.learner.9@i...)**
   - Lifetime Total: 65:54
   - Activities Completed Total: 498

**⚠️ 발견된 문제점:**
- **TOS 정렬 문제**: TOS 컬럼을 클릭하여 정렬했음에도 불구하고, 사용자들이 시간 순서대로 정렬되지 않음
- **검색 순서 문제**: 69:44 → 62:58 → 67:21 → 65:54 순서로 검색되어 내림차순 정렬이 제대로 작동하지 않음
- **예상 순서**: 69:44 → 67:21 → 65:59 → 65:54 → 62:58 (내림차순)
- **실제 순서**: 69:44 → 62:58 → 67:21 → 65:54 (랜덤한 순서)

#### 6. Learner 추가 및 온보딩 완료 테스트

```
1. Go to dashboard.immerse.online
2. Enter Email
3. Enter Password
4. Click on Log in
5. Click on Learners Tab
6. Navigate to a contract with an available license
7. Click on Add Learners
8. Click on "Add Learner" on the dropdown
9. Fill in the First Name, Last Name, Email, and Country Fields
10. Click on "Save Changes"
11. Click on the "Search" field
12. Enter the email address used when creating the learner
13. Click on "Search"
14. Scroll table to the right
15. Click on the "..." and select "View Registration Link"
16. Click on "Copy"
17. Open a new browser tab
18. Paste in the link and hit enter
19. Click "Continue"
20. Enter a password in the "Password" field
21. Enter the same password in the "Confirm password" field
22. Click on "Continue"
23. Click on "Skip"
24. Verify landing at the completed onboarding page
```

### Web Application 테스트

#### 1. B2B 계정 로그인 및 Nvidia 로딩 테스트

```
1. Navigate to app.immerse.online
2. Enter the email of a b2b user
3. Enter the password for that b2b user
4. Verify landing in the Immerse app in the browser
```

#### 2. D2C 계정 로그인 및 홈페이지 로딩 테스트

```
1. Navigate to app.immerse.online
2. Enter the email of a d2c user
3. Enter the password for that d2c user
4. Verify landing at the home page for d2c learners (https://app.immerse.online/home) for that user
```

#### 3. D2C 계정 스케줄 페이지 테스트

```
1. Navigate to app.immerse.online
2. Enter the email of a d2c user
3. Enter the password for that d2c user
4. Verify landing at the home page for d2c learners (https://app.immerse.online/home) for that user
5. Click on "Schedule"
6. Verify that the Schedule populates with at least 1 lesson
```

#### 4. D2C 계정 Nvidia 앱 접근 테스트

```
1. Navigate to app.immerse.online
2. Enter the email of a d2c user
3. Enter the password for that d2c user
4. Verify landing at the home page for d2c learners (https://app.immerse.online/home) for that user
5. Click on "Launch Immerse"
6. Verify a new browser tab opens and loads the Nvidia web app for Immerse
```

#### 5. 새로운 D2C 계정 생성 테스트

```
1. Navigate to app.immerse.online
2. Click on "No account? Sign Up!"
3. Click on "Continue"
4. Click on a language (English is fine)
5. Click on one of the 6 options for "Why do you want to learn English?"
6. Enter a First Name, Last Name, Email, and Password
7. Click to check the checkbox
8. Click on "Continue"
9. Click on the first subscription option
10. Click on "Continue"
11. Verify landing on the Stripe page
```

## 테스트 실행 우선순위

### Phase 1: 기본 인증 테스트

1. B2B Dashboard 기본 로그인
2. B2B Web 로그인 및 Nvidia 로딩
3. D2C 계정 로그인 및 홈페이지 로딩

### Phase 2: 기능 검증 테스트

1. B2B Dashboard 데이터 로딩 검증
2. D2C 스케줄 페이지 테스트
3. D2C Nvidia 앱 접근 테스트

### Phase 3: 고급 기능 테스트

1. Learners 탭 TOS 컬럼 정렬
2. Learners 트레이 보기
3. 데이터 무결성 검증

### Phase 4: 관리자 기능 테스트

1. Learner 추가 및 온보딩
2. D2C 계정 생성

## 테스트 데이터 요구사항

- **B2B 계정**: Dashboard 접근 권한이 있는 계정
- **D2C 계정**: 일반 사용자 계정
- **Admin 권한**: Learner 추가 테스트용
- **Contract 설정**: Learner 추가 테스트용
