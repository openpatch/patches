import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { PageHeader, PageHeaderProps } from "./PageHeader";
import { Pencil, Trash } from "./icons/solid";
import { ButtonSecondary } from "./ButtonSecondary";
import { ButtonPrimary } from "./ButtonPrimary";

export default {
  title: "Components/PageHeader",
  component: PageHeader,
  argTypes: {},
} as Meta;

const Template: Story<PageHeaderProps> = (args) => (
  <PageHeader {...args}>Page Header</PageHeader>
);

export const Default = Template.bind({});

export const WithActions = () => (
  <PageHeader
    actions={[
      <ButtonSecondary
        tone="error"
        key="delete"
        size="xsmall"
        iconLeft={<Trash />}
      >
        Delete
      </ButtonSecondary>,
      <ButtonPrimary key="edit" size="xsmall" iconLeft={<Pencil />}>
        Edit
      </ButtonPrimary>,
    ]}
  >
    Page Header
  </PageHeader>
);
