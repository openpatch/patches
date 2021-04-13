import { Story, Meta } from "@storybook/react/types-6-0";

import { ButtonLink, ButtonLinkProps } from "./ButtonLink";

export default {
  title: "Components/ButtonLink",
  component: ButtonLink,
  argTypes: {},
} as Meta;

const Template: Story<ButtonLinkProps> = (args) => <ButtonLink {...args} />;

export const Default = Template.bind({});
