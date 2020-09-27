import React from "react";
import { render } from "@testing-library/react";
import { Footer, FooterProps } from "./Footer";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: FooterProps) =>
  render(
    <ThemeProvider>
      <Footer {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
