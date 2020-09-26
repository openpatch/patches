import React from "react";
import { render } from "@testing-library/react";
import { Text, TextProps } from "./Text";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: TextProps) =>
  render(
    <ThemeProvider>
      <Text {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
