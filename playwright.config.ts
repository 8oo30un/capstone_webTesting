import { defineConfig, devices } from "donobu";

export default defineConfig({
  testDir: "./tests",
  projects: [
    {
      name: "Test-for-https---staging-dashboard-immerse-online",
      testMatch:
        "tests/Test-for-https---staging-dashboard-immerse-online.spec.ts",
      use: {
        ...devices["Desktop Chromium"],
        headless: false,
        launchOptions: {
          slowMo: 1000,
        },
      },
      timeout: 600000, // 10분으로 증가
    },
    {
      name: "Add-learner-and-complete-onboarding",
      testMatch: "tests/add-learner-and-complete-onboarding.spec.ts",
      use: {
        ...devices["Desktop Chromium"],
        headless: false,
        launchOptions: {
          slowMo: 150, // 속도 향상 (기존 1000에서 150으로)
        },
      },
      timeout: 900000, // 15분으로 증가
    },
  ],
  use: {
    screenshot: "on",
    video: "on",
    headless: false,
    launchOptions: {
      slowMo: 1000,
    },
  },
  reporter: [
    ["github"],
    ["json", { outputFile: "test-results/playwright-report.json" }],
    ["html", { outputFolder: "playwright-report", open: "never" }],
  ],
  metadata: {
    selfHealingOptions: {
      areElementIdsVolatile: false,
      disableSelectorFailover: false,
    },
  },
});
