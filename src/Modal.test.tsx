import React from "react";
import { render } from "@testing-library/react";
import ReactModal from "react-modal";
import { Modal, ModalProps } from "./Modal";
import * as MockedModal from "./Modal";
import { ThemeProvider } from "./ThemeProvider";

ReactModal.setAppElement(document.createElement("div"));

const renderWithTheme = (props?: ModalProps) =>
  render(
    <ThemeProvider>
      <Modal {...props}>Hi</Modal>
    </ThemeProvider>
  );

beforeEach(() => {
  (MockedModal as any).TRANSITION_DURATION = 0;
});

test("should render", () => {
  renderWithTheme();
});

test("should match snapshot when closed", () => {
  const { container } = renderWithTheme();
  expect(container).toMatchSnapshot();
});

test("should match snapshot when open", () => {
  const { container } = renderWithTheme({ open: true });
  expect(container).toMatchSnapshot();
});
