import React from "react";
import { render } from "@testing-library/react";
import { LoadingDots, LoadingDotsProps } from "./LoadingDots";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: LoadingDotsProps) =>
  render(
    <ThemeProvider>
      <LoadingDots {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
