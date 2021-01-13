
import { render } from "@testing-library/react";
import { PatternCenter, PatternCenterProps } from "./PatternCenter";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: PatternCenterProps) =>
render(
    <ThemeProvider>
        <PatternCenter {...props} />
    </ThemeProvider>
);

test("should render", () => {
   renderWithTheme();
});

test("should match snapshot", () => {
    const { container } = renderWithTheme();
    expect(container).toMatchSnapshot();
});