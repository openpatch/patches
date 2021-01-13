import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";

import { Modal, ModalProps } from "./Modal";
import { CardContent } from "./CardContent";
import { Button } from "./Button";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {},
} as Meta;

const Template: Story<ModalProps> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal {...args} open={open} onClose={() => setOpen(false)}>
        <CardContent>this is a modal</CardContent>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  onClose: action("onClose"),
};
