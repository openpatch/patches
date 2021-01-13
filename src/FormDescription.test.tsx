
import { render } from "@testing-library/react";
import { FormDescription, FormDescriptionProps } from "./FormDescription";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: FormDescriptionProps) =>
render(
    <ThemeProvider>
        <FormDescription {...props} />
    </ThemeProvider>
);

test("should render", () => {
   renderWithTheme();
});

test("should match snapshot", () => {
    const { container } = renderWithTheme();
    expect(container).toMatchSnapshot();
});