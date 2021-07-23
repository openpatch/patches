import { Meta, Story } from "@storybook/react/types-6-0";
import { ButtonPrimary } from "./ButtonPrimary";
import { ButtonSecondary } from "./ButtonSecondary";
import { Pencil, Trash } from "./icons/solid";
import { PageHeader, PageHeaderProps } from "./PageHeader";

export default {
  title: "Components/PageHeader",
  component: PageHeader,
  argTypes: {},
} as Meta;

const Template: Story<PageHeaderProps> = (args) => (
  <PageHeader {...args}>Page Header</PageHeader>
);

export const Default = Template.bind({});

export const LongPageHeader = () => (
  <PageHeader lineClamp={[1, 2, 0]}>
    This is a long page header and it might take up three or even more lines,
    but only two should be shown. The others ones should be replace with three
    dots.
  </PageHeader>
);

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

export const WithMeta = () => (
  <PageHeader meta="Mike Barkmin">Page Header</PageHeader>
);
