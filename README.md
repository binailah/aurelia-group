# Aurelia Group — Official Website

A complete, production-ready website for Aurelia Group: a portfolio of 23 restaurants across six collections and four continents. Built with React + Vite, React Router, and structured, hand-authored menu data — no backend, no database, deployable as a static site to GitHub Pages.

## What's inside

- **6 collection pages**: Signature House, Family Collection, Business & Executive House, Social Club, Resort House, Heritage Collection
- **23 restaurant pages**, each with its own route, story, atmosphere and menu link
- **A structured digital menu system** — five shared collection menus (with per-restaurant regional adaptations) plus seven fully unique Heritage Collection menus
- **The House** — an editorial manifesto page
- **Reservations** — a request form (front-end only; wire up a backend or a service like Formspree to receive submissions)

All menu content is sourced from the two Aurelia Group Menu Books supplied for this project and is stored as structured data — never as images or embedded PDFs.

## Project structure

```
aurelia-group/
├── public/
│   └── assets/                 # drop restaurant/collection photography here
├── src/
│   ├── components/             # Header, Footer, cards, menu renderer, etc.
│   ├── pages/                  # one file per route
│   ├── data/
│   │   ├── collections.js      # the 6 collections
│   │   ├── restaurants.js      # all 23 restaurants — edit this to add/change a restaurant
│   │   └── menus/
│   │       ├── signature-house.js
│   │       ├── family-collection.js
│   │       ├── business-executive.js
│   │       ├── social-club.js
│   │       ├── resort-house.js
│   │       ├── index.js        # loader — imports every menu file
│   │       └── heritage/       # one fully unique file per Heritage restaurant
│   ├── styles/global.css       # the entire design system (tokens + components)
│   ├── App.jsx                 # route table
│   └── main.jsx                # entry point (HashRouter)
├── index.html
├── package.json
└── vite.config.js
```

## 1. Install

Requires Node.js 18+.

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Opens at `http://localhost:5173`.

## 3. Edit restaurant data

Open `src/data/restaurants.js`. Each restaurant is one object with: `slug`, `name`, `city`, `country`, `collection` (must match a slug in `collections.js`), `avgCheck`, `positioning`, `story`, `atmosphere`, `interiorConcept`, `diningExperience`, `locationNotes`, and — for shared-menu collections only — `hasAdaptation` / `adaptationNote`. Heritage restaurants instead carry a `heritageMenu` key pointing at their file in `src/data/menus/heritage/`.

Edit the text fields directly; nothing else needs to change for a content-only update.

## 4. Replace restaurant photographs

Every restaurant and collection page currently renders a deliberate placeholder (`PlaceholderImage` component) instead of a broken image. To add a real photo:

1. Drop the image in `public/assets/restaurants/` (or `collections/`), e.g. `aurelia-mayfair.jpg`.
2. In `src/components/RestaurantCard.jsx` and `src/pages/RestaurantDetail.jsx`, replace `<PlaceholderImage label={...} />` with:
   ```jsx
   <img src="/assets/restaurants/aurelia-mayfair.jpg" alt="Aurelia Mayfair dining room" />
   ```
   Each restaurant has exactly one dedicated image slot by design — do not add galleries.

## 5. Edit menus

- **Shared-collection menus** (Signature House, Family, Business & Executive, Social Club, Resort House): edit the relevant file in `src/data/menus/`. Every restaurant in that collection updates automatically. Restaurant-specific additions live on the restaurant object (`adaptationNote` in `restaurants.js`), not in the menu file.
- **Heritage menus**: each restaurant has its own file in `src/data/menus/heritage/`. Edit that file directly — nothing is shared between Heritage restaurants.

Menu files are plain data (`sections: [{ title, items: [{ name, desc, price }] }]`) — no markup to worry about.

## 6. Add a restaurant

1. Add an object to `src/data/restaurants.js` with a unique `slug`.
2. If it belongs to a shared-menu collection, that's it — it will inherit the collection menu automatically. Add `hasAdaptation: true` and `adaptationNote` if it has local additions.
3. If it belongs to the Heritage Collection, create a new file in `src/data/menus/heritage/`, add it to `src/data/menus/index.js`, and set `heritageMenu` on the restaurant to match.
4. Add a photo per step 4 above (optional — the placeholder will render cleanly until you do).

## 7. Deploy to GitHub Pages

This project uses `HashRouter` (URLs look like `/#/restaurants/aurelia-mayfair`), which needs no special GitHub Pages routing configuration — it works out of the box from any repository path, including a project subdirectory.

1. Push the project to a GitHub repository.
2. In `vite.config.js`, `base: './'` is already set for relative asset paths — no change needed for a standard project-page deployment (`username.github.io/repo-name`).
3. Build the site:
   ```bash
   npm run build
   ```
   This produces a `dist/` folder.
4. Deploy `dist/` to the `gh-pages` branch. The simplest approach:
   ```bash
   npm install --save-dev gh-pages
   npx gh-pages -d dist
   ```
   Then in your repository settings, set GitHub Pages to serve from the `gh-pages` branch.
5. Alternatively, use a GitHub Actions workflow that runs `npm run build` and publishes `dist/` on every push to `main`.

No environment variables, backend, or database are required.

## Notes

- Prices and dish descriptions are drawn directly from the supplied Menu Books. No dish, price, chef name, award, or opening date has been invented.
- Where information (address, opening date, chef, awards) was not supplied, the corresponding field was intentionally left out rather than fabricated — add it in `restaurants.js` once available.
- Network access was unavailable in the environment this project was built in, so `npm install` / `npm run build` have not been executed end-to-end here. The code has been checked for syntax and for correct data cross-references (every restaurant resolves to a real collection and a real menu); run `npm install && npm run build` on your own machine as the final check before deploying.
