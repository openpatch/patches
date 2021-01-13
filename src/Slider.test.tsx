
import { render } from "@testing-library/react";
import { Slider, SliderProps } from "./Slider";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: SliderProps) =>
render(
    <ThemeProvider>
        <Slider {...props} />
    </ThemeProvider>
);

test("should render", () => {
   renderWithTheme();
});

test("should match snapshot", () => {
    const { container } = renderWithTheme();
    expect(container).toMatchSnapshot();
});