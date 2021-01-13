
import { render } from "@testing-library/react";
import { InputGroup, InputGroupProps } from "./InputGroup";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: InputGroupProps) =>
render(
    <ThemeProvider>
        <InputGroup {...props} />
    </ThemeProvider>
);

test("should render", () => {
   renderWithTheme();
});

test("should match snapshot", () => {
    const { container } = renderWithTheme();
    expect(container).toMatchSnapshot();
});