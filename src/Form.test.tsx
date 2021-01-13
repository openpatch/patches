
import { render } from "@testing-library/react";
import { Form, FormProps } from "./Form";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: FormProps) =>
render(
    <ThemeProvider>
        <Form {...props} />
    </ThemeProvider>
);

test("should render", () => {
   renderWithTheme();
});

test("should match snapshot", () => {
    const { container } = renderWithTheme();
    expect(container).toMatchSnapshot();
});