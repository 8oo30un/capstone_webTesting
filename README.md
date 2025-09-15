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
