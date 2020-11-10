import React from "react";
import { render } from "@testing-library/react";
import { FeaturePreview, FeaturePreviewProps } from "./FeaturePreview";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: FeaturePreviewProps) =>
  render(
    <ThemeProvider>
      <FeaturePreview
        title="Interactive Tasks"
        description="Highlighting, Puzzles and Coding to name a few. Interactive tasks are a great way to make use of the digital format. Each tasks can automatically be evaluated."
        src="https://f002.backblazeb2.com/file/openpatch-static/interactive.mp4"
        {...props}
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
