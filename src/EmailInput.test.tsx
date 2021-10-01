import { render } from "@testing-library/react";
import { EmailInput, EmailInputProps } from "./EmailInput";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: EmailInputProps) =>
  render(
    <ThemeProvider>
      <EmailInput {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
