# React Sessions

React Sessions is a small React and TypeScript plant catalogue demo. It displays a
hard-coded list of plants with images, names and prices, and demonstrates managing
list changes with React's `useReducer` and per-card prices with `useState`.

## What the app does

- Displays plant cards and marks out-of-stock plants as unavailable.
- Lets you adjust the displayed price, delete a plant, or append `edited` to its
  name using the controls on in-stock cards. These controls are hidden for
  out-of-stock plants.
- Adds a predefined plant when you click **Add Plant**. Each click adds the same
  sample record; it is not a form for entering a new plant.

The catalogue and price changes live only in browser memory and reset on reload.
There is no backend or checkout. Plant images are loaded from external URLs, so
an internet connection is needed to display them.

## Getting started

Install Node.js and npm, then install dependencies and start the development server:

```sh
npm ci
npm start
```

Open [http://localhost:3000](http://localhost:3000). The app reloads as you edit
its source.

## Other commands

- `npm test` runs the Create React App test runner in watch mode. Use
  `CI=true npm test -- --watchAll=false` for a single run.
- `npm run build` creates an optimized production build in `build/`.
- `npm run eject` exposes the Create React App configuration. This is a one-way
  operation; ejecting is not required to run or build the app.

The app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
