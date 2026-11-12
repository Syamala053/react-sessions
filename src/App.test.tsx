import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

test("the plant catalogue behaves as described in the README", () => {
  const { unmount } = render(<App />);
  // Plant cards have no accessible role, so scope queries to their containers.
  /* eslint-disable testing-library/no-node-access */
  const inStock = screen.getByText("Aglaonema Pink Anjamani").parentElement!;
  const outOfStock = screen.getByText("Monstera Deliciosa").parentElement!;
  /* eslint-enable testing-library/no-node-access */

  expect(within(inStock).getByText("250")).toBeInTheDocument();
  expect(outOfStock).toHaveClass("disable");
  expect(within(outOfStock).queryByRole("button")).not.toBeInTheDocument();

  fireEvent.click(within(inStock).getByRole("button", { name: "+" }));
  expect(within(inStock).getByText("251")).toBeInTheDocument();
  fireEvent.click(within(inStock).getByRole("button", { name: "Edit" }));
  expect(screen.getByText("Aglaonema Pink Anjamaniedited")).toBeInTheDocument();
  fireEvent.click(within(inStock).getByRole("button", { name: "Delete" }));
  expect(screen.queryByText("Aglaonema Pink Anjamaniedited")).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Add Plant" }));
  expect(screen.getByText("Aglaonema Pink Anjamani (Large)")).toBeInTheDocument();

  unmount();
  render(<App />);
  expect(screen.getByText("Aglaonema Pink Anjamani")).toBeInTheDocument();
  expect(screen.getByText("250")).toBeInTheDocument();
  expect(screen.queryByText("Aglaonema Pink Anjamani (Large)")).not.toBeInTheDocument();
});
