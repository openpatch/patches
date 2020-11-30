import { render } from "@testing-library/react";
import { Markdown, MarkdownProps } from "./Markdown";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: MarkdownProps) =>
  render(
    <ThemeProvider>
      <Markdown markdown={`# Hi`} {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
