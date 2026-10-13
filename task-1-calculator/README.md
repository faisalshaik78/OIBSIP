# Oasis Infobyte Internship Projects (OIBSIP)

A portfolio of web development tasks built with HTML5, CSS3, JavaScript, and Node.js as part of my internship practice.

## Projects

| Task | Project | Stack | Folder |
|---|---|---|---|
| 1 | Calculator | HTML, CSS Grid, vanilla JavaScript | [task-1-calculator](./task-1-calculator/) |
| 2 | Marie Curie Tribute Page | HTML, CSS, responsive design | [task-2-tribute-page](./task-2-tribute-page/) |
| 3 | To-Do Web App | HTML, CSS, JavaScript, localStorage | [task-3-todo-app](./task-3-todo-app/) |
| 4 | Login & Registration System | Node.js, Express, sessions, bcrypt | [task-4-login-authentication](./task-4-login-authentication/) |

## Run the projects

### Tasks 1–3
Open the relevant task folder and launch its `index.html` in a modern browser. For the tribute page, an internet connection may be needed for web fonts and the Wikimedia Commons portrait.

### Task 4 — Login & Registration
Install Node.js, then open a terminal in the Task 4 folder and run:

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000). Register with a test username and a password containing at least 8 characters and 1 number. The server creates a local `data/users.json` file when first run; this data file should not be committed to GitHub.

Set a strong `SESSION_SECRET` environment variable for a persistent session secret. This is a learning project, not a production-ready authentication service.

## Notes

- The calculator uses event listeners and conditional logic rather than JavaScript `eval()`.
- The to-do app saves tasks in the browser's localStorage.
- The tribute page links to Wikimedia Commons for the portrait; attribution and license details are included with the image.
- Task 4 hashes passwords with bcrypt and uses server-side sessions. For real deployment, add HTTPS, rate limiting, CSRF protections, secure production cookie settings, and a production database.

## Author

**Shaik Faisal**  
GitHub: [faisalshaik78](https://github.com/faisalshaik78)
