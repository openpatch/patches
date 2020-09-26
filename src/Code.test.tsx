import React from "react";
import { render } from "@testing-library/react";
import { Code, CodeProps } from "./Code";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: CodeProps) =>
  render(
    <ThemeProvider>
      <Code {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
