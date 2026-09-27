# CampusAI

CampusAI is a student dashboard for organizing university subjects and exploring a more focused study workflow. It is an early-stage React application, with a working subjects page and additional tools planned.

## Current features

- **Dashboard:** an overview layout with sample study metrics and today's plan. The displayed numbers are demo content.
- **Subjects:** view subject cards, add a subject through a form, and keep added subjects in your browser's local storage.
- **Navigation:** pages for Study Planner, Assignments, Exams, StudyLens, and AI Assistant are present as placeholders for future work.

The AI assistant and StudyLens do not yet provide AI features. There is no backend or account sync; subject data is stored only in the current browser.

## Built with

React · Vite · React Router · JavaScript · CSS

## Run locally

You need a recent Node.js version and npm.

```bash
git clone https://github.com/dionstacey03-dev/CampusAI.git
cd CampusAI
npm ci
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). To make a production build, run `npm run build`.

## Next steps

- Replace dashboard sample data with real study information.
- Build the planner, assignments, and exams workflows.
- Develop StudyLens and AI Assistant after the core study tools work.

Built by [Dion Stacey Sellar](https://github.com/dionstacey03-dev).
