import { Meta, Story } from "@storybook/react/types-6-0";
import { PatchesProvider, PatchesProviderProps } from "./PatchesProvider";

export default {
  title: "Provider/PatchesProvider",
  component: PatchesProvider,
  argTypes: {},
} as Meta;

const Template: Story<PatchesProviderProps> = (args) => (
  <PatchesProvider {...args} />
);

export const Default = Template.bind({});
