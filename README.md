# React Tech Quiz (UCI-Module-19-Cypress)

This project is a React-based Tech Quiz application built with a MERN stack: MongoDB for the database, Express and Node.js for the server/API, and React for the frontend. The app allows users to take a 10-question quiz to test their knowledge and see their final score.

---

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Known Issues and Missing Parts](#known-issues-and-missing-parts)
- [Collaboration Note](#collaboration-note)

---

## Features

✅ Tech quiz with 10 random questions  
✅ Displays user’s final score  
✅ Option to restart quiz  
✅ Built with React, Node.js, Express, MongoDB  

---

## Technologies

- **Frontend:** React, Vite, TypeScript  
- **Backend:** Express.js, Node.js  
- **Database:** MongoDB  
- **Testing Framework (planned):** Cypress  
- **Build Tools:** TypeScript, Vite  

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/uci-module-19-cypress.git

2. Install dependencies for both client and server:
cd client
npm install
cd ../server
npm install

3. Rename .env.example to .env in the server folder and provide the required environment variables.

## Usage

1. Build the client:
cd client
npm run build

2. Start the server:
cd ../server
npm start

3. Visit http://localhost:3001 in your browser to see the application.

## Testing
⚠️ Currently missing:
Cypress tests for component and end-to-end testing. This was the main focus of the assignment, and while I attempted to configure the server and frontend, I was unable to get the testing suite fully implemented or working.

## Known Issues and Missing Parts

- Missing Cypress Tests: The assignment required both component and end-to-end Cypress tests. Unfortunately, I wasn’t able to get Cypress fully set up and running within the time I had.

- No Walkthrough Video: Because I wasn’t able to complete the tests, I couldn’t create a walkthrough video of them in action.

- No Deploy Link: I was unable to deploy the working application to a live environment.

- Frontend Not Fully Integrated: While the client app builds successfully, serving it from the backend’s Express server didn’t work as expected—specifically, there was a MIME type mismatch causing the JavaScript bundle not to load.

## Collaboration Note

This project was developed as part of the UCI coding bootcamp module assignment. During the final stages, I collaborated with the AI assistant ChatGPT to troubleshoot issues with the server and build process, and to help identify why the frontend assets weren’t being served correctly. Despite best efforts, I wasn’t able to resolve these build and deployment errors in time for submission.

## Final Note

While I was able to get the React app to build and the Express server running, I did not complete the core requirement of Cypress testing. I want to emphasize that I did work hard to get the basics functioning and that I’m submitting what I have to show the grader my progress and effort. I understand this is not a complete submission and I do not expect full credit. My goal is to demonstrate that I put in the time and reached out for help, even though I fell short of the final product.