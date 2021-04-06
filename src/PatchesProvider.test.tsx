import { render } from "@testing-library/react";
import { PatchesProvider, PatchesProviderProps } from "./PatchesProvider";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: PatchesProviderProps) =>
  render(
    <ThemeProvider>
      <PatchesProvider {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
