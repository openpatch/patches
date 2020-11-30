import { render } from "@testing-library/react";
import { Image, ImageProps } from "./Image";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: ImageProps) =>
  render(
    <ThemeProvider>
      <Image {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
