import { render } from "@testing-library/react";
import { FormInfoText, FormInfoTextProps } from "./FormInfoText";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: FormInfoTextProps) =>
  render(
    <ThemeProvider>
      <FormInfoText {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
