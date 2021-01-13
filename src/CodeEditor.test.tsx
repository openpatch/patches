import { render } from "@testing-library/react";
import { CodeEditor, CodeEditorProps } from "./CodeEditor";
import { ThemeProvider } from "./ThemeProvider";

// WORKAROUND for https://github.com/jsdom/jsdom/issues/3002
document.createRange = () => {
  const range = new Range();

  range.getBoundingClientRect = jest.fn();

  range.getClientRects = () => {
    return {
      item: () => null,
      length: 0,
      [Symbol.iterator]: jest.fn(),
    };
  };

  ((range.startContainer as unknown) as any).getBoundingClientRect = jest.fn();

  return range;
};

const renderWithTheme = (props?: CodeEditorProps) =>
  render(
    <ThemeProvider>
      <CodeEditor {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
