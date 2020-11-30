import { Story, Meta } from "@storybook/react/types-6-0";

import { Grid, GridProps } from "./Grid";

export default {
  title: "Layout/Grid",
  component: Grid,
  argTypes: {},
} as Meta;

const Template: Story<GridProps> = (args) => <Grid {...args} />;

export const Default = Template.bind({});
