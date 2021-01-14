import { render } from "@testing-library/react";
import { FormWarningText, FormWarningTextProps } from "./FormWarningText";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: FormWarningTextProps) =>
  render(
    <ThemeProvider>
      <FormWarningText {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
