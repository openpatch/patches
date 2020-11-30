import { Story, Meta } from "@storybook/react/types-6-0";

import { Container, ContainerProps } from "./Container";
import { Placeholder } from "./private/Placeholder";

export default {
  title: "Layout/Container",
  component: Container,
  argTypes: {},
} as Meta;

const Template: Story<ContainerProps> = (args) => (
  <Container {...args}>
    <Placeholder height="100px" />
  </Container>
);

export const XSmall = Template.bind({});
XSmall.args = {
  maxWidth: "xsmall",
};

export const Small = Template.bind({});
Small.args = {
  maxWidth: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  maxWidth: "medium",
};

export const Large = Template.bind({});
Large.args = {
  maxWidth: "large",
};
