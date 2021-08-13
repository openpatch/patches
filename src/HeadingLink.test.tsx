import { render } from "@testing-library/react";
import { HeadingLink, HeadingLinkProps } from "./HeadingLink";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: HeadingLinkProps) =>
  render(
    <ThemeProvider>
      <HeadingLink {...props} href="#" />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
