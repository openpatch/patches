import { Meta, Story } from "@storybook/react/types-6-0";
import { AutoGrid, AutoGridProps } from "./AutoGrid";
import { Placeholder } from "./private/Placeholder";

export default {
  title: "Layout/AutoGrid",
  component: AutoGrid,
  argTypes: {},
} as Meta;

const Template: Story<AutoGridProps> = (args) => (
  <AutoGrid {...args}>
    <Placeholder height="40px" />
    <Placeholder height="40px" />
    <Placeholder height="40px" />
    <Placeholder height="40px" />
    <Placeholder height="40px" />
    <Placeholder height="40px" />
    <Placeholder height="40px" />
    <Placeholder height="40px" />
    <Placeholder height="40px" />
    <Placeholder height="40px" />
  </AutoGrid>
);

export const Gap = Template.bind({});
Gap.args = {
  gap: "standard",
};

export const Columns = Template.bind({});
Columns.args = {
  gap: "standard",
  columns: 2,
};

export const ResponsiveColumns = Template.bind({});
ResponsiveColumns.args = {
  gap: "standard",
  columns: [1, 2],
};

export const MinChildWidth = Template.bind({});
MinChildWidth.args = {
  gap: "standard",
  minChildWidth: "100px",
};

export const LessThanDefinedInColumnOneChild = () => {
  return (
    <AutoGrid columns={3}>
      <Placeholder height="40px" />
    </AutoGrid>
  );
};

export const LessThanDefinedInColumnManyChildren = () => {
  return (
    <AutoGrid columns={3}>
      <Placeholder height="40px" />
      <Placeholder height="40px" />
    </AutoGrid>
  );
};
