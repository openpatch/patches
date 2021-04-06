import { render } from "@testing-library/react";
import {
  LinkComponentProvider,
  LinkComponentProviderProps,
  makeLinkComponent,
} from "./LinkComponentProvider";
import { ThemeProvider } from "./ThemeProvider";

const LinkComponent = makeLinkComponent((props, ref) => (
  <a ref={ref} {...props} />
));

const renderWithTheme = (props?: LinkComponentProviderProps) =>
  render(
    <ThemeProvider>
      <LinkComponentProvider {...props} linkComponent={LinkComponent} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
