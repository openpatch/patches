import React from "react";
import { render } from "@testing-library/react";
import { Modal, ModalProps } from "./Modal";
import ThemeProvider from "./themes/ThemeProvider";
import base from "./themes/base";

const renderWithTheme = (props?: ModalProps) =>
  render(
    <ThemeProvider theme={base}>
      <Modal {...props} />
    </ThemeProvider>
  );

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});
