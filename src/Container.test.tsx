import { render } from "@testing-library/react";
import { Container, ContainerProps } from "./Container";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: ContainerProps) =>
  render(
    <ThemeProvider>
      <Container {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
