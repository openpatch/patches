import { Meta, Story } from "@storybook/react/types-6-0";
import { Text } from "./Text";
import { TextLink, TextLinkProps } from "./TextLink";

export default {
  title: "Components/TextLink",
  component: TextLink,
  argTypes: {},
} as Meta;

const Template: Story<TextLinkProps> = (args) => (
  <TextLink {...args}>A Link</TextLink>
);

export const Default = Template.bind({});
Default.args = {
  href: "/",
};

export const External = Template.bind({});
External.args = {
  href: "https://openpatch.app",
};

export const InText = () => {
  return (
    <Text textColor="primary.500">
      This text: <TextLink href="https://openpatch.app">A Link</TextLink>. And
      more text
    </Text>
  );
};

export const URLObject = Template.bind({});
URLObject.args = {
  href: {
    pathname: "/this/super",
    query: {
      hallo: "test",
      array: ["hi", "bla"],
    },
  },
};
