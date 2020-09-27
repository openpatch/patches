import React from "react";
import { render } from "@testing-library/react";
import { Heading, HeadingProps } from "./Heading";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: HeadingProps) =>
  render(
    <ThemeProvider>
      <Heading {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
