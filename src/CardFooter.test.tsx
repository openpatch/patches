import React from "react";
import { render } from "@testing-library/react";
import { CardFooter, CardFooterProps } from "./CardFooter";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: CardFooterProps) =>
  render(
    <ThemeProvider>
      <CardFooter {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
