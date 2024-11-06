import { test, expect } from './fixtures';
import { GroupPage } from './pages/group-page';

type TestFixtures = {
    groupPage: GroupPage;
  };

const postContent = 'This is a test post';
const postId = '1234'; // Replace with actual post ID
const commentText = 'This is a test comment';

test.describe('Feature 3: Non-Admin User Capabilities', () => {
  test('TC3.1 - Verify that a non-admin user can submit a new post', async ({ groupPage }) => {
    await groupPage.createPost(postContent);
    const isPending = await groupPage.isPostPendingApproval(postContent);
    expect(isPending).toBeTruthy();
  });

  test('TC3.6 - Verify that a non-admin user can comment on existing posts', async ({ groupPage }) => {
    await groupPage.addComment(postId, commentText);
    const commentPresent = await groupPage.isCommentPresent(postId, commentText);
    expect(commentPresent).toBeTruthy();
  });
});
