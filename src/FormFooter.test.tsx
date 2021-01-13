
import { render } from "@testing-library/react";
import { FormFooter, FormFooterProps } from "./FormFooter";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: FormFooterProps) =>
render(
    <ThemeProvider>
        <FormFooter {...props} />
    </ThemeProvider>
);

test("should render", () => {
   renderWithTheme();
});

test("should match snapshot", () => {
    const { container } = renderWithTheme();
    expect(container).toMatchSnapshot();
});