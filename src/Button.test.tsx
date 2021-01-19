import { render } from "@testing-library/react";
import { createRef, Ref } from "react";
import { Button, ButtonProps } from "./Button";
import { ThemeProvider } from "./ThemeProvider";

const title = "A Link";

const renderWithTheme = (props?: ButtonProps, ref?: Ref<HTMLButtonElement>) =>
  render(
    <ThemeProvider>
      <Button {...props} ref={ref}>
        {title}
      </Button>
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
  expect(ref.current.textContent).toEqual(title);
});
