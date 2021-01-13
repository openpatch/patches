import { render } from "@testing-library/react";
import { Group, GroupProps } from "./Group";
import { ThemeProvider } from "./ThemeProvider";

Date.now = jest.fn(() => 1610568607249);
const renderWithTheme = (props?: GroupProps) =>
  render(
    <ThemeProvider>
      <Group {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
