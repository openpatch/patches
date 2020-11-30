import { ReactNode } from "react";
import { Text, TextProps } from "./Text";

export type HeadingProps = {
  children?: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & TextProps;

export const Heading = ({ as = "h1", ...props }: HeadingProps) => {
  return <Text as={as} {...props} />;
};
