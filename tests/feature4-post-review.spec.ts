import { test, expect } from './fixtures';
import { GroupPage } from './pages/group-page';

const pendingPostContent = 'Pending approval post';

test.describe('Feature 4: Post Review Feature', () => {
  test('TC4.5 & TC4.6 - Verify that an admin can approve a pending post and it becomes visible', async ({ browser }) => {
    // Step 1: Non-admin user creates a post pending approval
    const userContext = await browser.newContext({ storageState: 'storageStateUser.json' });
    const userPage = await userContext.newPage();
    const userGroupPage = new GroupPage(userPage);
    await userGroupPage.navigate();
    await userGroupPage.createPost(pendingPostContent);
    const pendingPostId = await userGroupPage.getPendingPostId(pendingPostContent);
    await userContext.close();

    // Step 2: Admin approves the pending post
    const adminContext = await browser.newContext({ storageState: 'storageStateAdmin.json' });
    const adminPage = await adminContext.newPage();
    const adminGroupPage = new GroupPage(adminPage);
    await adminGroupPage.navigate();
    await adminGroupPage.approvePost(pendingPostId);
    await adminContext.close();

    // Step 3: Non-admin user verifies the post is visible
    const verifyContext = await browser.newContext({ storageState: 'storageStateUser.json' });
    const verifyPage = await verifyContext.newPage();
    const verifyGroupPage = new GroupPage(verifyPage);
    await verifyGroupPage.navigate();
    const isVisible = await verifyGroupPage.isPostVisible(pendingPostId);
    expect(isVisible).toBeTruthy();
    await verifyContext.close();
  });
});