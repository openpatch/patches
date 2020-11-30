import { Story, Meta } from "@storybook/react/types-6-0";

import { Logo, LogoProps } from "./Logo";

export default {
  title: "Components/Logo",
  component: Logo,
  argTypes: {},
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
