# React Sessions: plant catalog

React Sessions is a small React and TypeScript plant catalog built with Create React App. It displays a hard-coded collection of plants with images, names, prices and stock status, and demonstrates managing a list with React's `useReducer` and per-card state with `useState`.

## What it does

- Displays plant cards; out-of-stock plants appear disabled and have no controls.
- Adds a predefined plant with **Add Plant**. The button adds the same plant each time rather than opening a form.
- Lets you delete an in-stock plant or append `edited` to its name with **Edit**.
- Adjusts the displayed price of an in-stock plant with **+** and **-**.

The catalog and price changes live only in memory and reset when the page is reloaded. There is no backend or checkout. Plant images are loaded from external URLs and require network access.

## Getting started

Install Node.js and npm, then from the project directory run:

```sh
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000). The development server reloads when files change.

## Available scripts

- `npm start` — run the development server.
- `npm test` — run tests in interactive watch mode; use `CI=true npm test -- --watchAll=false` for a single run.
- `npm run build` — create a production build in `build/`.
- `npm run eject` — permanently expose the Create React App configuration; this cannot be undone.

For more on the tooling, see the [Create React App documentation](https://create-react-app.dev/docs/getting-started/).
