import { Story, Meta } from "@storybook/react/types-6-0";
import { Checkbox } from "./Checkbox";

import { Group, GroupProps } from "./Group";

export default {
  title: "Form/Group",
  component: Group,
  argTypes: {},
} as Meta;

const Template: Story<GroupProps> = (args) => (
  <Group {...args}>
    <Checkbox>
      Hi <p>Hi A test</p>
    </Checkbox>
    <Checkbox>Hi 2</Checkbox>
    <Checkbox>Hi 3</Checkbox>
  </Group>
);

export const Default = Template.bind({});
Default.args = {
  label: "Checkboxes",
};

export const Horizontal = Template.bind({});

Horizontal.args = {
  label: "Checkboxes",
  variant: "horizontal",
};
