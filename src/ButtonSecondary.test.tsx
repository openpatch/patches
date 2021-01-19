import { render } from "@testing-library/react";
import { createRef, Ref } from "react";
import { ButtonSecondary, ButtonSecondaryProps } from "./ButtonSecondary";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (
  props?: ButtonSecondaryProps,
  ref?: Ref<HTMLButtonElement>
) =>
  render(
    <ThemeProvider>
      <ButtonSecondary {...props} ref={ref}>
        Secondary
      </ButtonSecondary>
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});

test("should have ref", () => {
  const ref = createRef<HTMLButtonElement>();
  renderWithTheme(undefined, ref);
  expect(ref.current.textContent).toEqual("Secondary");
});
