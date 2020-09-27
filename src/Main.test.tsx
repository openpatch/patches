import React from "react";
import { render } from "@testing-library/react";
import { Main, MainProps } from "./Main";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: MainProps) =>
  render(
    <ThemeProvider>
      <Main {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
