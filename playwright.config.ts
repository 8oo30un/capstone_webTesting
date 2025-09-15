import { defineConfig, devices } from "donobu";

export default defineConfig({
  testDir: "./tests",
  projects: [
    {
      name: "flow-ad14948c",
      testMatch: "tests/flow-ad14948c.spec.ts",
      use: { ...devices["Desktop Chromium"] },
      timeout: 80000,
    },
  ],
  use: {
    screenshot: "on",
    video: "on",
    // 네비게이션 타임아웃 증가
    navigationTimeout: 60000,
    actionTimeout: 30000,
    // 더 안정적인 브라우저 설정
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
