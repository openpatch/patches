import React from "react";
import { render } from "@testing-library/react";
import { Badge, BadgeProps } from "./Badge";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: BadgeProps) =>
  render(
    <ThemeProvider>
      <Badge {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
