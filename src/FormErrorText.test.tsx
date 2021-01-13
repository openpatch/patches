
import { render } from "@testing-library/react";
import { FormErrorText, FormErrorTextProps } from "./FormErrorText";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: FormErrorTextProps) =>
render(
    <ThemeProvider>
        <FormErrorText {...props} />
    </ThemeProvider>
);

test("should render", () => {
   renderWithTheme();
});

test("should match snapshot", () => {
    const { container } = renderWithTheme();
    expect(container).toMatchSnapshot();
});