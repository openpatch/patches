import { render } from "@testing-library/react";
import { ButtonPrimaryLink, ButtonPrimaryLinkProps } from "./ButtonPrimaryLink";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: ButtonPrimaryLinkProps) =>
  render(
    <ThemeProvider>
      <ButtonPrimaryLink {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
