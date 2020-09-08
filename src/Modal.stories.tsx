import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Modal, ModalProps } from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {},
} as Meta;

const Template: Story<ModalProps> = (args) => (
  <Modal {...args}>this is a modal</Modal>
);

export const Default = Template.bind({});
