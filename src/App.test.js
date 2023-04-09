import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header component", () => {
  render(<App />);
  const headerElement = screen.getByTestId("header");
  expect(headerElement).toBeInTheDocument();
});

test("renders main component", () => {
  render(<App />);
  const mainElement = screen.getByTestId("main");
  expect(mainElement).toBeInTheDocument();
});

test("renders footer component", () => {
  render(<App />);
  const footerElement = screen.getByTestId("footer");
  expect(footerElement).toBeInTheDocument();
});