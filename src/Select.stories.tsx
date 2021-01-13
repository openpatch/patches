import { Story, Meta } from "@storybook/react/types-6-0";
import { useState } from "react";

import { Select, SelectProps } from "./Select";

export default {
  title: "Form/Select",
  component: Select,
  argTypes: {},
} as Meta;

const Template: Story<SelectProps> = (args) => {
  const [value, setValue] = useState("one");
  return (
    <Select {...args} value={value} onChange={setValue}>
      <option value="one">One</option>
      <option value="two">Two</option>
    </Select>
  );
};

export const Default = Template.bind({});
