
import { render } from "@testing-library/react";
import { FormLabel, FormLabelProps } from "./FormLabel";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: FormLabelProps) =>
render(
    <ThemeProvider>
        <FormLabel {...props} />
    </ThemeProvider>
);

test("should render", () => {
   renderWithTheme();
});

test("should match snapshot", () => {
    const { container } = renderWithTheme();
    expect(container).toMatchSnapshot();
});