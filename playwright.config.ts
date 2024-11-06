import "dotenv/config";
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 1,
  workers: 1,
  timeout: 60000,
  globalTimeout: 60000,
  fullyParallel: true,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    actionTimeout: 20000,
  },

  projects: [
    {
      name: "setup",
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

});

