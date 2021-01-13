
import { render } from "@testing-library/react";
import { InputAddon, InputAddonProps } from "./InputAddon";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: InputAddonProps) =>
render(
    <ThemeProvider>
        <InputAddon {...props} />
    </ThemeProvider>
);

test("should render", () => {
   renderWithTheme();
});

test("should match snapshot", () => {
    const { container } = renderWithTheme();
    expect(container).toMatchSnapshot();
});