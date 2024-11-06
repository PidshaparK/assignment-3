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
