import { Meta, Story } from "@storybook/react/types-6-0";
import { useState } from "react";
import { Tab, TabList, TabListProps, TabPanel, Tabs } from "./Tabs";

export default {
  title: "Components/Tabs",
  component: TabList,
  argTypes: {},
} as Meta;

const Template: Story<TabListProps> = (args) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList {...args}>
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
        <Tab disabled>A very long tab. That might lead to a overflow.</Tab>
      </TabList>
      <TabPanel>Tab 1</TabPanel>
      <TabPanel>Tab 2</TabPanel>
      <TabPanel>Tab 3</TabPanel>
    </Tabs>
  );
};

export const Default = Template.bind({});
