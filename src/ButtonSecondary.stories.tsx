import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { ButtonSecondary, ButtonSecondaryProps } from "./ButtonSecondary";
import * as solidIcons from "./icons/solid";

const icons = Object.keys(solidIcons);

export default {
  title: "Design System/ButtonSecondary",
  component: ButtonSecondary,
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
    <ButtonSecondary
      label={label}
      {...args}
      iconLeft={IconLeft && <IconLeft />}
      iconRight={IconRight && <IconRight />}
    />
  );
};

export const Default = Template.bind({});
