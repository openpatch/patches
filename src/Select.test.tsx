
import { render } from "@testing-library/react";
import { Select, SelectProps } from "./Select";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: SelectProps) =>
render(
    <ThemeProvider>
        <Select {...props} />
    </ThemeProvider>
);

test("should render", () => {
   renderWithTheme();
});

test("should match snapshot", () => {
    const { container } = renderWithTheme();
    expect(container).toMatchSnapshot();
});