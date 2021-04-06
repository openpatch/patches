import { Meta, Story } from "@storybook/react/types-6-0";
import { Box } from "./Box";
import { Text } from "./Text";
import { Tooltip, TooltipProps } from "./Tooltip";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {},
} as Meta;

const Template: Story<TooltipProps> = (args) => (
  <Box height="50px" display="flex" justifyContent="center" alignItems="center">
    <Tooltip {...args}>
      <Text>Some Text. This is a longer text.</Text>
    </Tooltip>
  </Box>
);

export const Top = Template.bind({});
Top.args = {
  tooltip: "This is a longer text, which should break after some words.",
  position: "top",
};

export const Left = Template.bind({});
Left.args = {
  tooltip: "This is a longer text.",
  position: "left",
};

export const Right = Template.bind({});
Right.args = {
  tooltip: "This is a longer text, which should break after some words.",
  position: "right",
};

export const Bottom = Template.bind({});
Bottom.args = {
  tooltip: "This is a longer text, which should break after some words.",
  position: "bottom",
};
