# Jean Choe — Leadership e-Portfolio

A Vite + React site for LEAD 495, Spring 2026.

## Run locally

```bash
npm install
npm run dev
```

Visit the URL printed in your terminal (usually `http://localhost:5173`).

## Build

```bash
npm run build
```

The static site lands in `dist/`. Drag that folder into Netlify, GitHub Pages, Vercel, or anything else that serves static files.

## Deploy to GitHub Pages

1. Create a new repo on GitHub (e.g. `leadership-portfolio`).
2. Push this code to it:

   ```bash
   git init
   git add .
   git commit -m "initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. Open `vite.config.js` and change the `base` value from `'./'` to `'/YOUR_REPO_NAME/'`. Commit and push.

4. Install the deploy helper (already in `devDependencies`), then deploy:

   ```bash
   npm install
   npm run build
   npm run deploy
   ```

   That publishes the `dist/` folder to the `gh-pages` branch.

5. In the repo on GitHub, go to **Settings → Pages**, set source to **`gh-pages` branch / root**, save.

6. Site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`.

### If you want a custom domain or a root-level site

If your repo is named `YOUR_USERNAME.github.io` (a user/organization site), set `base: '/'` instead.

## Replace the artifact placeholders with real images

Right now each artifact is a stylized SVG illustration. To swap in your real artifact photos:

1. Drop the image files into `/public/` (e.g. `/public/leadership-model.png`).
2. Open the relevant data file (`src/data/curricular.js` or `src/data/cocurricular.js`).
3. Find the experience's `artifact` object and either:
   - Change `type` to something the `ArtifactArt` component supports, or
   - Edit `src/components/ExperienceCard.jsx` to render `<img src="/leadership-model.png" />` instead of the `<ArtifactArt />` component for experiences that have a real image attached.

## File structure

```
src/
  App.jsx                 ← top-level layout
  main.jsx                ← React entry
  components/
    Nav.jsx               ← top navigation
    Reveal.jsx            ← scroll-triggered fade-in wrapper
    ExperienceCard.jsx    ← card used for both curricular & co-curricular
    ArtifactArt.jsx       ← stylized SVG artifact placeholders
    useInView.js          ← intersection observer hook
  sections/
    Hero.jsx              ← opening
    Introduction.jsx      ← core values, identities, why, future goals
    Philosophy.jsx        ← definition, evolution, identity & social location
    Curricular.jsx        ← six courses
    CoCurricular.jsx      ← six co-curricular experiences
    Closing.jsx           ← competency counter + index + sign-off
  data/
    intro.js              ← core values, identities, why, future goals
    philosophy.js         ← definition, evolution, identity & social location
    curricular.js         ← all curricular experiences
    cocurricular.js       ← all co-curricular experiences
  styles/
    global.css            ← design tokens, typography, animations
```

## Edit the content

All written content lives in the four files in `src/data/`. You can edit those without touching any React code. Save the file and the dev server will hot-reload.
