
import { render } from "@testing-library/react";
import { Input, InputProps } from "./Input";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: InputProps) =>
render(
    <ThemeProvider>
        <Input {...props} />
    </ThemeProvider>
);

test("should render", () => {
   renderWithTheme();
});

test("should match snapshot", () => {
    const { container } = renderWithTheme();
    expect(container).toMatchSnapshot();
});