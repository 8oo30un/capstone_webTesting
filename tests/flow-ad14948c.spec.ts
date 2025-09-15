/**
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

const title = "Test for https://app.immerse.online/login";
const details = {
  annotation: [
    {
      type: "objective",
      description: `Enter the Email,kwh77974481@gmail.com, than enter the password: 2088sang**. Click on the log in and verify user lands on Dashboard home page`,
    },
  ],
};
test(title, details, async ({ page }) => {
  // Initializing web navigation.
  await page.goto("https://app.immerse.online/login", {
    waitUntil: "domcontentloaded",
    timeout: 30000,
  });

  // 페이지 로딩 대기
  await page.waitForTimeout(3000);
  // Entering the email address into the email input field as specified in the overall objective.
  await page.inputText({
    text: "kwh77974481@gmail.com",
    finalizeWithSubmit: false,
    selector: {
      element: [
        "#__next > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div:nth-of-type(1) > input",
        "[placeholder='Email']",
        "input.c-gtNREi",
        "div.c-iGVwqn > div:nth-of-type(2) > div:nth-of-type(1) > input",
        "div.c-gqwkJN > div > div:nth-of-type(2) > div:nth-of-type(1) > input",
        "div.c-ejwOqd > div > div > div:nth-of-type(2) > div:nth-of-type(1) > input",
        "body > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div:nth-of-type(1) > input",
      ],
      frame: null,
    },
  });
  // Entering the password into the password input field as specified in the overall objective.
  await page.inputText({
    text: "2088sang**",
    finalizeWithSubmit: false,
    selector: {
      element: [
        "#mantine-r1",
        "[data-testid='passwordinput']",
        "[placeholder='Password']",
        "input.mantine-13e8zn2",
        "div.mantine-PasswordInput-input > input",
        "div.mantine-Input-wrapper > div:nth-of-type(1) > input",
        "div.mantine-InputWrapper-root > div > div:nth-of-type(1) > input",
        "div.c-iGVwqn > div:nth-of-type(2) > div:nth-of-type(2) > div > div > div:nth-of-type(1) > input",
        "div.c-gqwkJN > div > div:nth-of-type(2) > div:nth-of-type(2) > div > div > div:nth-of-type(1) > input",
        "body > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div > div > div:nth-of-type(1) > input",
      ],
      frame: null,
    },
  });
  // Clicking the Login button to proceed with the login process.
  await page.clickElement({
    selector: {
      element: [
        "#__next > div:nth-of-type(1) > div > div > button",
        ".//button[normalize-space(.)='Login']",
        "button.c-dpWHaL",
        "div.c-iGVwqn > button",
        "div.c-gqwkJN > div > button",
        "div.c-ejwOqd > div > div > button",
        "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div > div > button",
        "body > div:nth-of-type(1) > div:nth-of-type(1) > div > div > button",
      ],
      frame: null,
    },
  });
  // Analyzing the page text to understand why the login failed and to identify any error messages.
  await page.analyzePageText({
    analysisToRun:
      "Are there any error messages on the page indicating why the login failed? If so, what are they?",
    additionalRelevantContext:
      "The previous action was to attempt to log in with the provided credentials.",
  });
});
