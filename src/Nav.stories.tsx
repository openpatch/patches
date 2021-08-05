import { Meta } from "@storybook/react/types-6-0";
import { Bell } from "./icons/solid";
import { Nav } from "./Nav";

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
        href: "#",
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

export const ManyItems = () => (
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
      {
        label: "Page 2",
        href: "#",
      },
      {
        label: "Page 3",
        href: "#",
      },
      {
        label: "Page 4",
        href: "#",
      },
      {
        label: "Page 5",
        href: "#",
      },
      {
        label: "Page 6",
        href: "#",
      },
      {
        label: "Page 7",
        href: "#",
      },
      {
        label: "Page 8",
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
        href: "#",
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

export const ActionLinks = () => (
  <Nav
    actionLinks={[
      {
        label: "Sign Up",
        href: "#",
        variant: "accent",
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
      {
        label: "Page 2",
        href: "#",
      },
      {
        label: "Page 3",
        href: "#",
      },
      {
        label: "Page 4",
        href: "#",
      },
      {
        label: "Page 5",
        href: "#",
      },
      {
        label: "Page 6",
        href: "#",
      },
      {
        label: "Page 7",
        href: "#",
      },
      {
        label: "Page 8",
        href: "#",
      },
    ]}
  ></Nav>
);
