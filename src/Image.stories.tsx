import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Image, ImageProps } from "./Image";

export default {
  title: "Components/Image",
  component: Image,
  argTypes: {},
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
