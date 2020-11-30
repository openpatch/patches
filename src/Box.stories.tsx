import { Story, Meta } from "@storybook/react/types-6-0";

import { Box, BoxProps } from "./Box";
import { Placeholder } from "./private/Placeholder";

export default {
  title: "Layout/Box",
  component: Box,
  argTypes: {},
} as Meta;

// @ts-ignore
const Template: Story<BoxProps> = (args) => (
  <Box {...args}>
    <Placeholder height="40px" />
  </Box>
);

export const Default = Template.bind({});
Default.args = {};

export const Background = Template.bind({});
Background.args = {
  backgroundColor: "primary.500",
};

export const Spacing = Template.bind({});
Spacing.args = {
  pt: "large",
};

export const Responsive = Template.bind({});
Responsive.args = {
  bg: ["error.500", "success.500", "info.500"],
};
