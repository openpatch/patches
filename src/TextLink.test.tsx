import { render } from "@testing-library/react";
import { TextLink, TextLinkProps } from "./TextLink";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: TextLinkProps) =>
  render(
    <ThemeProvider>
      <TextLink href="/" {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
