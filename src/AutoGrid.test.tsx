import { render } from "@testing-library/react";
import { AutoGrid, AutoGridProps } from "./AutoGrid";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: AutoGridProps) =>
  render(
    <ThemeProvider>
      <AutoGrid {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
