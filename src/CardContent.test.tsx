import React from "react";
import { render } from "@testing-library/react";
import { CardContent, CardContentProps } from "./CardContent";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: CardContentProps) =>
  render(
    <ThemeProvider>
      <CardContent {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
