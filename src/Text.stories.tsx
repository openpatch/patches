import { Story, Meta } from "@storybook/react/types-6-0";

import { Text, TextProps } from "./Text";
import { Link } from "./Link";
import { Blockquote } from "./Blockquote";
import { Heading } from "./Heading";
import { Code } from "./Code";

export default {
  title: "Typography/Text",
  component: Text,
  argTypes: {},
} as Meta;

const Template: Story<TextProps> = (args) => (
  <Text {...args}>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet.
  </Text>
);

export const Default = Template.bind({});

export const Truncate = Template.bind({});
Truncate.args = {
  truncate: "200px",
};
