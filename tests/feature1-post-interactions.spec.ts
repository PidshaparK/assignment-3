import { test, expect } from './fixtures';
import { GroupPage } from './pages/group-page';

type TestFixtures = {
  groupPage: GroupPage;
};

const postId = '1234'; // Replace with actual post ID
const commentText = 'This is a test comment';
const reportReason = 'Inappropriate content';

test.describe('Feature 1: Post Interactions', () => {
  test('TC1.1 - Verify that a user can like a post', async ({ groupPage }) => {
    await groupPage.likePost(postId);
    const isLiked = await groupPage.isPostLiked(postId);
    expect(isLiked).toBeTruthy();
  });

  test('TC1.7 - Verify that a user can report a post for violations', async ({ groupPage }) => {
    await groupPage.reportPost(postId, reportReason);
    const notificationVisible = await groupPage.isReportSubmittedNotificationVisible();
    expect(notificationVisible).toBeTruthy();
  });

  test('TC1.12 - Verify that a user can add a comment to a post', async ({ groupPage }) => {
    await groupPage.addComment(postId, commentText);
    const commentPresent = await groupPage.isCommentPresent(postId, commentText);
    expect(commentPresent).toBeTruthy();
  });
});
