import React from "react";
import { Nav } from "../../Nav";
import { PageHeader } from "../../PageHeader";
import { Main } from "../../Main";
import { Footer } from "../../Footer";
import { ButtonPrimary } from "../../ButtonPrimary";
import { Bell, Support } from "../../icons/solid";
import { Placeholder } from "../Placeholder";
import { Card } from "../../Card";
import { CardContent } from "../../CardContent";

export const Layout = ({ children }) => (
  <div>
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
        {
          label: "Support",
          icon: <Support />,
          href: "#",
        },
      ]}
      links={[
        {
          label: "Home",
          href: "#",
          active: true,
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
        },
      ]}
      profile={{
        image:
          "https://vignette.wikia.nocookie.net/avatar/images/1/16/Young_Katara_worried.png/revision/latest/scale-to-width-down/200?cb=20090405200515",
        name: "Mike Barkmin",
        email: "mike@openpatch.org",
      }}
    ></Nav>
    <PageHeader
      variant="overlap"
      actions={[
        <ButtonPrimary tone="error" key="delete">
          Delete
        </ButtonPrimary>,
        <ButtonPrimary key="edit">Edit</ButtonPrimary>,
      ]}
    >
      Stacked Layout With Overlap
    </PageHeader>
    <Main variant="overlap">
      {children ? (
        children
      ) : (
        <Card>
          <CardContent>
            <Placeholder height="400px" />
          </CardContent>
        </Card>
      )}
    </Main>
    <Footer
      links={[
        {
          href: "#",
          label: "Contact",
        },
        {
          href: "#",
          label: "Terms",
        },
      ]}
    />
  </div>
);

export const Landing = ({ children }) => (
  <div>
    <Nav
      links={[
        {
          label: "Features",
          href: "#",
          active: true,
        },
        {
          label: "Pricing",
          href: "#",
        },
        {
          label: "Docs",
          href: "#",
        },
        {
          label: "Blog",
          href: "#",
        },
      ]}
    ></Nav>
    {children}
    <Footer
      links={[
        {
          href: "#",
          label: "Contact",
        },
        {
          href: "#",
          label: "Terms",
        },
      ]}
    />
  </div>
);
