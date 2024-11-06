# Task 3: Write Automated Test Scripts
Write automated test scripts for some of the highest priority test cases you
identified in Task 1 and 2. You do not need to run these scripts on a real Facebook
page. Submit the scripts into your own Github repository.

# Overview
This project contains automated test scripts for a social media group page (similar to Facebook groups) using Playwright and the Page Object Model (POM) design pattern. The tests focus on high-priority functionalities for both admin and non-admin users, ensuring the core features of the group page work as expected.

## Project Structure
```
social-media-tests/
├── package.json
├── .env
├── playwright.config.ts
├── global.setup.ts
├── tests/
│   ├── fixtures.ts
│   ├── feature1-post-interactions.spec.ts
│   ├── feature2-admin-capabilities.spec.ts
│   ├── feature3-non-admin-capabilities.spec.ts
│   ├── feature4-post-review.spec.ts
│   └── feature5-user-interactions.spec.ts
└── pages/
    ├── base-page.ts
    ├── login-page.ts
    └── group-page.ts
```
## Concepts and Design Patterns
### Playwright
Playwright is a Node.js library for automating browsers (Chromium, Firefox, and WebKit) with a single API. It is used for end-to-end testing and offers features like:

- Cross-browser automation.
- Auto-waiting and web-first assertions.
- Network control for mocking and stubbing.
### Page Object Model (POM)
The Page Object Model is a design pattern that enhances test maintenance and reduces code duplication. It involves creating separate classes (objects) for each page or component in the application, encapsulating the page elements and actions.

### Features Covered
### Feature 1: Post Interactions
- TC1.1: Verify that a user can like a post.
- TC1.7: Verify that a user can report a post for violations.
- TC1.12: Verify that a user can add a comment to a post.
### Feature 2: Admin User Capabilities
- TC2.1: Verify that an admin can remove a user's post.
- TC2.8: Verify that an admin can ban a user from the group.
### Feature 3: Non-Admin User Capabilities
- TC3.1: Verify that a non-admin user can submit a new post.
- TC3.6: Verify that a non-admin user can comment on existing posts.
### Feature 4: Post Review Feature
- TC4.5: Verify that an admin can approve a pending post.
- TC4.6: Verify that an approved post is visible to group members.
### Feature 5: User Interactions
- TC5.1: Verify that any group member can create a new post.
- TC5.4: Verify that users can comment on any post in the group.
- TC5.6: Verify that users can add reactions to posts.