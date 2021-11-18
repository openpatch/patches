import { render } from "@testing-library/react";
import { TextEditor, TextEditorProps } from "./TextEditor";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: TextEditorProps) =>
  render(
    <ThemeProvider>
      <TextEditor {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
