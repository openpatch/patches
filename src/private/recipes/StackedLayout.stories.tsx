import React from "react";
import { Nav } from "../../Nav";
import { PageHeader } from "../../PageHeader";
import { Main } from "../../Main";
import { Card } from "../../Card";
import { CardContent } from "../../CardContent";
import { Placeholder } from "../Placeholder";
import { Footer } from "../../Footer";
import { ButtonPrimary } from "../../ButtonPrimary";
import { Bell, Support } from "../../icons/solid";
import { Sidenav } from "../../Sidenav";
import { Grid } from "../../Grid";
import { Box } from "../../Box";

export default {
  title: "Recipes/Layouts",
};

export const OverlapLayout = () => (
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
      <Grid gridGap="standard" gridTemplateColumns={["1fr", "240px 1fr"]}>
        <Box>
          <Sidenav
            position={["initial", "sticky"]}
            sections={[
              {
                label: "Section 1",
                href: "#",
                active: true,
                links: [
                  {
                    label: "Subsection 1.1",
                    href: "#",
                    active: true,
                  },
                ],
              },
              {
                label: "Section 2",
                href: "#",
              },
            ]}
          />
        </Box>
        <Card>
          <CardContent>
            <Placeholder height="1200px" />
          </CardContent>
        </Card>
      </Grid>
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
