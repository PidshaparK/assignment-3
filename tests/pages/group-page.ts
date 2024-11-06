// pages/group-page.ts

import { BasePage } from './base-page';
import { Page, expect, Locator } from '@playwright/test';

export class GroupPage extends BasePage {
  // Selectors
  private likeButton = 'button.like-button';
  private reportButton = 'button.report-button';
  private commentInput = 'textarea.comment-input';
  private submitCommentButton = 'button.submit-comment';
  private createPostButton = 'button.create-post';
  private postContentInput = 'textarea.post-content';
  private submitPostButton = 'button.submit-post';
  private reactionButton = 'button.reaction-button';
  private removePostButton = 'button.remove-post';
  private approvePostButton = 'button.approve-post';
  private banUserButton = 'button.ban-user';

  // Navigate to the group page
  async navigate() {
    await this.page.goto('/group');
  }

  // User Methods

  // Like a post
  async likePost(postId: string) {
    await this.page.click(`#post-${postId} ${this.likeButton}`);
  }

  async isPostLiked(postId: string): Promise<boolean> {
    return this.page.isVisible(`#post-${postId} ${this.likeButton}.liked`);
  }

  // Report a post
  async reportPost(postId: string, reason: string) {
    await this.page.click(`#post-${postId} ${this.reportButton}`);
    await this.page.fill('textarea.report-reason', reason);
    await this.page.click('button.submit-report');
  }

  async isReportSubmittedNotificationVisible(): Promise<boolean> {
    return this.page.isVisible('.notification:has-text("Report submitted")');
  }

  // Add a comment to a post
  async addComment(postId: string, comment: string) {
    await this.page.fill(`#post-${postId} ${this.commentInput}`, comment);
    await this.page.click(`#post-${postId} ${this.submitCommentButton}`);
  }

  async isCommentPresent(postId: string, comment: string): Promise<boolean> {
    return this.page.isVisible(`#post-${postId} .comment:has-text("${comment}")`);
  }

  // Create a new post
  async createPost(content: string) {
    await this.page.click(this.createPostButton);
    await this.page.fill(this.postContentInput, content);
    await this.page.click(this.submitPostButton);
  }

  async isPostPendingApproval(content: string): Promise<boolean> {
    return this.page.isVisible(`.post.pending:has-text("${content}")`);
  }

  // Get the ID of a pending post based on its content
  async getPendingPostId(content: string): Promise<string> {
    const postElement = await this.page.$(`.post.pending:has-text("${content}")`);
    const postId = await postElement?.getAttribute('id');
    return postId ? postId.replace('post-', '') : '';
  }

  // Add a reaction to a post
  async addReaction(postId: string, reaction: string) {
    await this.page.click(`#post-${postId} ${this.reactionButton}`);
    await this.page.click(`.reaction-menu button.${reaction}`);
  }

  async isReactionPresent(postId: string, reaction: string): Promise<boolean> {
    return this.page.isVisible(`#post-${postId} .reaction.${reaction}`);
  }

  // Admin Methods

  // Remove a user's post
  async removePost(postId: string) {
    await this.page.click(`#post-${postId} ${this.removePostButton}`);
  }

  async isPostVisible(postId: string): Promise<boolean> {
    return this.page.isVisible(`#post-${postId}`);
  }

  // Ban a user from the group
  async banUser(username: string) {
    await this.page.click(`.user-list .user:has-text("${username}") ${this.banUserButton}`);
  }

  async isUserBanned(username: string): Promise<boolean> {
    return !(await this.page.isVisible(`.user-list .user:has-text("${username}")`));
  }

  // Approve a pending post
  async approvePost(postId: string) {
    await this.page.click(`.post.pending#post-${postId} ${this.approvePostButton}`);
  }
}
