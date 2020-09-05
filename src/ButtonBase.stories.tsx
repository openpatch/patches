import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { ButtonBase, ButtonBaseProps } from "./ButtonBase";
import * as solidIcons from "./icons/solid";

const icons = Object.keys(solidIcons);

export default {
  title: "Design System/ButtonBase",
  component: ButtonBase,
  argTypes: {
    iconLeft: {
      control: {
        type: "select",
        options: icons,
      },
    },
    iconRight: {
      control: {
        type: "select",
        options: icons,
      },
    },
  },
} as Meta;

const Template: Story = ({
  iconLeft,
  iconRight,
  label = "A Button",
  ...args
}) => {
  const IconLeft = solidIcons[iconLeft];
  const IconRight = solidIcons[iconRight];
  return (
    <ButtonBase
      label={label}
      {...args}
      iconLeft={IconLeft && <IconLeft />}
      iconRight={IconRight && <IconRight />}
    />
  );
};

export const Default = Template.bind({});

export const WithIconLeft = Template.bind({});
WithIconLeft.args = {
  iconLeft: "Archive",
};

export const WithIconRight = Template.bind({});
WithIconRight.args = {
  iconRight: "Archive",
};
