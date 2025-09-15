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

## 테스트 시나리오 목록

### B2B Dashboard 테스트

| #   | 테스트명                           | 목적                                                  | URL                        | 우선순위 | 요구사항                  | GitHub 링크                                                                                                                         |
| --- | ---------------------------------- | ----------------------------------------------------- | -------------------------- | -------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 1   | 기본 로그인 테스트                 | B2B 대시보드 로그인 기능 검증                         | `dashboard.immerse.online` | Phase 1  | B2B 계정                  | [링크](https://github.com/donobu-inc/immerse-tests/blob/main/tests/auth/dashboard-login.spec.ts)                                    |
| 2   | 데이터 로딩 검증 테스트            | 로그인 후 대시보드 데이터가 올바르게 표시되는지 검증  | `dashboard.immerse.online` | Phase 2  | B2B 계정                  | [링크](https://github.com/donobu-inc/immerse-tests/blob/main/tests/logged-in/dashboard/dashboard-values.spec.ts)                    |
| 3   | Learners 탭 TOS 컬럼 정렬 테스트   | Learners 탭에서 TOS(Time on Site) 컬럼 정렬 기능 검증 | `dashboard.immerse.online` | Phase 3  | B2B 계정                  | [링크](https://github.com/donobu-inc/immerse-tests/blob/main/tests/logged-in/dashboard/sort-columns-by-tos-on-learners-tab.spec.ts) |
| 4   | Learners 트레이 보기 테스트        | 개별 Learner의 상세 정보 트레이 기능 검증             | `dashboard.immerse.online` | Phase 3  | B2B 계정                  | [링크](https://github.com/donobu-inc/immerse-tests/blob/main/tests/logged-in/dashboard/view-learners-tray.spec.ts)                  |
| 5   | 데이터 무결성 검증 테스트          | TOS와 Activities Completed 데이터의 정확성 검증       | `dashboard.immerse.online` | Phase 3  | B2B 계정                  | -                                                                                                                                   |
| 6   | Learner 추가 및 온보딩 완료 테스트 | 새로운 Learner 추가 및 온보딩 프로세스 검증           | `dashboard.immerse.online` | Phase 4  | Admin 권한, Contract 설정 | -                                                                                                                                   |

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
