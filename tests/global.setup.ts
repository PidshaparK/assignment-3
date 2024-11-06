// global-setup-user.ts

import { chromium, FullConfig } from '@playwright/test';

async function globalSetupUser(config: FullConfig) {
  const { baseURL } = config.projects[0].use;

  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Navigate to the login page
  await page.goto(`${baseURL}/login`);

  // Perform login
  await page.fill('input[name="username"]', `${process.env.TEST_USERNAME}`);
  await page.fill('input[name="password"]', `${process.env.TEST_PASSWORD}`);
  await page.click('button[type="submit"]');

  // Save auth state
  await page.context().storageState({ path: '.test/.storageStateUser.json' });

  await browser.close();
}

async function globalSetupAdmin(config: FullConfig) {
  const { baseURL } = config.projects[0].use;

  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Navigate to the login page
  await page.goto(`${baseURL}/login`);

  // Perform login
  await page.fill('input[name="username"]', `${process.env.TEST_ADMIN_USERNAME}`);
  await page.fill('input[name="password"]', `${process.env.TEST_ADMIN_PASSWORD}`);
  await page.click('button[type="submit"]');

  // Save auth state
  await page.context().storageState({ path: '.test/.storageStateAdmin.json' });

  await browser.close();
}
