import { Story, Meta } from "@storybook/react/types-6-0";

import { CardMedia, CardMediaProps } from "./CardMedia";

export default {
  title: "Components/CardMedia",
  component: CardMedia,
  argTypes: {},
} as Meta;

const Template: Story<CardMediaProps> = (args) => (
  <CardMedia {...args}></CardMedia>
);

export const Default = Template.bind({});
