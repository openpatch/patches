import { Story, Meta } from "@storybook/react/types-6-0";
import { Fragment, useState } from "react";

import { Slider, SliderProps } from "./Slider";
import { Text } from "./Text";

export default {
  title: "Form/Slider",
  component: Slider,
  argTypes: {},
} as Meta;

const Template: Story<SliderProps> = (args) => {
  const [value, setValue] = useState(0);
  return (
    <Fragment>
      <Text>Slider Bubble</Text>
      <Slider {...args} value={value} onChange={setValue} />
    </Fragment>
  );
};

export const Default = Template.bind({});
