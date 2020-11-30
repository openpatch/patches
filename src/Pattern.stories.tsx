import { Story, Meta } from "@storybook/react/types-6-0";

import { Pattern, PatternProps } from "./Pattern";
import { Box } from "./Box";

export default {
  title: "Components/Pattern",
  component: Pattern,
  argTypes: {},
} as Meta;

const Template: Story<PatternProps> = (args) => (
  <Pattern {...args}>
    <Box height="300px"></Box>
  </Pattern>
);

export const Circuit = Template.bind({});
Circuit.args = {
  opacity: 0.7,
};
