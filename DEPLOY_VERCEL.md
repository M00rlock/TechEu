# Deploy to Vercel

This project is prepared for Vercel as a single deployment:

- Angular frontend is served as a static SPA from `frontend/dist/frontend/browser`
- NestJS backend is exposed as a Vercel Serverless Function under `/api/*`
- Frontend production API URL is `/api`, so it uses the same deployed domain

## 1. Push to GitHub

```bash
git add .
git commit -m "Prepare project for Vercel deployment"
git push
```

## 2. Import project in Vercel

In Vercel:

1. New Project → Import your GitHub repository
2. Keep the project root as the repository root
3. Vercel will read `vercel.json`, so you do not need to manually set build/output commands

The important Vercel settings are already in `vercel.json`:

```json
{
  "installCommand": "npm install",
  "buildCommand": "npm run vercel-build",
  "outputDirectory": "frontend/dist/frontend/browser"
}
```

## 3. Add environment variables

Add this in Vercel → Project → Settings → Environment Variables:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
```

Optional:

```bash
FRONTEND_URL="https://your-project.vercel.app"
```

## 4. Prepare database

Before production usage, run migrations against your production PostgreSQL database from your local machine or CI:

```bash
cd backend
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public" npm run db:migrate
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public" npm run db:seed
```

For a quick demo, hosted PostgreSQL providers like Neon, Supabase, Railway, or Render are fine.

## 5. Local dev after changes

Backend:

```bash
cd backend
npm install
npm run db:generate
npm run start:dev
```

Frontend:

```bash
cd frontend
npm install
npm start
```

Local frontend calls the backend at:

```bash
http://localhost:3001/api
```

Production frontend calls:

```bash
/api
```
