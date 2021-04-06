import { Meta, Story } from "@storybook/react/types-6-0";
import { ThemeProvider, ThemeProviderProps } from "./ThemeProvider";

export default {
  title: "Provider/ThemeProvider",
  component: ThemeProvider,
  argTypes: {},
} as Meta;

const Template: Story<ThemeProviderProps> = (args) => (
  <ThemeProvider {...args} />
);

export const Default = Template.bind({});
