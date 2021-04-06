import { render } from "@testing-library/react";
import { Tabs, TabsProps } from "./Tabs";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: TabsProps) =>
  render(
    <ThemeProvider>
      <Tabs {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
