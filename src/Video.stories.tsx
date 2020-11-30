import { Story, Meta } from "@storybook/react/types-6-0";

import { Video, VideoProps } from "./Video";

export default {
  title: "Components/Video",
  component: Video,
  argTypes: {},
} as Meta;

const Template: Story<VideoProps> = (args) => <Video {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://f002.backblazeb2.com/file/openpatch-static/interactive.mp4",
};
