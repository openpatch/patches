import { render } from "@testing-library/react";
import { Box, BoxProps } from "./Box";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: BoxProps) =>
  render(
    <ThemeProvider>
      <Box {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
