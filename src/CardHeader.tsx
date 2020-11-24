/** @jsx jsx */
import { ReactNode, forwardRef, Ref } from "react";
import { jsx, css } from "@emotion/react";
import { Box } from "./Box";

export type CardHeaderProps = {
  action?: ReactNode;
  avatar?: ReactNode;
  children: string;
  subtitle?: string;
};

export const CardHeader = ({
  action,
  avatar,
  children,
  subtitle,
}: CardHeaderProps) => {
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
      <Box flex="1" ml="standard">
        <Box margin="none" fontSize="medium" as="h3">
          {children}
        </Box>
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
