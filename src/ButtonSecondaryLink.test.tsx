import { render } from "@testing-library/react";
import {
  ButtonSecondaryLink,
  ButtonSecondaryLinkProps,
} from "./ButtonSecondaryLink";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: ButtonSecondaryLinkProps) =>
  render(
    <ThemeProvider>
      <ButtonSecondaryLink {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
