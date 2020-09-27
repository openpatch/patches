import React from "react";
import { render } from "@testing-library/react";
import { Divider, DividerProps } from "./Divider";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: DividerProps) =>
  render(
    <ThemeProvider>
      <Divider {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
