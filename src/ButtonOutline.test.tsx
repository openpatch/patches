import { render } from "@testing-library/react";
import { createRef, Ref } from "react";
import { ButtonOutline, ButtonOutlineProps } from "./ButtonOutline";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (
  props?: ButtonOutlineProps,
  ref?: Ref<HTMLButtonElement>
) =>
  render(
    <ThemeProvider>
      <ButtonOutline {...props} ref={ref}>
        Outline
      </ButtonOutline>
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
  expect(ref.current.textContent).toEqual("Outline");
});
