# New Generation High School Student Portal

A single-page Next.js app for viewing, searching, adding and removing students.
Student data is held in memory and resets to the eight sample students when the page is refreshed.

## Group members

| Member | Name | Work |
| --- | --- | --- |
| A | Ahamid Adam | Shared layout, Navbar, Footer, StatsPanel and overall styling |
| B | Habin Park | Student data and interface, StudentList and StudentCard |
| C | Pinhung Chiang | StudentPortal state and callbacks, SearchBox, AddStudent and home page integration |

The active component directory is `components/`, and the layout imports point there. The original `Componets/` directory is retained as an unused copy of the earlier group files.

## Run locally

From the repository root:

```bash
cd student-portal
npm ci
npm run dev
```

Open http://localhost:3000.

```bash
npm run lint
npm run build
npm run start
```

## Deployment

Deployed website:https://student-portal-asjj.vercel.app

Set the Vercel root directory to `student-portal` because the Next.js app is inside that folder. Use `npm run build` as the build command.

## Browser test checklist

Tested on October 30, 2026 using headless Chromium against the production build. The starting data contains eight students, five on the honour roll and two in grade 12.

| # | Test | Result | Observed behaviour |
| --- | --- | --- | --- |
| 1 | Open the app | Pass | All eight sample students appear. Students, Honour roll and Graduating show 8, 5 and 2. |
| 2 | Show and hide details on one card | Pass | John Smith shows 85% and an Honour roll badge. Only that card opens; clicking Hide details closes it. Emma Wilson has no badge at 78%. |
| 3 | Remove a grade 12 student | Pass | Removing Sarah Kim leaves seven students. The totals change to 7, 4 and 1. |
| 4 | Search with an uppercase last name, then clear | Pass | WILSON shows only Emma Wilson. Clearing the search restores all remaining cards. |
| 5 | Search for zzz | Pass | No students to show appears. The three totals stay unchanged. |
| 6 | Add with an empty first name | Pass | No student is added. A first name containing only spaces is also ignored. |
| 7 | Add a student with all four inputs | Pass | Alex Test, grade 12 and average 90, appears. Totals update, names clear, grade resets to 9 and average to 70. |
| 8 | Clear all | Pass | No students to show appears and all three totals become 0. |
| 9 | Narrow the browser to phone width | Pass | At 320, 375 and 390 pixels the cards use one column with no horizontal scrolling. At 1280 pixels there are three columns. |
| 10 | Click each navbar link | Pass | Overview, Students and Add a student navigate to the corresponding visible section and URL fragment. |

Additional checks passed: adding after Clear all, rejecting a cleared average and grade 13, accepting an average of 0 or 80.5, and removing one newly added student without removing the other. No browser console errors or uncaught page errors were observed. ESLint and the production build, including TypeScript checking, passed.

## Component behaviour

StudentPortal owns the list and search text. Counts and filtered results are calculated from that list on each render. Children request additions and removals through typed callback props. Updates create new arrays; a new student's id is greater than every id currently in the list.

The add panel uses controlled inputs and a button click. There is no form submission, external data request or persistent storage in this assignment.
