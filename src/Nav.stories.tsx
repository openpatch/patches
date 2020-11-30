import { action } from "@storybook/addon-actions";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Nav, NavItem, NavProps } from "./Nav";
import { Logo } from "./Logo";
import { Bell } from "./icons/solid";

export default {
  title: "Components/Nav",
  component: Nav,
  argTypes: {},
} as Meta;

export const Default = () => (
  <Nav
    tray={[
      {
        label: "Notifications",
        icon: <Bell />,
        href: "#",
        badge: {
          tone: "error",
          count: 100,
        },
      },
    ]}
    links={[
      {
        label: "Home",
        href: "#",
      },
      {
        label: "Page 1",
        href: "#",
      },
    ]}
    profileLinks={[
      {
        label: "Profile",
        href: "#",
      },
      {
        label: "Log out",
        onClick: action("log out"),
      },
    ]}
    profile={{
      image:
        "https://vignette.wikia.nocookie.net/avatar/images/1/16/Young_Katara_worried.png/revision/latest/scale-to-width-down/200?cb=20090405200515",
      name: "Mike Barkmin",
      email: "mike@openpatch.org",
    }}
  ></Nav>
);
