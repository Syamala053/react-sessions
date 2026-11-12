# Summary

Describe the plant catalogue in the README

## What changed

Replaced the Create React App boilerplate with a project overview, current controls and limitations, setup instructions, and available commands.

## Decisions

Described the existing demo rather than implying a full shop: plant data and edits are in memory, Add Plant inserts a fixed record, and images use external URLs. Retained the eject warning and Create React App link.

## How each criterion is met

- **Update readme with good project description:** `README describes the plant catalogue, its controls and limitations` checks key details are present; `the plant catalogue behaves as described in the README` checks the documented controls and reset behavior against the app. The description and setup instructions were also reviewed against the source and package scripts.

## How to verify

Read `README.md` and run `CI=true npm test -- --watchAll=false --runInBand`.

## Tests

- Added `src/README.test.ts` for the description and `src/App.test.tsx` for the documented catalogue behavior.
- Test suite: initial run passed (1 test); final run passed (2 tests). Create React App emitted a dependency warning; the final run also warned about an open handle after tests completed.
- Typecheck: `npx tsc --noEmit` passed on both runs.
- Lint: `npx eslint src --ext .ts,.tsx` initially reported direct node access in the new test; after scoping an exception for cards without accessible roles, it passed.
- `git diff --check` passed.

## Docs updated

`README.md` and this change note. No other project instruction or API docs were present.

## Open questions

None.
