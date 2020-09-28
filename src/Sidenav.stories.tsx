import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Sidenav, SidenavProps } from "./Sidenav";

export default {
  title: "Components/Sidenav",
  component: Sidenav,
  argTypes: {},
} as Meta;

export const Default = () => (
  <Sidenav
    sections={[
      {
        label: "Section 1",
        active: true,
        href: "#",
        links: [
          {
            label: "bal1",
            href: "#",
            active: true,
          },
          {
            label: "bal",
            href: "#",
          },
        ],
      },
      {
        label: "Section 2",
        href: "#",
      },
      {
        label: "Link 1",
        href: "#",
      },
    ]}
  />
);
