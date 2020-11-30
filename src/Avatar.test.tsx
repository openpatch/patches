import { render } from "@testing-library/react";
import { Avatar, AvatarProps } from "./Avatar";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: AvatarProps) =>
  render(
    <ThemeProvider>
      <Avatar {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
