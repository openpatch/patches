import { render } from "@testing-library/react";
import { createRef, Ref } from "react";
import { Link, LinkProps } from "./Link";
import { ThemeProvider } from "./ThemeProvider";

const title = "A Link";

const renderWithTheme = (props?: LinkProps, ref?: Ref<HTMLAnchorElement>) =>
  render(
    <ThemeProvider>
      <Link {...props} href="#" ref={ref}>
        {title}
      </Link>
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
  const ref = createRef<HTMLAnchorElement>();
  renderWithTheme(undefined, ref);
  expect(ref.current.text).toEqual(title);
});
