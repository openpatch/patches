import { render } from "@testing-library/react";
import { Tooltip, TooltipProps } from "./Tooltip";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: TooltipProps) =>
  render(
    <ThemeProvider>
      <Tooltip {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
