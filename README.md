A pokemon style game I built in 2 days for [https://replit.com/site/kajam](https://replit.com/site/kajam) Replit - Kajam challenge.

Built with React, Redux, React Router, Vite and Tailwind CSS.

### `npm install` — install packages
### `npm start` — start the dev server
### `npm run build` — build to `dist/`
### `npm run preview` — serve the production build locally
### `npm run deploy` — build and publish `dist/` to the `gh-pages` branch

The game is served from a sub-path (`/PlutosRevenge/`, set as `base` in
`vite.config.js`), so the dev server opens at
[http://localhost:5173/PlutosRevenge/](http://localhost:5173/PlutosRevenge/).

### Sessions

Progress is kept locally so a reload resumes the run, and mirrored to the game's
own Supabase project when it is configured. Copy `.env.example` to `.env` and
fill in `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`; the schema and RLS
policies live in `supabase/schema.sql`, and the project needs anonymous sign-ins
enabled. Without a `.env` the game is fully playable and persists locally only.
