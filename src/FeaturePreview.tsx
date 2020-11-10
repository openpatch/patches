/** @jsx jsx */
import { ReactNode } from "react";
import { jsx, css } from "@emotion/core";
import { Grid } from "./Grid";
import { Heading } from "./Heading";
import { Text } from "./Text";
import { Video } from "./Video";
import { Center } from "./Center";

export type FeaturePreviewProps = {
  src: string;
  title: string;
  description: string;
  maxWidth?: number;
  reverse?: boolean;
};

export const FeaturePreview = ({
  src,
  title,
  description,
  maxWidth = 500,
}: FeaturePreviewProps) => {
  const descriptionBox = (
    <Center>
      <Heading as="h3">{title}</Heading>
      <Text textAlign="center">{description}</Text>
    </Center>
  );

  const videoBox = (
    <Center position="relative">
      <Video
        src={src}
        boxShadow="large"
        borderRadius="standard"
        loop
        autoPlay
        style={{
          width: "100%",
          maxWidth,
        }}
      ></Video>
    </Center>
  );
  return (
    <Grid gridTemplateColumns={["1fr", "1fr auto"]} gridGap="large">
      {descriptionBox}
      {videoBox}
    </Grid>
  );
};
