Grading Requirements
✅ Deliverables: 15%
Your GitHub repository must contain the application code as well as the configuration and tests using Cypress.
🔍 Verification: Check that the repo has the full app (client/, server/), plus cypress/ with component/Quiz.cy.jsx and e2e/quiz.cy.js.

✅ Walkthrough Video: 32%
A walkthrough video that demonstrates the component and end-to-end tests running and passing must be submitted.
🔍 Verification: Ensure there’s a video link in README.md showing the tests running in the terminal (via npm run test) and passing.

The README.md file must include a link to the walkthrough video.
🔍 Verification: Look at the README.md file for a visible link to the video.

The walkthrough video must show all tests passing from the command line.
🔍 Verification: In the video, visually confirm that tests in quiz.cy.js and Quiz.cy.jsx pass when running npm run test.

The walkthrough video must demonstrate how a user would invoke the application from the command line.
🔍 Verification: In the video, ensure the user runs npm run test and shows Cypress opening or tests running.

✅ Technical Acceptance Criteria: 40%
Your submission should satisfy all of the preceding acceptance criteria in addition to the following:

You must use the Cypress package.
🔍 Verification: In package.json, confirm "cypress": "^13.x" in devDependencies and tests in cypress/ folder.

The application must have a component test for the quiz component.
🔍 Verification: cypress/component/Quiz.cy.jsx file present, with describe and it blocks for testing Quiz component.

The application must have an end-to-end test for the quiz component.
🔍 Verification: cypress/e2e/quiz.cy.js file present, with flow that visits the app and simulates taking the quiz.

✅ Repository Quality: 13%
Your repository has a unique name.
🔍 Verification: The repo name in GitHub is unique (not starter-code etc.).

Your repository follows best practices for file structure and naming conventions.
🔍 Verification: client/, server/, cypress/ directories organized properly; no random/unused files.

Your repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
🔍 Verification: Files like Quiz.cy.jsx and quiz.cy.js have clear variable names, good indentation, and comments.

Your repository contains multiple descriptive commit messages.
🔍 Verification: Check git log or the commit history in GitHub to see descriptive commit messages like “add e2e test” or “finalize component tests”.

Your repository contains a high-quality README with a description and a link to your walkthrough video.
🔍 Verification: README.md includes a short project description and the video link.

