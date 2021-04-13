import { render } from "@testing-library/react";
import { ButtonPrimaryLink, ButtonPrimaryLinkProps } from "./ButtonPrimaryLink";
import { PatchesProvider } from "./PatchesProvider";

const renderWithTheme = (props?: ButtonPrimaryLinkProps) =>
  render(
    <PatchesProvider>
      <ButtonPrimaryLink {...props}>Link</ButtonPrimaryLink>
    </PatchesProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
