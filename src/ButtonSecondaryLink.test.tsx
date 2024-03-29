import { render } from "@testing-library/react";
import {
  ButtonSecondaryLink,
  ButtonSecondaryLinkProps,
} from "./ButtonSecondaryLink";
import { PatchesProvider } from "./PatchesProvider";

const renderWithTheme = (props?: ButtonSecondaryLinkProps) =>
  render(
    <PatchesProvider>
      <ButtonSecondaryLink {...props}>Link</ButtonSecondaryLink>
    </PatchesProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
