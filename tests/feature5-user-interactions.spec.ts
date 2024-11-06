import { test, expect } from './fixtures';
import { GroupPage } from './pages/group-page';

const postContent = 'This is a test post';
const postId = '1234'; // Replace with actual post ID
const commentText = 'This is a test comment';
const reactionType = 'like';

test.describe('Feature 5: User Interactions', () => {
  test('TC5.1 - Verify that any group member can create a new post', async ({ groupPage }) => {
    await groupPage.createPost(postContent);
    const isPending = await groupPage.isPostPendingApproval(postContent);
    expect(isPending).toBeTruthy();
  });

  test('TC5.4 - Verify that users can comment on any post in the group', async ({ groupPage }) => {
    await groupPage.addComment(postId, commentText);
    const commentPresent = await groupPage.isCommentPresent(postId, commentText);
    expect(commentPresent).toBeTruthy();
  });

  test('TC5.6 - Verify that users can add reactions to posts', async ({ groupPage }) => {
    await groupPage.addReaction(postId, reactionType);
    const reactionPresent = await groupPage.isReactionPresent(postId, reactionType);
    expect(reactionPresent).toBeTruthy();
  });
});
