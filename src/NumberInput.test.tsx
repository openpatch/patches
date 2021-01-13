
import { render } from "@testing-library/react";
import { NumberInput, NumberInputProps } from "./NumberInput";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: NumberInputProps) =>
render(
    <ThemeProvider>
        <NumberInput {...props} />
    </ThemeProvider>
);

test("should render", () => {
   renderWithTheme();
});

test("should match snapshot", () => {
    const { container } = renderWithTheme();
    expect(container).toMatchSnapshot();
});