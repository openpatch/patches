import { render } from "@testing-library/react";
import { createRef } from "react";
import { Select, SelectProps } from "./Select";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: SelectProps) =>
  render(
    <ThemeProvider>
      <Select {...props} />
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
  const ref = createRef<HTMLSelectElement>();
  renderWithTheme({ ref });

  expect(ref.current).not.toBeNull();
  expect(ref.current.value).toBe("");
});
