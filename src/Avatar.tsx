/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { CSSProperties, Fragment } from "react";
import { width } from "styled-system";
import { Box, BoxProps } from "./Box";
import { useBreakpoints } from "./hooks";
import { Image, ImageProps } from "./Image";
import { ResponsiveProp } from "./system/types";

export type AvatarProps = {
  size?: ResponsiveProp<"small" | "medium" | "large" | string>;
  username?: string;
  src?: string;
  placeholder?: boolean;
};

const getSize = (size: "small" | "medium" | "large" | string | undefined) => {
  switch (size) {
    case "small":
      return "30px";
    case "medium":
      return "60px";
    case "large":
      return "90px";
    default:
      return size;
  }
};

export const Avatar = ({
  src,
  username,
  size = ["medium"],
  placeholder = false,
}: AvatarProps) => {
  if (!Array.isArray(size)) {
    size = [size];
  }

  const responsiveSize = useBreakpoints(size);
  const width = getSize(responsiveSize);

  return (
    <Fragment>
      {!placeholder ? (
        <Image
          borderRadius="full"
          src={src}
          width={width}
          height={width}
          alt={`${username} avatar`}
          title={`${username} avatar`}
        />
      ) : (
        <Box
          as="span"
          display="inline-block"
          borderRadius="full"
          width={width}
          height={width}
          borderStyle="solid"
          borderColor="neutral.300"
        />
      )}
    </Fragment>
  );
};
