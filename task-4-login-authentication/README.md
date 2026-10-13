# Login Authentication Demo — OIBSIP Task 4

A front-end learning exercise for registration, login validation, duplicate-email handling, and a protected demo screen.

## Run

Open `index.html` in a modern browser.

## Important security limitation

This is **not real authentication**. Passwords are stored in plain text in browser localStorage and can be read or modified by anyone with access to the browser. The protected view is controlled by client-side code, so it can be bypassed. Use only fictional test credentials.

For a production application, implement server-side authentication, password hashing (for example Argon2id or bcrypt), HTTPS, rate limiting, secure session cookies, and server-side authorization checks. Never store plaintext passwords in localStorage.
