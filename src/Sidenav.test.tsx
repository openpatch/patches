import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "./ThemeProvider";
import { Default } from "./Sidenav.stories";

const renderWithTheme = () =>
  render(
    <ThemeProvider>
      <Default />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
