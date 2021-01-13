
import { render } from "@testing-library/react";
import { Textarea, TextareaProps } from "./Textarea";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: TextareaProps) =>
render(
    <ThemeProvider>
        <Textarea {...props} />
    </ThemeProvider>
);

test("should render", () => {
   renderWithTheme();
});

test("should match snapshot", () => {
    const { container } = renderWithTheme();
    expect(container).toMatchSnapshot();
});