import { Story, Meta } from "@storybook/react/types-6-0";

import { FormDescription, FormDescriptionProps } from "./FormDescription";

export default {
  title: "Form/FormDescription",
  component: FormDescription,
  argTypes: {},
} as Meta;

const Template: Story<FormDescriptionProps> = (args) => (
  <FormDescription {...args}>
    Commodi veniam atque iusto. Eveniet aut veritatis doloribus. Accusantium ad
    officia similique et aperiam quia minus aut. Inventore aut accusamus sit
    minus voluptatem. Quis rerum sed odio eius. Aut consectetur error reiciendis
    tempora nisi dolorem mollitia voluptatem.
  </FormDescription>
);

export const Default = Template.bind({});
