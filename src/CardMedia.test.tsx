import React from "react";
import { render } from "@testing-library/react";
import { CardMedia, CardMediaProps } from "./CardMedia";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: CardMediaProps) =>
  render(
    <ThemeProvider>
      <CardMedia {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
