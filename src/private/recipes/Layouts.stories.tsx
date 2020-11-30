import { Card } from "../../Card";
import { CardContent } from "../../CardContent";
import { Placeholder } from "../Placeholder";
import { Sidenav } from "../../Sidenav";
import { Grid } from "../../Grid";
import { Box } from "../../Box";
import { Layout, Landing } from "./Layout";
import { ButtonPrimary } from "../../ButtonPrimary";
import { Heading } from "../../Heading";
import { Text } from "../../Text";
import { ButtonSecondary } from "../../ButtonSecondary";
import { ButtonGroup } from "../../ButtonGroup";
import { Center } from "../../Center";
import { Pattern } from "../../Pattern";
import { Main } from "../../Main";
import { Video } from "../../Video";
import { FeaturePreview } from "../../FeaturePreview";

export default {
  title: "Recipes/Layouts",
};

export const SidenavLayout = () => (
  <Layout>
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
      <Grid gridGap="standard">
        <Card>
          <CardContent>
            <Placeholder height="400px" />
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Placeholder height="400px" />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Layout>
);

export const SearchLayout = () => (
  <Layout>
    <Grid gridGap="standard" gridTemplateColumns={["1fr"]}>
      <Card>
        <CardContent>
          <Grid gridGap="standard" gridTemplateColumns={["1fr auto"]}>
            <input />
            <ButtonPrimary>Search</ButtonPrimary>
          </Grid>
        </CardContent>
      </Card>
      <Grid gridGap="standard" gridTemplateColumns={["1fr", "240px 1fr"]}>
        <Box>
          <Card>
            <CardContent>Filter</CardContent>
          </Card>
        </Box>
        <Grid gridGap="standard">
          <Card>
            <CardContent>
              <Placeholder height="400px" />
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Placeholder height="400px" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  </Layout>
);

export const LandingLayout = () => (
  <Landing>
    <Box
      position="relative"
      padding="standard"
      backgroundColor="primary.900"
      textColor="primary.50"
    >
      <Pattern
        position="absolute"
        backgroundColor="transparent"
        foregroundColor="white"
        opacity={0.05}
        top="0"
        bottom="0"
        right="0"
        left="0"
      />
      <Heading textAlign="center">OpenPatch</Heading>
      <Heading textAlign="center" as="h2" fontWeight="standard">
        Your{" "}
        <Text as="span" textColor="primary.200">
          social network for online assessments
        </Text>{" "}
        and more in the field of{" "}
        <Text as="span" textColor="primary.200">
          computer science
        </Text>{" "}
      </Heading>
      <Center margin="large">
        <ButtonGroup space="standard">
          <ButtonPrimary size="large">Sign Up</ButtonPrimary>
          <ButtonSecondary size="large">Log In</ButtonSecondary>
        </ButtonGroup>
      </Center>
    </Box>
    <Main>
      <Grid gridGap="large">
        <FeaturePreview
          title="Interative Tasks"
          description="Highlighting, Puzzles and Coding to name a few. Interactive tasks are a great way to make use of the digital format. Each tasks can automatically be evaluated."
          src="https://f002.backblazeb2.com/file/openpatch-static/interactive.mp4"
        />
        <FeaturePreview
          title="Adaptive Tests"
          description="
          Define multiple paths in your tests by using our easy drag and drop
          test creation tool. This allows you to assess to a more detailed
          level."
          src="https://f002.backblazeb2.com/file/openpatch-static/test.mp4"
        />
        <FeaturePreview
          title="Social Interactions"
          description="
          Follow your favorite creators. Like, share and give feedback. Remix
          tasks or tests you like and want to adapt for your needs."
          src="https://f002.backblazeb2.com/file/openpatch-static/social.mp4"
        />
        <FeaturePreview
          title="Assessments"
          description="
          Conduct assessments based on tests you or other have created. Get
          results and visualization in nearly realtime. Download the results for
          further analysis."
          src="https://f002.backblazeb2.com/file/openpatch-static/assessment.mp4"
        />
        <FeaturePreview
          title="Recordings"
          description="
          See every step in the process of solving one of your tasks, by
          reviewing the recording. Thus, you can get better insights on
          difficulties."
          src="https://f002.backblazeb2.com/file/openpatch-static/player.mp4"
        />
      </Grid>
    </Main>
  </Landing>
);
