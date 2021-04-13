import { render } from "@testing-library/react";
import { ButtonOutlineLink, ButtonOutlineLinkProps } from "./ButtonOutlineLink";
import { PatchesProvider } from "./PatchesProvider";

const renderWithTheme = (props?: ButtonOutlineLinkProps) =>
  render(
    <PatchesProvider>
      <ButtonOutlineLink {...props}>Link</ButtonOutlineLink>
    </PatchesProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
