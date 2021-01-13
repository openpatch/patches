
import { render } from "@testing-library/react";
import { PasswordInput, PasswordInputProps } from "./PasswordInput";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: PasswordInputProps) =>
render(
    <ThemeProvider>
        <PasswordInput {...props} />
    </ThemeProvider>
);

test("should render", () => {
   renderWithTheme();
});

test("should match snapshot", () => {
    const { container } = renderWithTheme();
    expect(container).toMatchSnapshot();
});