import { test, expect } from './fixtures';
import { GroupPage } from './pages/group-page';

type TestFixtures = {
    groupPage: GroupPage;
  };

const regularUsername = 'testuser';
const postId = '1234'; // Replace with actual post ID

test.describe('Feature 2: Admin User Capabilities', () => {
  test('TC2.1 - Verify that an admin can remove a user\'s post', async ({ groupPage }) => {
    await groupPage.removePost(postId);
    const isVisible = await groupPage.isPostVisible(postId);
    expect(isVisible).toBeFalsy();
  });

  test('TC2.8 - Verify that an admin can ban a user from the group', async ({ groupPage }) => {
    await groupPage.banUser(regularUsername);
    const isBanned = await groupPage.isUserBanned(regularUsername);
    expect(isBanned).toBeTruthy();
  });
});
