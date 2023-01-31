import type { PlaywrightTestConfig } from "@playwright/test"
import { devices } from "@playwright/test"

const config: PlaywrightTestConfig = {
  timeout: 12000,
  expect: { timeout: 4000 },
  fullyParallel: true,
  reporter: [["html"], ["list"]],
  use: {
    actionTimeout: 3000,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    headless: true,
  },
  projects: [
    {
      name: "chrome",
      use: {
        ...devices["Desktop Chrome"],
      },
    },

    {
      name: "edge",
      use: {
        ...devices["Desktop Edge"],
      },
    },

    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
      },
    },
  ],

  outputDir: "evidencias/",
}

export default config
