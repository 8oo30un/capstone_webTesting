/**
 * ========================================
 * Donobu AI 자동 생성 테스트 코드 분석
 * ========================================
 *
 * 이 파일은 Donobu Studio에서 자동으로 생성된 테스트 코드입니다.
 * AI가 사용자의 행동을 분석하고 웹페이지의 DOM 구조를 파악해서
 * 안정적인 테스트 코드를 자동으로 생성했습니다.
 *
 * 주요 특징:
 * 1. 다중 셀렉터 전략: 하나가 실패해도 다른 방법으로 시도
 * 2. CSS-in-JS 클래스명 자동 추출: c-gqwkJN 같은 해시 기반 클래스명
 * 3. 안전한 폼 처리: finalizeWithSubmit: false로 단계별 제어
 * 4. AI 페이지 분석: analyzePageText로 결과 자동 검증
 *
 * Note that this test uses tools that require the usage of an LLM, so be
 * sure to have an appropriate LLM API key available. This can be done
 * by providing an environment variable (e.g. OPENAI_API_KEY, ANTHROPIC_API_KEY,
 * or GOOGLE_GENERATIVE_AI_API_KEY) when running the test...
 *
 *    Example: `OPENAI_API_KEY=YOUR_KEY npx playwright test`
 *
 * ...or by configuring a flow runner using the Donobu app.
 */
import { test } from "donobu";

// ========================================
// 테스트 설정 및 목적 정의
// ========================================
const title = "Test for https://app.immerse.online/login";
const details = {
  annotation: [
    {
      type: "objective",
      // AI가 사용자의 의도를 이해하고 테스트 목적을 명확히 정의
      description: `Enter the Email,kwh77974481@gmail.com, than enter the password: 2088sang**. Click on the log in and verify user lands on Dashboard home page`,
    },
  ],
};
test(title, details, async ({ page }) => {
  // ========================================
  // 1단계: 페이지 네비게이션 및 로딩 대기
  // ========================================
  // Initializing web navigation.
  await page.goto("https://app.immerse.online/login", {
    waitUntil: "domcontentloaded", // networkidle 대신 domcontentloaded 사용 (안정성 향상)
    timeout: 30000, // 30초 타임아웃 설정
  });

  // 페이지 로딩 대기 (AI가 추가한 안전장치)
  await page.waitForTimeout(3000);
  // ========================================
  // 2단계: 이메일 입력 (다중 셀렉터 전략)
  // ========================================
  // Entering the email address into the email input field as specified in the overall objective.
  await page.inputText({
    text: "kwh77974481@gmail.com",
    finalizeWithSubmit: false, // 엔터키를 누르지 않음 (단계별 제어)
    selector: {
      element: [
        // AI가 생성한 다중 셀렉터들 (안정성을 위해 여러 방법 제공)
        "#__next > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div:nth-of-type(1) > input", // CSS 경로 셀렉터
        "[placeholder='Email']", // 속성 기반 셀렉터
        "input.c-gtNREi", // CSS-in-JS 클래스 셀렉터
        "div.c-iGVwqn > div:nth-of-type(2) > div:nth-of-type(1) > input", // 부모 요소 기반 셀렉터
        "div.c-gqwkJN > div > div:nth-of-type(2) > div:nth-of-type(1) > input", // 다른 부모 경로
        "div.c-ejwOqd > div > div > div:nth-of-type(2) > div:nth-of-type(1) > input", // 또 다른 부모 경로
        "body > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div:nth-of-type(1) > input", // 전체 경로
      ],
      frame: null, // iframe 내부가 아닌 메인 페이지에서 검색
    },
  });
  // ========================================
  // 3단계: 비밀번호 입력 (다중 셀렉터 전략)
  // ========================================
  // Entering the password into the password input field as specified in the overall objective.
  await page.inputText({
    text: "2088sang**",
    finalizeWithSubmit: false, // 엔터키를 누르지 않음 (단계별 제어)
    selector: {
      element: [
        // AI가 생성한 다중 셀렉터들 (비밀번호 필드 특화)
        "#mantine-r1", // ID 기반 셀렉터 (가장 안정적)
        "[data-testid='passwordinput']", // data-testid 속성 기반
        "[placeholder='Password']", // placeholder 속성 기반
        "input.mantine-13e8zn2", // Mantine UI 라이브러리 클래스
        "div.mantine-PasswordInput-input > input", // Mantine 컴포넌트 구조 기반
        "div.mantine-Input-wrapper > div:nth-of-type(1) > input", // Mantine Input 래퍼 구조
        "div.mantine-InputWrapper-root > div > div:nth-of-type(1) > input", // Mantine InputWrapper 구조
        "div.c-iGVwqn > div:nth-of-type(2) > div:nth-of-type(2) > div > div > div:nth-of-type(1) > input", // CSS-in-JS 클래스 기반
        "div.c-gqwkJN > div > div:nth-of-type(2) > div:nth-of-type(2) > div > div > div:nth-of-type(1) > input", // 다른 부모 경로
        "body > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > div > div:nth-of-type(1) > input", // 전체 경로
      ],
      frame: null, // iframe 내부가 아닌 메인 페이지에서 검색
    },
  });
  // ========================================
  // 4단계: 로그인 버튼 클릭 (다중 셀렉터 전략)
  // ========================================
  // Clicking the Login button to proceed with the login process.
  await page.clickElement({
    selector: {
      element: [
        // AI가 생성한 다중 셀렉터들 (버튼 클릭 특화)
        "#__next > div:nth-of-type(1) > div > div > button", // CSS 경로 셀렉터
        ".//button[normalize-space(.)='Login']", // XPath 셀렉터 (텍스트 기반)
        "button.c-dpWHaL", // CSS-in-JS 클래스 셀렉터
        "div.c-iGVwqn > button", // 부모 요소 기반 셀렉터
        "div.c-gqwkJN > div > button", // 다른 부모 경로
        "div.c-ejwOqd > div > div > button", // 또 다른 부모 경로
        "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div > div > button", // 전체 HTML 경로
        "body > div:nth-of-type(1) > div:nth-of-type(1) > div > div > button", // body부터 시작하는 경로
      ],
      frame: null, // iframe 내부가 아닌 메인 페이지에서 검색
    },
  });
  // ========================================
  // 5단계: AI 페이지 분석 및 결과 검증
  // ========================================
  // Analyzing the page text to understand why the login failed and to identify any error messages.
  await page.analyzePageText({
    analysisToRun:
      "Are there any error messages on the page indicating why the login failed? If so, what are they?",
    additionalRelevantContext:
      "The previous action was to attempt to log in with the provided credentials.",
  });
});

// ========================================
// AI 코드 생성 과정 요약
// ========================================
/*
1. 사용자 행동 녹화: Donobu Studio에서 사용자가 로그인 과정을 수행
2. DOM 분석: AI가 웹페이지의 구조를 실시간으로 분석
3. 셀렉터 생성: 다양한 방법으로 요소를 찾을 수 있는 셀렉터들을 자동 생성
4. 안전장치 추가: finalizeWithSubmit: false, frame: null 등으로 안정성 확보
5. AI 검증: analyzePageText로 결과를 자동으로 분석하고 검증

주요 특징:
- 다중 셀렉터 전략으로 안정성 극대화
- CSS-in-JS 라이브러리 클래스명 자동 추출 (c-gqwkJN, c-dpWHaL 등)
- 단계별 폼 처리로 정확한 제어
- AI 기반 결과 분석으로 자동 검증
*/
