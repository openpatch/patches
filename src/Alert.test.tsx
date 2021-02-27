import { render } from "@testing-library/react";
import { Alert, AlertProps } from "./Alert";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: AlertProps) =>
  render(
    <ThemeProvider>
      <Alert {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
