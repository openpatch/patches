import { render } from "@testing-library/react";
import { createRef } from "react";
import { Textarea, TextareaProps } from "./Textarea";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: TextareaProps) =>
  render(
    <ThemeProvider>
      <Textarea {...props} />
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
  const ref = createRef<HTMLTextAreaElement>();
  renderWithTheme({ ref });

  expect(ref.current).not.toBeNull();
  expect(ref.current.value).toBe("");
});
