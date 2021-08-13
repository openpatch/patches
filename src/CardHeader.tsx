import { ReactNode } from "react";
import { Box } from "./Box";
import { Heading, HeadingProps } from "./Heading";
import { HeadingLink } from "./HeadingLink";

export type CardHeaderProps = {
  action?: ReactNode;
  avatar?: ReactNode;
  subtitle?: string;
} & HeadingProps;

export const CardHeader = ({
  action,
  avatar,
  children,
  subtitle,
  ...headingProps
}: CardHeaderProps) => {
  let HeadingComp: any = Heading;
  if (headingProps.href) {
    HeadingComp = HeadingLink;
  }
  return (
    <Box
      display="flex"
      alignItems="center"
      paddingX="standard"
      paddingY="small"
    >
      {avatar && (
        <Box display="flex" alignItems="center">
          {avatar}
        </Box>
      )}
      <Box flex="1" ml={avatar ? "standard" : "none"}>
        <HeadingComp margin="none" fontSize="large" {...headingProps}>
          {children}
        </HeadingComp>
        {subtitle && (
          <Box fontSize="small" as="span">
            {subtitle}
          </Box>
        )}
      </Box>
      {action && (
        <Box display="flex" alignItems="center">
          {action}
        </Box>
      )}
    </Box>
  );
};
