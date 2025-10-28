import { test } from "donobu";

const title = "Test for https://staging-dashboard.immerse.online";
const details = {
  annotation: [
    {
      type: "objective",
      description: `Go to dashboard.immerse.online
Enter Email: sample.hradmin.readwrite.6@immerse.online
Enter Password : 6hradminreadwrite
Click on Log in
Click on Learners Tab
Navigate to a contract with an available license
Click on Add Learners
Click on "Add Learner" on the dropdown
Fill in the First Name, Last Name, Email, and Country Fields
Click on "Save Changes"
Click on the "Search" field
Enter the email address used when creating the learner
Click on "Search"
Scroll table to the right
Click on the "..." and select "View Registration Link"
Click on "Copy"
Open a new browser tab
Paste in the link and hit enter
Click "Continue"
Enter a password in the "Password" field
Enter the same password in the "Confirm password" field
Click on "Continue"
Click on "Skip"
Verify landing at the completed onboarding page`,
    },
  ],
};
test(title, details, async ({ page }) => {
  // Initializing web navigation.
  await page.goto("https://staging-dashboard.immerse.online", {
    waitUntil: "networkidle",
    timeout: 60000,
  });

  // Entering the email address into the email field as part of the login process.
  await page.inputText({
    text: "sample.hradmin.readwrite.6@immerse.online",
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
  // Entering the password into the password field as part of the login process.
  await page.inputText({
    text: "6hradminreadwrite",
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
  // Clicking on the 'Login' button to proceed with the login process.
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
  // Waiting for the login process to complete and the dashboard to load.
  await page.waitForTimeout(3000);

  // Wait for the page to navigate away from login
  await page.waitForFunction(
    () => {
      return !window.location.href.includes("/login");
    },
    { timeout: 15000 }
  );

  // Wait for Learners button to be visible
  await page.waitForFunction(
    () => {
      const learnersBtn = document.querySelector(
        '[data-testid="layout-header-learners-button"]'
      );
      return learnersBtn !== null;
    },
    { timeout: 15000 }
  );

  await page.waitForTimeout(2000);

  // Wait for the learners button to be visible and clickable
  await page.waitForFunction(
    () => {
      const learnersBtn = document.querySelector(
        '[data-testid="layout-header-learners-button"]'
      );
      return learnersBtn !== null;
    },
    { timeout: 15000 }
  );

  // Clicking on the 'Learners' tab to navigate to the learners management section of the dashboard.
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
  // Clicking on the 'All Contracts' dropdown to view available contracts.
  await page.clickElement({
    selector: {
      element: [
        "#mantine-rd-target",
        "#__next > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > div:nth-of-type(1) > button",
        ".//button[normalize-space(.)='All Contracts']",
        "div:nth-of-type(2) > div > div:nth-of-type(1) > div:nth-of-type(1) > [data-button='true']",
        "div:nth-of-type(2) > div > div:nth-of-type(1) > div:nth-of-type(1) > button.mantine-UnstyledButton-root",
        "div.mantine-7khlmp > div:nth-of-type(1) > button",
        "div.mantine-1hv2vg > div:nth-of-type(1) > div:nth-of-type(1) > button",
        "div.mantine-1ywgif7 > div > div:nth-of-type(1) > div:nth-of-type(1) > button",
        "div.mantine-le2skq > div:nth-of-type(2) > div > div:nth-of-type(1) > div:nth-of-type(1) > button",
        "div.c-ejwOqd > div > div:nth-of-type(2) > div > div:nth-of-type(1) > div:nth-of-type(1) > button",
        "body > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > div:nth-of-type(1) > button",
        "[data-button='true']",
        "button.mantine-UnstyledButton-root",
      ],
      frame: null,
    },
  });
  // Selecting the '42225 Contract - IMMERSE Pro' contract from the dropdown to find a contract with an available license.
  await page.clickElement({
    selector: {
      element: [
        "#mantine-rd-dropdown > div > button:nth-of-type(1)",
        ".//button[normalize-space(.)='42225 Contract - IMMERSE Pro']",
        "div.mantine-7khlmp > div:nth-of-type(1) > div > div > button:nth-of-type(1)",
        "div.mantine-1hv2vg > div:nth-of-type(1) > div:nth-of-type(1) > div > div > button:nth-of-type(1)",
        "div.mantine-1ywgif7 > div > div:nth-of-type(1) > div:nth-of-type(1) > div > div > button:nth-of-type(1)",
        "div.mantine-le2skq > div:nth-of-type(2) > div > div:nth-of-type(1) > div:nth-of-type(1) > div > div > button:nth-of-type(1)",
        "body > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > div:nth-of-type(1) > div > div > button:nth-of-type(1)",
        "[role='menuitem']",
        "[data-menu-item='true']",
        "button.mantine-Menu-item",
      ],
      frame: null,
    },
  });
  // Clicking on the 'Add Learners' button to initiate the process of adding new learners to the selected contract.
  await page.clickElement({
    selector: {
      element: [
        "#mantine-rn-target",
        "#__next > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > div:nth-of-type(2) > button",
        ".//button[normalize-space(.)='Add Learners']",
        "div:nth-of-type(2) > div > div:nth-of-type(1) > div:nth-of-type(2) > [data-button='true']",
        "div:nth-of-type(2) > div > div:nth-of-type(1) > div:nth-of-type(2) > button.mantine-UnstyledButton-root",
        "div.mantine-7khlmp > div:nth-of-type(2) > button",
        "div.mantine-1hv2vg > div:nth-of-type(1) > div:nth-of-type(2) > button",
        "div.mantine-1ywgif7 > div > div:nth-of-type(1) > div:nth-of-type(2) > button",
        "div.mantine-le2skq > div:nth-of-type(2) > div > div:nth-of-type(1) > div:nth-of-type(2) > button",
        "div.c-ejwOqd > div > div:nth-of-type(2) > div > div:nth-of-type(1) > div:nth-of-type(2) > button",
        "body > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > div:nth-of-type(2) > button",
        "[data-button='true']",
        "button.mantine-UnstyledButton-root",
      ],
      frame: null,
    },
  });
  // Clicking on "Add Learner" from the dropdown menu to proceed with adding a single learner.
  await page.clickElement({
    selector: {
      element: [
        "#mantine-rn-dropdown > div > button:nth-of-type(1)",
        ".//button[normalize-space(.)='Add Learner']",
        "div.mantine-7khlmp > div:nth-of-type(2) > div > div > button:nth-of-type(1)",
        "div.mantine-1hv2vg > div:nth-of-type(1) > div:nth-of-type(2) > div > div > button:nth-of-type(1)",
        "div.mantine-1ywgif7 > div > div:nth-of-type(1) > div:nth-of-type(2) > div > div > button:nth-of-type(1)",
        "div.mantine-le2skq > div:nth-of-type(2) > div > div:nth-of-type(1) > div:nth-of-type(2) > div > div > button:nth-of-type(1)",
        "body > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > div:nth-of-type(2) > div > div > button:nth-of-type(1)",
        "[role='menuitem']",
        "[data-menu-item='true']",
        "button.mantine-Menu-item",
      ],
      frame: null,
    },
  });
  // Filling in the first name field for the new learner.
  await page.inputText({
    text: "Test",
    finalizeWithSubmit: false,
    selector: {
      element: [
        "#mantine-r43",
        "#mantine-re-body > form > div:nth-of-type(2) > div > input",
        "#mantine-re > div:nth-of-type(2) > div > div:nth-of-type(2) > form > div:nth-of-type(2) > div > input",
        "[data-testid='learners-form-first-name-input']",
        "[name='firstName']",
        "[placeholder='Please enter a first name']",
        "div:nth-of-type(2) > div > input.mantine-Input-input",
        "[data-testid='learners-form-new-user'] > div:nth-of-type(2) > div > input",
        "[role='dialog'] > div:nth-of-type(2) > form > div:nth-of-type(2) > div > input",
        "[role='presentation'] > div > div:nth-of-type(2) > form > div:nth-of-type(2) > div > input",
        "body > div:nth-of-type(4) > div > div > div:nth-of-type(2) > div > div:nth-of-type(2) > form > div:nth-of-type(2) > div > input",
        "input.mantine-Input-input",
      ],
      frame: null,
    },
  });
  // Filling in the last name field for the new learner.
  await page.inputText({
    text: "Learner",
    finalizeWithSubmit: false,
    selector: {
      element: [
        "#mantine-r44",
        "#mantine-re-body > form > div:nth-of-type(3) > div:nth-of-type(1) > input",
        "#mantine-re > div:nth-of-type(2) > div > div:nth-of-type(2) > form > div:nth-of-type(3) > div:nth-of-type(1) > input",
        "[data-testid='learners-form-last-name-input']",
        "[name='lastName']",
        "[placeholder='Please enter a last name']",
        "div:nth-of-type(3) > div:nth-of-type(1) > input.mantine-Input-input",
        "[data-testid='learners-form-new-user'] > div:nth-of-type(3) > div:nth-of-type(1) > input",
        "[role='dialog'] > div:nth-of-type(2) > form > div:nth-of-type(3) > div:nth-of-type(1) > input",
        "[role='presentation'] > div > div:nth-of-type(2) > form > div:nth-of-type(3) > div:nth-of-type(1) > input",
        "body > div:nth-of-type(4) > div > div > div:nth-of-type(2) > div > div:nth-of-type(2) > form > div:nth-of-type(3) > div:nth-of-type(1) > input",
        "input.mantine-Input-input",
      ],
      frame: null,
    },
  });
  // Inputting a randomized email address into the email field for the new learner.
  await page.inputRandomizedEmailAddress({
    baseEmail: "test.learner@immerse.online",
    finalizeWithSubmit: false,
    selector: {
      element: [
        "#mantine-r45",
        "#mantine-re-body > form > div:nth-of-type(4) > div:nth-of-type(1) > input",
        "#mantine-re > div:nth-of-type(2) > div > div:nth-of-type(2) > form > div:nth-of-type(4) > div:nth-of-type(1) > input",
        "[data-testid='learners-form-email-input']",
        "[name='email']",
        "[placeholder='Please enter a valid email']",
        "div:nth-of-type(4) > div:nth-of-type(1) > input.mantine-Input-input",
        "[data-testid='learners-form-new-user'] > div:nth-of-type(4) > div:nth-of-type(1) > input",
        "[role='dialog'] > div:nth-of-type(2) > form > div:nth-of-type(4) > div:nth-of-type(1) > input",
        "[role='presentation'] > div > div:nth-of-type(2) > form > div:nth-of-type(4) > div:nth-of-type(1) > input",
        "body > div:nth-of-type(4) > div > div > div:nth-of-type(2) > div > div:nth-of-type(2) > form > div:nth-of-type(4) > div:nth-of-type(1) > input",
        "input.mantine-Input-input",
      ],
      frame: null,
    },
  });

  // Extracting the full email address that was just input into the email field.
  const createdEmail = await page.evaluate(() => {
    const emailInput = document.querySelector(
      '[data-testid="learners-form-email-input"]'
    ) as HTMLInputElement;
    return emailInput?.value || null;
  });
  // Clicking on the country select input to open the dropdown of countries.
  await page.clickElement({
    selector: {
      element: [
        "#mantine-r47",
        "#mantine-re-body > form > div:nth-of-type(6) > div:nth-of-type(1) > div > input",
        "[data-testid='learners-form-country-select']",
        "[placeholder='Please enter a country']",
        "div:nth-of-type(6) > div:nth-of-type(1) > div > [data-mantine-stop-propagation='false']",
        "div:nth-of-type(6) > div:nth-of-type(1) > div > input.mantine-Input-input",
        "[data-testid='learners-form-new-user'] > div:nth-of-type(6) > div:nth-of-type(1) > div > input",
        "[role='dialog'] > div:nth-of-type(2) > form > div:nth-of-type(6) > div:nth-of-type(1) > div > input",
        "[role='presentation'] > div > div:nth-of-type(2) > form > div:nth-of-type(6) > div:nth-of-type(1) > div > input",
        "body > div:nth-of-type(4) > div > div > div:nth-of-type(2) > div > div:nth-of-type(2) > form > div:nth-of-type(6) > div:nth-of-type(1) > div > input",
        "[data-mantine-stop-propagation='false']",
        "input.mantine-Input-input",
      ],
      frame: null,
    },
  });
  // Selecting 'Albania' as the learner's country from the dropdown list.
  await page.clickElement({
    selector: {
      element: [
        "#mantine-r47-5",
        "#mantine-r47-items > div:nth-of-type(1) > div > div > div:nth-of-type(6)",
        ".//div[normalize-space(.)='Albania']",
        "[data-hovered='true']",
        "div.mantine-1325v3c > div:nth-of-type(6)",
        "div.mantine-xlwgkm > div > div > div:nth-of-type(6)",
        "div.mantine-Select-dropdown > div > div > div:nth-of-type(1) > div > div > div:nth-of-type(6)",
        "body > div:nth-of-type(4) > div > div > div:nth-of-type(2) > div > div:nth-of-type(2) > form > div:nth-of-type(6) > div:nth-of-type(2) > div > div > div:nth-of-type(1) > div > div > div:nth-of-type(6)",
        "[role='option']",
        "div.mantine-12zgr9",
      ],
      frame: null,
    },
  });
  // Scrolling down the 'Add Learner' modal to find the 'Save Changes' button.
  await page.scroll({
    direction: "DOWN",
    selector: {
      element: [
        "#mantine-re > div:nth-of-type(2)",
        "[role='presentation']",
        "div.mantine-144aj37",
        "html > body > div:nth-of-type(4) > div > div > div:nth-of-type(2)",
        "body > div:nth-of-type(4) > div > div > div:nth-of-type(2)",
      ],
      frame: null,
    },
  });
  // Clicking on the 'Save Changes' button to save the new learner's information.
  await page.clickElement({
    selector: {
      element: [
        "#mantine-re-body > form > div:nth-of-type(11) > button:nth-of-type(2)",
        "#mantine-re > div:nth-of-type(2) > div > div:nth-of-type(2) > form > div:nth-of-type(11) > button:nth-of-type(2)",
        "[data-testid='learners-button-save']",
        ".//button[normalize-space(.)='Save Changes']",
        "div.mantine-gwpqz3 > button:nth-of-type(2)",
        "[data-testid='learners-form-new-user'] > div:nth-of-type(11) > button:nth-of-type(2)",
        "[role='dialog'] > div:nth-of-type(2) > form > div:nth-of-type(11) > button:nth-of-type(2)",
        "[role='presentation'] > div > div:nth-of-type(2) > form > div:nth-of-type(11) > button:nth-of-type(2)",
        "body > div:nth-of-type(4) > div > div > div:nth-of-type(2) > div > div:nth-of-type(2) > form > div:nth-of-type(11) > button:nth-of-type(2)",
        "[data-button='true']",
        "button.mantine-UnstyledButton-root",
      ],
      frame: null,
    },
  });
  // Waiting for the learner to be saved and the table to update.
  await page.waitForTimeout(3000);

  // Searching for the newly created learner using the full email address that was created.
  await page.inputText({
    text: createdEmail || "test.learner",
    finalizeWithSubmit: false,
    selector: {
      element: [
        "#mantine-rg",
        "[placeholder='Search name, email, etc...']",
        "div:nth-of-type(2) > div:nth-of-type(1) > div > div > input.mantine-Input-input",
        "div.mantine-1rlbqtv > div:nth-of-type(1) > div > div > input",
        "div.mantine-1hv2vg > div:nth-of-type(2) > div:nth-of-type(1) > div > div > input",
        "div.mantine-1ywgif7 > div > div:nth-of-type(2) > div:nth-of-type(1) > div > div > input",
        "div.mantine-le2skq > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div > div > input",
        "body > div:nth-of-type(1) > div > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div > div > input",
        "input.mantine-Input-input",
      ],
      frame: null,
    },
  });

  // Clicking on the search button to execute the search.
  await page.clickElement({
    selector: {
      element: [
        "[data-testid='learners-search-button']",
        ".//button[normalize-space(.)='Search']",
        "[type='submit']",
        "button[aria-label*='Search']",
        "input[type='submit']",
        "[role='button'][aria-label*='Search']",
      ],
      frame: null,
    },
  });

  // Waiting for search results to load.
  await page.waitForTimeout(1000);

  // Scrolling the table to the right to reveal the action menu ("...") button.
  await page.scroll({
    direction: "RIGHT",
    selector: {
      element: [
        "[data-testid='learners-table']",
        "table",
        ".//table",
        "[role='table']",
        "div[class*='ScrollArea']",
      ],
      frame: null,
    },
  });

  // Clicking on the "..." menu button for the learner in the first row.
  await page.clickElement({
    selector: {
      element: [
        "[data-testid='learners-table'] tbody tr:first-child button",
        "[data-testid*='learners-table-row-actions']",
        "button[aria-label*='Actions']",
        ".//button[contains(@aria-label, 'Actions')]",
        ".//button[@type='button' and contains(@class, 'menu')]",
        "button[aria-haspopup='menu']",
        "[role='button'][aria-haspopup='menu']",
      ],
      frame: null,
    },
  });

  // Clicking on "View Registration Link" from the dropdown menu.
  await page.clickElement({
    selector: {
      element: [
        "[data-testid*='view-registration-link']",
        ".//div[normalize-space(.)='View Registration Link']",
        ".//div[contains(text(), 'Registration Link')]",
        "[role='menuitem'][contains(text(), 'Registration')]",
      ],
      frame: null,
    },
  });

  // Extracting the registration link from the page before clicking Copy.
  // The link is typically displayed in an input field or visible text before the Copy button.
  await page.waitForTimeout(500);

  // Reading the registration link from the input field or text element.
  const registrationLink = (await page.evaluate(() => {
    // Try to find the link in various possible elements
    const input =
      (document.querySelector("input[readonly]") as HTMLInputElement) ||
      (document.querySelector('input[value*="https"]') as HTMLInputElement) ||
      (document.querySelector('[class*="copy"] input') as HTMLInputElement) ||
      (document.querySelector(
        'input[placeholder*="link" i]'
      ) as HTMLInputElement) ||
      (document.querySelector(
        'input[placeholder*="Link" i]'
      ) as HTMLInputElement);

    if (input && input.value && input.value.includes("https")) {
      // Extract the complete URL from the value
      const urlMatch = input.value.match(/https?:\/\/[^\s]+/);
      return urlMatch ? urlMatch[0] : input.value.trim();
    }

    // Try textarea
    const textarea =
      (document.querySelector("textarea[readonly]") as HTMLTextAreaElement) ||
      (document.querySelector(
        'textarea[value*="https"]'
      ) as HTMLTextAreaElement);
    if (textarea && textarea.value && textarea.value.includes("https")) {
      // Extract the complete URL from the value
      const urlMatch = textarea.value.match(/https?:\/\/[^\s]+/);
      return urlMatch ? urlMatch[0] : textarea.value.trim();
    }

    // Try span or div with the link
    const linkElements = Array.from(
      document.querySelectorAll("span, div, a")
    ).find(
      (el) =>
        el.textContent &&
        el.textContent.includes("https") &&
        el.textContent.includes("http")
    );

    if (linkElements) {
      const urlMatch = linkElements.textContent?.match(/https?:\/\/[^\s]+/);
      return urlMatch ? urlMatch[0] : linkElements.textContent?.trim() || null;
    }

    return null;
  })) as string;

  // Clicking on the "Copy" button to copy the registration link.
  await page.clickElement({
    selector: {
      element: [
        ".//button[normalize-space(.)='Copy']",
        "[data-testid*='copy-button']",
        "button[aria-label*='Copy']",
        ".//button[contains(text(), 'Copy')]",
      ],
      frame: null,
    },
  });

  // Waiting for the copy operation to complete.
  await page.waitForTimeout(1000);

  // Opening a new browser tab and navigating to the registration link.
  console.log("Extracted registration link:", registrationLink);

  // Validate the registration link
  if (!registrationLink || !registrationLink.startsWith("http")) {
    throw new Error(`Invalid registration link: ${registrationLink}`);
  }

  // Navigate to the registration link
  await page.goto(registrationLink, {
    waitUntil: "domcontentloaded",
    timeout: 30000,
  });

  // Wait for the page to fully load
  await page.waitForTimeout(5000);

  // Wait for Continue button to be enabled
  await page.waitForFunction(
    () => {
      const buttons = document.querySelectorAll("button");
      for (const btn of buttons) {
        if (btn.textContent?.includes("Continue") && !btn.disabled) {
          return true;
        }
      }
      return false;
    },
    { timeout: 20000 }
  );

  await page.clickElement({
    selector: {
      element: [
        ".//button[normalize-space(.)='Continue' and not(@disabled)]",
        "button[type='submit']:not([disabled])",
      ],
      frame: null,
    },
  });

  // Wait for the form to load after clicking Continue
  await page.waitForTimeout(8000);

  // Wait for input fields to appear
  await page.waitForFunction(
    () => {
      const inputs = document.querySelectorAll(
        'input[type="text"], input[type="password"]'
      );
      return inputs.length > 0;
    },
    { timeout: 15000 }
  );

  // Entering name in the "Name" field (if exists).
  await page.inputText({
    text: "Test Learner",
    finalizeWithSubmit: false,
    selector: {
      element: [
        "[name='name']",
        "[name='fullName']",
        "[name='firstName']",
        "[placeholder*='Name']",
        "[placeholder*='name']",
        "[placeholder*='First']",
        "[placeholder*='Full']",
        "input[type='text']:first-of-type",
        "input:not([type='password']):not([type='email']):not([type='hidden'])",
        "input#name",
        "input.name",
        "input[data-testid*='name']",
      ],
      frame: null,
    },
  });

  // Entering a password in the "Password" field.
  await page.inputText({
    text: "ComplexPass2024!@#$%",
    finalizeWithSubmit: false,
    selector: {
      element: [
        "[name='password']",
        "[type='password']",
        "[placeholder*='Password']",
        "input#password",
        "input.password",
      ],
      frame: null,
    },
  });

  // Entering the same password in the "Confirm password" field.
  await page.inputText({
    text: "ComplexPass2024!@#$%",
    finalizeWithSubmit: false,
    selector: {
      element: [
        "[name='confirmPassword']",
        "[name='passwordConfirm']",
        "[placeholder*='Confirm']",
        "input#confirmPassword",
        "input.confirm-password",
      ],
      frame: null,
    },
  });

  // Wait a bit before clicking Continue
  await page.waitForTimeout(2000);

  // Clicking on "Continue" to submit the password.
  await page.clickElement({
    selector: {
      element: [
        ".//button[normalize-space(.)='Continue']",
        "button[type='submit']",
        "[data-testid*='continue']",
        "button.Continue",
      ],
      frame: null,
    },
  });

  // Wait for navigation to complete after Continue button click
  await page.waitForTimeout(5000);

  // Clicking on "Skip" to skip any additional steps (if available).
  // First wait a bit for the page to load
  await page.waitForTimeout(3000);

  // Check if Skip button exists before trying to click it
  const skipButtonExists = await page.evaluate(() => {
    const skipSelectors = [
      'button:contains("Skip")',
      'a:contains("Skip")',
      '[data-testid*="skip"]',
      'button[aria-label*="Skip"]',
      'button[aria-label*="skip"]',
    ];

    for (const selector of skipSelectors) {
      try {
        const element = document.querySelector(selector);
        if (element) return true;
      } catch (e) {
        // Invalid selector, continue
      }
    }

    // Try XPath-like search
    const buttons = Array.from(document.querySelectorAll("button, a"));
    return buttons.some((btn) =>
      btn.textContent?.toLowerCase().includes("skip")
    );
  });

  if (skipButtonExists) {
    await page.clickElement({
      selector: {
        element: [
          ".//button[normalize-space(.)='Skip']",
          ".//button[contains(text(), 'Skip')]",
          ".//button[contains(text(), 'skip')]",
          "[data-testid*='skip']",
          "button[aria-label*='Skip']",
          "button[aria-label*='skip']",
          ".//a[normalize-space(.)='Skip']",
          ".//a[contains(text(), 'Skip')]",
        ],
        frame: null,
      },
    });
  } else {
    console.log("Skip button not found, proceeding without skipping");
  }

  // Waiting for the onboarding page to load completely.
  await page.waitForTimeout(2000);

  // Wait for onboarding completion (simplified approach)
  await page.waitForTimeout(5000);

  // Simple assertion for onboarding completion
  await page.visuallyAssert({
    assertionToTestFor:
      "Assert that the user has successfully completed the initial account setup and is now on the welcome page showing 'Here's what's next' with options to launch the virtual world, take placement test, and complete getting started checklist.",
  });

  // Navigate back to dashboard to verify Active status
  await page.goto("https://staging-dashboard.immerse.online/", {
    waitUntil: "domcontentloaded",
    timeout: 30000,
  });

  // Wait for the dashboard to load
  await page.waitForTimeout(3000);

  // Check if redirected to login page and re-login if necessary
  const currentUrl = page.url();
  if (currentUrl.includes("/login")) {
    // Re-login
    await page.inputText({
      text: "sample.hradmin.readwrite.6@immerse.online",
      finalizeWithSubmit: false,
      selector: {
        element: [
          "[data-testid='login-form-email-input']",
          "[placeholder='Email']",
        ],
        frame: null,
      },
    });

    await page.inputText({
      text: "6hradminreadwrite",
      finalizeWithSubmit: false,
      selector: {
        element: [
          "[data-testid='login-form-password-input']",
          "[placeholder='Password']",
        ],
        frame: null,
      },
    });

    await page.clickElement({
      selector: {
        element: [
          "[data-testid='login-form-submit-button']",
          ".//button[normalize-space(.)='Login']",
        ],
        frame: null,
      },
    });

    // Wait for navigation away from login page
    await page.waitForFunction(() => !window.location.href.includes("/login"), {
      timeout: 15000,
    });
  }

  // Wait for Learners button to be visible
  await page.waitForFunction(
    () => {
      const learnersBtn = document.querySelector(
        '[data-testid="layout-header-learners-button"]'
      );
      return learnersBtn !== null;
    },
    { timeout: 15000 }
  );

  // Navigate to Learners tab
  await page.clickElement({
    selector: {
      element: [
        "[data-testid='layout-header-learners-button']",
        ".//button[normalize-space(.)='Learners']",
      ],
      frame: null,
    },
  });

  // Wait for the learners page to load
  await page.waitForTimeout(2000);

  // Search for the created learner again to verify Active status
  await page.inputText({
    text: createdEmail || "test.learner",
    finalizeWithSubmit: false,
    selector: {
      element: [
        "#mantine-rg",
        "[placeholder='Search name, email, etc...']",
        "div:nth-of-type(2) > div:nth-of-type(1) > div > div > input.mantine-Input-input",
      ],
      frame: null,
    },
  });

  // Clicking on the 'Search' button to search for the newly created learner.
  await page.clickElement({
    selector: {
      element: [
        "[data-testid='learners-search-button']",
        ".//button[normalize-space(.)='Search']",
        "[type='submit']",
        "button[aria-label*='Search']",
      ],
      frame: null,
    },
  });

  // Wait for search results
  await page.waitForTimeout(3000);

  // Verify that the learner is now "Active"
  await page.visuallyAssert({
    assertionToTestFor: `Assert that the learner with email '${createdEmail}' appears in the learners table with status 'Active', indicating successful account activation after completing onboarding.`,
  });
});
