import { test as base } from '@playwright/test';
import { GroupPage } from './pages/group-page';

type TestFixtures = {
  groupPage: GroupPage;
};

export const test = base.extend<TestFixtures>({
  groupPage: async ({ page }, use) => {
    const groupPage = new GroupPage(page);
    await groupPage.navigate(); // Assumes the user is already logged in
    await use(groupPage);
  },
});

export { expect } from '@playwright/test';