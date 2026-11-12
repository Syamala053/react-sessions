import { readFileSync } from "fs";
import { resolve } from "path";

test("README describes the plant catalogue, its controls and limitations", () => {
  const readme = readFileSync(resolve(process.cwd(), "README.md"), "utf8");

  expect(readme).toMatch(/React and TypeScript plant catalogue/i);
  expect(readme).toMatch(/useReducer/);
  expect(readme).toMatch(/out-of-stock/i);
  expect(readme).toMatch(/adjust the displayed price/i);
  expect(readme).toMatch(/delete a plant/i);
  expect(readme).toMatch(/Add Plant/);
  expect(readme).toMatch(/reset on reload/i);
  expect(readme).toMatch(/no backend or checkout/i);
});
