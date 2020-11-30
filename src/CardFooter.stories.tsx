import { Story, Meta } from "@storybook/react/types-6-0";

import { Card } from "./Card";
import { CardContent } from "./CardContent";
import { CardFooter, CardFooterProps } from "./CardFooter";
import { ButtonPrimary } from "./ButtonPrimary";

export default {
  title: "Components/CardFooter",
  component: CardFooter,
  argTypes: {},
} as Meta;

const Template: Story<CardFooterProps> = (args) => (
  <Card>
    <CardContent>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </CardContent>
    <CardFooter {...args}>
      <ButtonPrimary tone="error">Deactivate</ButtonPrimary>
    </CardFooter>
  </Card>
);

export const Default = Template.bind({});
