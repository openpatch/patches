import { render } from "@testing-library/react";
import { ButtonOutlineLink, ButtonOutlineLinkProps } from "./ButtonOutlineLink";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: ButtonOutlineLinkProps) =>
  render(
    <ThemeProvider>
      <ButtonOutlineLink {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
