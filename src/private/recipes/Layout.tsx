import { Fragment } from "react";
import { ButtonPrimary } from "../../ButtonPrimary";
import { Card } from "../../Card";
import { CardContent } from "../../CardContent";
import { Footer } from "../../Footer";
import { Bell, Support } from "../../icons/solid";
import { Main } from "../../Main";
import { Nav } from "../../Nav";
import { PageHeader } from "../../PageHeader";
import { Placeholder } from "../Placeholder";

export const Layout = ({ children }) => (
  <Fragment>
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
  </Fragment>
);

export const Landing = ({ children }) => (
  <Fragment>
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
  </Fragment>
);
