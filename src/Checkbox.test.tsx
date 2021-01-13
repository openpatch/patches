
import { render } from "@testing-library/react";
import { Checkbox, CheckboxProps } from "./Checkbox";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: CheckboxProps) =>
render(
    <ThemeProvider>
        <Checkbox {...props} />
    </ThemeProvider>
);

test("should render", () => {
   renderWithTheme();
});

test("should match snapshot", () => {
    const { container } = renderWithTheme();
    expect(container).toMatchSnapshot();
});