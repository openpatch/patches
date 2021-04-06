import { Meta, Story } from "@storybook/react/types-6-0";
import {
  LinkComponentProvider,
  LinkComponentProviderProps,
} from "./LinkComponentProvider";

export default {
  title: "Provider/LinkComponentProvider",
  component: LinkComponentProvider,
  argTypes: {},
} as Meta;

const Template: Story<LinkComponentProviderProps> = (args) => (
  <LinkComponentProvider {...args} />
);

export const Default = Template.bind({});
