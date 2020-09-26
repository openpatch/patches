import React from "react";
import { render } from "@testing-library/react";
import { CardHeader, CardHeaderProps } from "./CardHeader";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: CardHeaderProps) =>
  render(
    <ThemeProvider>
      <CardHeader {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
