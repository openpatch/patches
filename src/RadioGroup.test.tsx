import { render } from "@testing-library/react";
import { RadioGroup, RadioGroupProps } from "./RadioGroup";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: RadioGroupProps) =>
  render(
    <ThemeProvider>
      <RadioGroup
        {...props}
        options={[
          {
            value: "test",
          },
        ]}
      />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
