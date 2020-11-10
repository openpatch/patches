import React from "react";
import { render } from "@testing-library/react";
import { Pattern, PatternProps } from "./Pattern";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: PatternProps) =>
  render(
    <ThemeProvider>
      <Pattern {...props} backgroundColor="#FFF" foregroundColor="#000" />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
