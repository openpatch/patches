import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "./ThemeProvider";
import { Default } from "./CardHeader.stories";

const renderWithTheme = () =>
  render(
    <ThemeProvider>
      <Default>Header</Default>
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
