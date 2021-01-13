
import { render } from "@testing-library/react";
import { FormHelperText, FormHelperTextProps } from "./FormHelperText";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: FormHelperTextProps) =>
render(
    <ThemeProvider>
        <FormHelperText {...props} />
    </ThemeProvider>
);

test("should render", () => {
   renderWithTheme();
});

test("should match snapshot", () => {
    const { container } = renderWithTheme();
    expect(container).toMatchSnapshot();
});