
import { render } from "@testing-library/react";
import { FormHeader, FormHeaderProps } from "./FormHeader";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: FormHeaderProps) =>
render(
    <ThemeProvider>
        <FormHeader {...props} />
    </ThemeProvider>
);

test("should render", () => {
   renderWithTheme();
});

test("should match snapshot", () => {
    const { container } = renderWithTheme();
    expect(container).toMatchSnapshot();
});