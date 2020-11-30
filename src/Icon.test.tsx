import { render } from "@testing-library/react";
import { Icon, IconProps } from "./Icon";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: IconProps) =>
  render(
    <ThemeProvider>
      <Icon {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot when small", () => {
  const { container } = renderWithTheme({ size: "small" });
  expect(container).toMatchSnapshot();
});

test("should match snapshot when large", () => {
  const { container } = renderWithTheme({ size: "large" });
  expect(container).toMatchSnapshot();
});
