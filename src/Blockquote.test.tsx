import { render } from "@testing-library/react";
import { Blockquote, BlockquoteProps } from "./Blockquote";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: BlockquoteProps) =>
  render(
    <ThemeProvider>
      <Blockquote {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
