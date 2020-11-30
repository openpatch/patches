import { render } from "@testing-library/react";
import { ButtonOutline, ButtonOutlineProps } from "./ButtonOutline";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: ButtonOutlineProps) =>
  render(
    <ThemeProvider>
      <ButtonOutline {...props}>Outline</ButtonOutline>
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
