import { Story, Meta } from "@storybook/react/types-6-0";
import { defaults } from "lodash";
import { useState } from "react";

import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  argTypes: {},
} as Meta;

const Template: Story<CheckboxProps> = (args) => {
  const [checked, setChecked] = useState(args.checked);
  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={() => setChecked((c) => !c)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  children: "Checkbox",
};
