import { ReactNode } from "react";
import { Box } from "./Box";

export type CardHeaderProps = {
  as?: "h1" | "h2" | "h3" | "h4";
  action?: ReactNode;
  avatar?: ReactNode;
  children: string;
  subtitle?: string;
};

export const CardHeader = ({
  as = "h1",
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
      <Box flex="1" ml={avatar ? "standard" : "none"}>
        <Box margin="none" fontSize="large" as={as}>
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
