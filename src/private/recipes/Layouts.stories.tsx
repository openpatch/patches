import { useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { HookFormController } from "../../HookFormController";
import { Input } from "../../Input";
import { PasswordInput } from "../../PasswordInput";
import { Form } from "../../Form";
import { Link } from "../../Link";
import { Card } from "../../Card";
import { Flex } from "../../Flex";
import { CardContent } from "../../CardContent";
import { CardFooter } from "../../CardFooter";
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
import { FeaturePreview } from "../../FeaturePreview";
import { FormHeader } from "../../FormHeader";
import { Container } from "../../Container";
import { PatternCenter } from "../../PatternCenter";
import { FormFooter } from "../../FormFooter";
import { FormDescription } from "../../FormDescription";

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

type LoginData = {
  username: string;
  password: string;
};

export const LogInLayout = () => {
  const methods = useForm<LoginData>({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <PatternCenter>
      <Flex flex={1} />
      <Container maxWidth="small">
        <Box padding="small" marginTop="standard">
          <Card>
            <FormProvider {...methods}>
              <Form onSubmit={methods.handleSubmit(handleSubmit)}>
                <CardContent>
                  <FormHeader>Welcome to OpenPatch!</FormHeader>
                  <HookFormController
                    name="username"
                    control={methods.control}
                    label="Username or E-Mail"
                    render={Input}
                    defaultValue=""
                  />
                  <HookFormController
                    name="password"
                    control={methods.control}
                    label="Password"
                    render={PasswordInput}
                    defaultValue=""
                  />
                  <Link mt="small" href="#">
                    Forgot your password?
                  </Link>
                </CardContent>
                <CardFooter align="center">
                  <ButtonPrimary type="submit" fullWidth>
                    Log In
                  </ButtonPrimary>
                </CardFooter>
              </Form>
            </FormProvider>
          </Card>
          <Text textAlign="center" textColor="card" mt="small">
            Don't have an account? <Link href="#">Sign up!</Link>
          </Text>
        </Box>
      </Container>
      <Flex flex={1} />
      <Text textAlign="center" textColor="neutral.300" mb="small">
        By signing in to OpenPatch, you agree to our{" "}
        <Link href="#">terms of service.</Link>
      </Text>
    </PatternCenter>
  );
};

type SignUpData = {
  email: string;
  username: string;
  password: string;
};

export const SignUpLayout = () => {
  const methods = useForm<SignUpData>({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  const password = useRef({});
  password.current = methods.watch("password", "");

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <PatternCenter>
      <Flex flex={1} />
      <Container maxWidth="small">
        <Box padding="small" marginTop="standard">
          <Card>
            <FormProvider {...methods}>
              <Form onSubmit={methods.handleSubmit(handleSubmit)}>
                <CardContent>
                  <FormHeader>Welcome to OpenPatch!</FormHeader>
                  <HookFormController
                    name="username"
                    control={methods.control}
                    label="Username"
                    render={Input}
                    defaultValue=""
                    rules={{
                      required: "Please choose a username",
                      validate: {
                        admin: (v) => v !== "admin" || "Nice try!",
                      },
                    }}
                  />
                  <HookFormController
                    name="email"
                    control={methods.control}
                    label="E-Mail"
                    render={Input}
                    defaultValue=""
                    rules={{
                      required: "You need to provide an e-mail address",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address",
                      },
                    }}
                  />
                  <HookFormController
                    name="password"
                    control={methods.control}
                    label="Password"
                    render={PasswordInput}
                    defaultValue=""
                    rules={{
                      required: "You must specify a password",
                      minLength: {
                        value: 8,
                        message: "Password must have at least 8 characters",
                      },
                    }}
                  />
                  <HookFormController
                    name="password_match"
                    control={methods.control}
                    label="Repeat Password"
                    render={PasswordInput}
                    defaultValue=""
                    rules={{
                      validate: {
                        match: (v) =>
                          v === password.current ||
                          "The passwords do not match",
                      },
                    }}
                  />
                </CardContent>
                <CardFooter align="center">
                  <ButtonPrimary type="submit" fullWidth>
                    Sign Up
                  </ButtonPrimary>
                </CardFooter>
              </Form>
            </FormProvider>
          </Card>
          <Text textAlign="center" textColor="card" mt="small">
            Already have an account? <Link href="#">Log In!</Link>
          </Text>
        </Box>
      </Container>
      <Flex flex={1} />
      <Text textAlign="center" textColor="neutral.300" mb="small">
        By signing up to OpenPatch, you agree to our{" "}
        <Link href="#">terms of service.</Link>
      </Text>
    </PatternCenter>
  );
};

export const FormLayout = () => {
  return (
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
                    label: "Form 1",
                    href: "#form-1",
                  },
                  {
                    label: "Form 2",
                    href: "#form-2",
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
              <Form>
                <FormHeader id="form-1">Form 1</FormHeader>
                <FormDescription>
                  This is the description of form 1
                </FormDescription>
                <FormFooter />
              </Form>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Placeholder height="600px" />
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Form>
                <FormHeader id="form-2">Form 2</FormHeader>
                <FormDescription>
                  This is the description of form 2
                </FormDescription>
                <FormFooter />
              </Form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};
