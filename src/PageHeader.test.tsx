import React from "react";
import { render } from "@testing-library/react";
import { PageHeader, PageHeaderProps } from "./PageHeader";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: PageHeaderProps) =>
  render(
    <ThemeProvider>
      <PageHeader {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
