import React from "react";
import { render } from "@testing-library/react";
import { ButtonPrimary, ButtonPrimaryProps } from "./ButtonPrimary";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: ButtonPrimaryProps) =>
  render(
    <ThemeProvider>
      <ButtonPrimary {...props}>Button</ButtonPrimary>
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
