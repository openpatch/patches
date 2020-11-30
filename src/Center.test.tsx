import { render } from "@testing-library/react";
import { Center, CenterProps } from "./Center";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: CenterProps) =>
  render(
    <ThemeProvider>
      <Center {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
