import { render } from "@testing-library/react";
import { FormSuccessText, FormSuccessTextProps } from "./FormSuccessText";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: FormSuccessTextProps) =>
  render(
    <ThemeProvider>
      <FormSuccessText {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
