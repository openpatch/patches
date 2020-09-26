import React from "react";
import { render } from "@testing-library/react";
import { Flex, FlexProps } from "./Flex";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: FlexProps) =>
  render(
    <ThemeProvider>
      <Flex {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
