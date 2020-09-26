import React from "react";
import { render } from "@testing-library/react";
import { Grid, GridProps } from "./Grid";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: GridProps) =>
  render(
    <ThemeProvider>
      <Grid {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
