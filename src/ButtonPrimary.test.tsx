import { render } from "@testing-library/react";
import { createRef, Ref } from "react";
import { ButtonPrimary, ButtonPrimaryProps } from "./ButtonPrimary";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (
  props?: ButtonPrimaryProps,
  ref?: Ref<HTMLButtonElement>
) =>
  render(
    <ThemeProvider>
      <ButtonPrimary {...props} ref={ref}>
        Button
      </ButtonPrimary>
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
  expect(ref.current.textContent).toEqual("Button");
});
