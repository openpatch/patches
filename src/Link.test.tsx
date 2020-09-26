import React from "react";
import { render } from "@testing-library/react";
import { Link, LinkProps } from "./Link";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: LinkProps) =>
  render(
    <ThemeProvider>
      <Link {...props} href="#" />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
