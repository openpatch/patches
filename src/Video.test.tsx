import React from "react";
import { render } from "@testing-library/react";
import { Video, VideoProps } from "./Video";
import { ThemeProvider } from "./ThemeProvider";

const renderWithTheme = (props?: VideoProps) =>
  render(
    <ThemeProvider>
      <Video
        {...props}
        src="https://f002.backblazeb2.com/file/openpatch-static/interactive.mp4"
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
