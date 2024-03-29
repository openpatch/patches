import { Meta, Story } from "@storybook/react/types-6-0";
import { Avatar } from "./Avatar";
import { Card, CardProps } from "./Card";
import { CardContent } from "./CardContent";
import { CardFooter } from "./CardFooter";
import { CardHeader } from "./CardHeader";
import { CardMedia } from "./CardMedia";
import { Icon } from "./Icon";
import { Pencil } from "./icons/outline";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {},
} as Meta;

const Template: Story<CardProps> = (args) => (
  <Card {...args}>
    <CardHeader
      avatar={<Avatar placeholder size="medium" />}
      subtitle="Test"
      action={
        <Icon size="small" color="currentColor">
          <Pencil />
        </Icon>
      }
    >
      This is a header
    </CardHeader>
    <CardMedia
      height="100px"
      image="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
    ></CardMedia>
    <CardContent>This is a card</CardContent>
    <CardFooter>A footer</CardFooter>
  </Card>
);

export const Full = Template.bind({});

export const WithHref: Story<CardProps> = (args) => (
  <Card {...args}>
    <CardHeader
      href="#"
      avatar={<Avatar placeholder size="medium" />}
      subtitle="Test"
      action={
        <Icon size="small" color="currentColor">
          <Pencil />
        </Icon>
      }
    >
      This is a header
    </CardHeader>
    <CardMedia
      height="100px"
      image="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
    ></CardMedia>
    <CardContent>This is a card</CardContent>
    <CardFooter>A footer</CardFooter>
  </Card>
);

const Template2: Story<CardProps> = (args) => (
  <Card {...args}>
    <CardHeader
      subtitle="Test"
      action={
        <Icon size="small" color="currentColor">
          <Pencil />
        </Icon>
      }
    >
      This is a header
    </CardHeader>
    <CardMedia
      height="100px"
      image="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
    ></CardMedia>
    <CardContent>This is a card</CardContent>
    <CardFooter>A footer</CardFooter>
  </Card>
);
export const WithoutAvatar = Template2.bind({});
