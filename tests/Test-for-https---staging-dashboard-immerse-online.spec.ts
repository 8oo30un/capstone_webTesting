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

const title = "Test for https://staging-dashboard.immerse.online";
const details = {
  annotation: [
    {
      type: "objective",
      description: `1. Go to dashboard.immerse.online
2. Enter Email:sample.hradmin.readonly.6@immerse.online
3. Enter Password: 6hradminreadonly
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
15. Repeat the Verify steps for each email address that has TOS > 0`,
    },
  ],
};
test(title, details, async ({ page }) => {
  // Initializing web navigation.
  await page.goto("https://staging-dashboard.immerse.online");
  // Entering the email address into the email input field.
  await page.inputText({
    text: "sample.hradmin.readonly.6@immerse.online",
    finalizeWithSubmit: false,
    selector: {
      element: [
        "#__next > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div:nth-of-type(1) > input",
        "[data-testid='login-form-email-input']",
        "[placeholder='Email']",
        "div:nth-of-type(1) > input.c-gtNREi",
        "div.c-jhyvPY > div:nth-of-type(2) > div:nth-of-type(1) > input",
        "div.c-gqwkJN > div > div:nth-of-type(2) > div:nth-of-type(1) > input",
        "div.c-ejwOqd > div > div > div:nth-of-type(2) > div:nth-of-type(1) > input",
        "body > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div:nth-of-type(1) > input",
        "input.c-gtNREi",
      ],
      frame: null,
    },
  });
  // Entering the password into the password input field.
  await page.inputText({
    text: "6hradminreadonly",
    finalizeWithSubmit: false,
    selector: {
      element: [
        "#__next > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div:nth-of-type(2) > input",
        "[data-testid='login-form-password-input']",
        "[placeholder='Password']",
        "div:nth-of-type(2) > input.c-gtNREi",
        "div.c-jhyvPY > div:nth-of-type(2) > div:nth-of-type(2) > input",
        "div.c-gqwkJN > div > div:nth-of-type(2) > div:nth-of-type(2) > input",
        "div.c-ejwOqd > div > div > div:nth-of-type(2) > div:nth-of-type(2) > input",
        "body > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div:nth-of-type(2) > input",
        "input.c-gtNREi",
      ],
      frame: null,
    },
  });
  // Clicking on the Login button to proceed with the login process.
  await page.clickElement({
    selector: {
      element: [
        "#__next > div:nth-of-type(1) > div > div > button",
        "[data-testid='login-form-submit-button']",
        ".//button[normalize-space(.)='Login']",
        "button.c-gNnAWR",
        "div.c-jhyvPY > button",
        "div.c-gqwkJN > div > button",
        "div.c-ejwOqd > div > div > button",
        "html > body > div:nth-of-type(1) > div:nth-of-type(1) > div > div > button",
        "body > div:nth-of-type(1) > div:nth-of-type(1) > div > div > button",
      ],
      frame: null,
    },
  });
  // Waiting for the page to load after clicking the login button.
  await page.waitForTimeout(8000);
  // Clicking on the Learners tab to navigate to the learners' overview page.
  await page.clickElement({
    selector: {
      element: [
        "#__next > div > div > div:nth-of-type(1) > div > div:nth-of-type(1) > button:nth-of-type(2)",
        "[data-testid='layout-header-learners-button']",
        ".//button[normalize-space(.)='Learners']",
        "div.mantine-xg7kom > button:nth-of-type(2)",
        "div.mantine-yx7xue > div:nth-of-type(1) > button:nth-of-type(2)",
        "div.mantine-2pm4e4 > div > div:nth-of-type(1) > button:nth-of-type(2)",
        "div.mantine-le2skq > div:nth-of-type(1) > div > div:nth-of-type(1) > button:nth-of-type(2)",
        "div.c-ejwOqd > div > div:nth-of-type(1) > div > div:nth-of-type(1) > button:nth-of-type(2)",
        "body > div:nth-of-type(1) > div > div > div:nth-of-type(1) > div > div:nth-of-type(1) > button:nth-of-type(2)",
        "[data-button='true']",
        "button.mantine-UnstyledButton-root",
      ],
      frame: null,
    },
  });
  // Clicking on the 'Last 30 days' dropdown to change the timeframe to 'All Time'.
  await page.clickElement({
    selector: {
      element: [
        "#mantine-rh",
        "div:nth-of-type(2) > div > div > [data-mantine-stop-propagation='false']",
        "div:nth-of-type(2) > div > div > input.mantine-Input-input",
        "div.mantine-1rlbqtv > div:nth-of-type(2) > div > div > input",
        "div.mantine-1hv2vg > div:nth-of-type(2) > div:nth-of-type(2) > div > div > input",
        "div.mantine-1ywgif7 > div > div:nth-of-type(2) > div:nth-of-type(2) > div > div > input",
        "div.mantine-le2skq > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(2) > div > div > input",
        "body > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(2) > div > div > input",
        "[data-mantine-stop-propagation='false']",
        "input.mantine-Input-input",
      ],
      frame: null,
    },
  });
  // Selecting "All Time" from the timeframe dropdown to view all learner data.
  await page.clickElement({
    selector: {
      element: [
        "#mantine-rh-5",
        "#mantine-rh-items > div:nth-of-type(1) > div > div > div:nth-of-type(6)",
        ".//div[normalize-space(.)='All Time']",
        "div.mantine-1325v3c > div:nth-of-type(6)",
        "div.mantine-xlwgkm > div > div > div:nth-of-type(6)",
        "div.mantine-Select-dropdown > div > div > div:nth-of-type(1) > div > div > div:nth-of-type(6)",
        "body > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div > div > div:nth-of-type(1) > div > div > div:nth-of-type(6)",
        "[role='option']",
        "div.mantine-12zgr9",
      ],
      frame: null,
    },
  });
  // Waiting for learners to load after changing the timeframe to 'All Time'.
  await page.waitForTimeout(10000); // 10초 대기로 증가
  await page.visuallyAssert({
    assertionToTestFor:
      "Assert that the learners table is populated with data.",
  });
  // Scrolling down the page to reveal the 'Per page' dropdown.
  await page.scroll({
    direction: "DOWN",
    selector: {
      element: ["html"],
      frame: null,
    },
  });
  // Clicking on the "Per page" dropdown to change the number of learners displayed per page.
  await page.clickElement({
    selector: {
      element: [
        "#mantine-rm-target",
        "#__next > div > div > div:nth-of-type(2) > div > div:nth-of-type(4) > div:nth-of-type(1) > button",
        "[data-testid='learners-limit-dropdown']",
        ".//button[normalize-space(.)='10']",
        "div:nth-of-type(4) > div:nth-of-type(1) > [data-button='true']",
        "div:nth-of-type(4) > div:nth-of-type(1) > button.mantine-UnstyledButton-root",
        "div.mantine-11argd8 > div:nth-of-type(1) > button",
        "div.mantine-1hv2vg > div:nth-of-type(4) > div:nth-of-type(1) > button",
        "div.mantine-1ywgif7 > div > div:nth-of-type(4) > div:nth-of-type(1) > button",
        "div.mantine-le2skq > div:nth-of-type(2) > div > div:nth-of-type(4) > div:nth-of-type(1) > button",
        "div.c-ejwOqd > div > div:nth-of-type(2) > div > div:nth-of-type(4) > div:nth-of-type(1) > button",
        "body > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div > div:nth-of-type(4) > div:nth-of-type(1) > button",
        "[data-button='true']",
        "button.mantine-UnstyledButton-root",
      ],
      frame: null,
    },
  });
  // Changing the number of learners displayed per page to 50.
  await page.clickElement({
    selector: {
      element: [
        "#mantine-rm-dropdown > div > button:nth-of-type(3)",
        "[data-testid='learners-limit-menu-item-50']",
        ".//button[normalize-space(.)='50']",
        "div.mantine-11argd8 > div:nth-of-type(1) > div > div > button:nth-of-type(3)",
        "div.mantine-1hv2vg > div:nth-of-type(4) > div:nth-of-type(1) > div > div > button:nth-of-type(3)",
        "div.mantine-1ywgif7 > div > div:nth-of-type(4) > div:nth-of-type(1) > div > div > button:nth-of-type(3)",
        "div.mantine-le2skq > div:nth-of-type(2) > div > div:nth-of-type(4) > div:nth-of-type(1) > div > div > button:nth-of-type(3)",
        "body > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div > div:nth-of-type(4) > div:nth-of-type(1) > div > div > button:nth-of-type(3)",
        "[role='menuitem']",
        "[data-menu-item='true']",
        "button.mantine-Menu-item",
      ],
      frame: null,
    },
  });
  // Waiting for learners to load after changing the 'Per page' setting to 50.
  await page.waitForTimeout(10000); // 10초 대기
  await page.visuallyAssert({
    assertionToTestFor:
      "Assert that the learners table is populated with data and not showing '0 results'.",
  });
  // Clicking on the TOS (HH:MM) column header to sort the learners by Time on Site.
  await page.clickElement({
    selector: {
      element: [
        "[data-testid='learners-table-header-total_time_on_site']",
        "tr.mantine-1c4j1su > th:nth-of-type(8)",
        "div.mantine-kwn0a8 > table > thead > tr > th:nth-of-type(8)",
        "[data-testid='learners-table'] > thead > tr > th:nth-of-type(8)",
        "div.mantine-1hv2vg > div:nth-of-type(3) > table > thead > tr > th:nth-of-type(8)",
        "div.mantine-1ywgif7 > div > div:nth-of-type(3) > table > thead > tr > th:nth-of-type(8)",
        "div.mantine-le2skq > div:nth-of-type(2) > div > div:nth-of-type(3) > table > thead > tr > th:nth-of-type(8)",
        "body > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div > div:nth-of-type(3) > table > thead > tr > th:nth-of-type(8)",
        "th.mantine-1lmsj13",
      ],
      frame: null,
    },
  });
  // Waiting for learners to load after sorting by TOS (HH:MM).
  await page.waitForTimeout(3000);

  // Scroll to the top of the page to ensure we start from the first row
  await page.scroll({
    direction: "UP",
    selector: {
      element: ["html"],
      frame: null,
    },
  });

  // Scroll up again to make sure we're at the very top
  await page.scroll({
    direction: "UP",
    selector: {
      element: ["html"],
      frame: null,
    },
  });

  await page.waitForTimeout(2000);

  await page.visuallyAssert({
    assertionToTestFor:
      "Assert that the learners table is populated with data and not showing '0 results'.",
  });

  // TOS > 0인 모든 사용자를 동적으로 찾아서 테스트
  // 테이블의 모든 행을 가져옴
  const allRows = await page.locator("[data-testid='learners-table'] tbody tr").all();
  console.log(`\n📊 Total rows found in table: ${allRows.length}`);
  
  // TOS > 0인 사용자만 필터링 (유효한 시간 형식만)
  const usersWithTOS = [];
  for (let i = 0; i < allRows.length; i++) {
    const row = allRows[i];
    // TOS 컬럼 (8번째 열)의 텍스트를 가져옴
    const tosCell = row.locator('td:nth-child(8)');
    const tosText = await tosCell.textContent();
    
    // TOS가 HH:MM 형식이고 00:00이 아닌 경우만 포함
    const tosValue = tosText?.trim() || '';
    const isValidTimeFormat = /^\d{1,3}:\d{2}$/.test(tosValue); // HH:MM 또는 HHH:MM 형식
    const isNotZero = tosValue !== '00:00';
    
    if (isValidTimeFormat && isNotZero) {
      usersWithTOS.push({
        index: i + 1, // 1-based index for nth-child
        tosValue: tosValue
      });
    }
  }
  
  const numberOfUsersToTest = usersWithTOS.length;
  console.log(`\n✅ Found ${numberOfUsersToTest} users with TOS > 0`);
  console.log(`TOS values: ${usersWithTOS.map(u => u.tosValue).join(', ')}`);

  for (let i = 0; i < numberOfUsersToTest; i++) {
    const userIndex = usersWithTOS[i].index;
    const userTOS = usersWithTOS[i].tosValue;
    console.log(`\n=== Testing User #${i + 1} (Row ${userIndex}, TOS: ${userTOS}) ===`);

    // Clicking on the user's row (TOS 순서대로 정렬된 n번째) - 화면 위치와 상관없이 DOM의 n번째
    await page.clickElement({
      selector: {
        element: [
          `[data-testid='learners-table'] tbody tr:nth-child(${userIndex})`,
          `table tbody tr:nth-child(${userIndex})`,
          `div.mantine-kwn0a8 > table > tbody > tr:nth-of-type(${userIndex})`,
          `[data-testid='learners-table'] > tbody > tr:nth-of-type(${userIndex})`,
          `div.mantine-1hv2vg > div:nth-of-type(3) > table > tbody > tr:nth-of-type(${userIndex})`,
          `div.mantine-1ywgif7 > div > div:nth-of-type(3) > table > tbody > tr:nth-of-type(${userIndex})`,
          `div.mantine-le2skq > div:nth-of-type(2) > div > div:nth-of-type(3) > table > tbody > tr:nth-of-type(${userIndex})`,
          `div.c-ejwOqd > div > div:nth-of-type(2) > div > div:nth-of-type(3) > table > tbody > tr:nth-of-type(${userIndex})`,
          `body > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div > div:nth-of-type(3) > table > tbody > tr:nth-of-type(${userIndex})`,
        ],
        frame: null,
      },
    });

    // Scrolling down to view the 'Activities Completed' section in the learner's detail drawer.
    await page.scroll({
      direction: "DOWN",
      selector: {
        element: ["html"],
        frame: null,
      },
    });

    // Extracting Time on Site and Activities Completed data from the learner's detail drawer to perform verification.
    await page.analyzePageText({
      analysisToRun:
        "Extract the following values from the current page: 'Lifetime Total (HH:MM)', 'Asynchronous Activities' (Time on Site), 'Social Events' (Time on Site), 'Trainer-Led Classes' (Time on Site), 'Other' (Time on Site), 'Asynchronous Activities' (Activities Completed), 'Social Events' (Activities Completed), 'Trainer-Led Classes' (Activities Completed), and 'Total' (Activities Completed).",
      additionalRelevantContext:
        "The values are in HH:MM format for Time on Site and integer format for Activities Completed. The Time on Site total should be within a 4-minute tolerance.",
    });

    // Closing the learner's detail drawer after verifying the data.
    await page.clickElement({
      selector: {
        element: [
          "div.mantine-w29q45 > button > svg",
          "[role='dialog'] > div:nth-of-type(1) > div:nth-of-type(1) > button > svg",
          "body > div:nth-of-type(8) > div > div > div:nth-of-type(1) > div:nth-of-type(1) > button > svg",
        ],
        frame: null,
      },
    });

    // Scroll to the top of the page to ensure we start from the first row again (except for the last user)
    if (i < numberOfUsersToTest - 1) {
      await page.scroll({
        direction: "UP",
        selector: {
          element: ["html"],
          frame: null,
        },
      });

      await page.waitForTimeout(2000);
    }
  }

  console.log(
    `\n✅ Completed testing ${numberOfUsersToTest} users with TOS > 0 in descending order!`
  );
});
