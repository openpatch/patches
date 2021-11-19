import { Story, Meta } from "@storybook/react/types-6-0";
import { Box } from "./Box";
import { Card } from "./Card";
import { CardContent } from "./CardContent";

import { PatternCenter, PatternCenterProps } from "./PatternCenter";

export default {
  title: "Layout/PatternCenter",
  component: PatternCenter,
  argTypes: {},
} as Meta;

const Template: Story<PatternCenterProps> = (args) => (
  <PatternCenter {...args}>
    <Card>
      <CardContent>Hallo</CardContent>
    </Card>
  </PatternCenter>
);

export const Default = Template.bind({});

export const DarkCard: Story<PatternCenterProps> = (args) => (
  <PatternCenter {...args}>
    <Box width="300px" height="300px" background="black"></Box>
  </PatternCenter>
);
