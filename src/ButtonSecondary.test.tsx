import React from "react";
import { render } from "@testing-library/react";
import { ButtonSecondary, ButtonSecondaryProps } from "./ButtonSecondary";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: ButtonSecondaryProps) =>
  render(
    <ThemeProvider>
      <ButtonSecondary {...props}>Secondary</ButtonSecondary>
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
