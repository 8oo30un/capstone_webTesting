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
