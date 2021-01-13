import { Story, Meta } from "@storybook/react/types-6-0";
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
