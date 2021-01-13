import { render } from "@testing-library/react";
import { MarkdownEditor, MarkdownEditorProps } from "./MarkdownEditor";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: MarkdownEditorProps) =>
  render(
    <ThemeProvider>
      <MarkdownEditor {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
