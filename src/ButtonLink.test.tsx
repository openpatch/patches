import { render } from "@testing-library/react";
import { ButtonLink, ButtonLinkProps } from "./ButtonLink";
import { PatchesProvider } from "./PatchesProvider";

const renderWithTheme = (props?: ButtonLinkProps) =>
  render(
    <PatchesProvider>
      <ButtonLink {...props}>Link</ButtonLink>
    </PatchesProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
