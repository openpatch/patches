import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { FeaturePreview, FeaturePreviewProps } from "./FeaturePreview";

export default {
  title: "Components/FeaturePreview",
  component: FeaturePreview,
  argTypes: {},
} as Meta;

const Template: Story<FeaturePreviewProps> = (args) => (
  <FeaturePreview {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Interactive Tasks",
  description:
    "Highlighting, Puzzles and Coding to name a few. Interactive tasks are a great way to make use of the digital format. Each tasks can automatically be evaluated.",
  src: "https://f002.backblazeb2.com/file/openpatch-static/interactive.mp4",
};
