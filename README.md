# React Sessions: plant catalog

React Sessions is a small React and TypeScript plant catalogue demo built with Create React App. It displays a hard-coded collection of plants with images, names, prices and stock status, and demonstrates managing a list with React's `useReducer` and per-card prices with `useState`.

## What the app does

- Displays plant cards; out-of-stock plants appear disabled and have no controls.
- Lets you adjust the displayed price with **+** and **-**, delete a plant, or append `edited` to its name with **Edit** on in-stock cards.
- Adds a predefined plant with **Add Plant**. Each click adds the same sample record rather than opening a form.

The catalogue and price changes live only in browser memory and reset on reload. There is no backend or checkout. Plant images are loaded from external URLs and require network access.

## Getting started

Install Node.js and npm, then from the project directory run:

```sh
npm ci
npm start
```

You can also use `npm install` to install dependencies. Open [http://localhost:3000](http://localhost:3000). The development server reloads when files change.

## Available scripts

- `npm start` — run the development server.
- `npm test` — run the Create React App test runner in interactive watch mode; use `CI=true npm test -- --watchAll=false` for a single run.
- `npm run build` — create an optimized production build in `build/`.
- `npm run eject` — permanently expose the Create React App configuration; this cannot be undone and is not required to run or build the app.

For more on the tooling, see the [Create React App documentation](https://create-react-app.dev/docs/getting-started/).
