import { ReactNode } from "react";
import { Box, BoxProps } from "./Box";
import { Icon } from "./Icon";
import { Check, Important, Information } from "./icons/shade";

export type AlertProps = {
  children?: ReactNode;
  severity?: "neutral" | "warning" | "error" | "success" | "info";
};

export const Alert = ({ children, severity }: AlertProps) => {
  let backgroundColor: BoxProps["backgroundColor"] = "neutral.50";
  let textColor: BoxProps["textColor"] = "neutral.900";
  let icon: ReactNode = <Information />;
  switch (severity) {
    case "info":
      backgroundColor = "info.50";
      textColor = "info.900";
      icon = <Information />;
      break;
    case "error":
      backgroundColor = "error.50";
      textColor = "error.900";
      icon = <Important />;
      break;
    case "success":
      backgroundColor = "success.50";
      textColor = "success.900";
      icon = <Check />;
      break;
    case "warning":
      backgroundColor = "warning.50";
      textColor = "warning.900";
      icon = <Important />;
      break;
  }
  return (
    <Box
      display="flex"
      backgroundColor={backgroundColor}
      textColor={textColor}
      boxShadow="standard"
      padding="standard"
      borderColor={textColor}
      borderStyle="solid"
      borderWidth="standard"
      borderRadius="standard"
    >
      <Icon size="small" color={severity}>
        {icon}
      </Icon>
      <Box marginLeft="xsmall" flex="1">
        {children}
      </Box>
    </Box>
  );
};
