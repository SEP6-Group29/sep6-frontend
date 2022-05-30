import React from "react";
import { screen } from "@testing-library/react";
import { render } from "./test-utils";
import App2 from "./App2";

test("renders learn react link", () => {
  render(<App2 />);
  const linkElement = screen.getByText(/learn chakra/i);
  expect(linkElement).toBeInTheDocument();
});
