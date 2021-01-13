import { ReactNode } from "react";
import { css } from "@emotion/react";
import { Text } from "./Text";
import { ExclamationCircle } from "./icons/solid";
import { Icon } from "./Icon";
import { Box } from "./Box";

export type FormErrorTextProps = {
  children?: ReactNode;
};

export const FormErrorText = ({ children }: FormErrorTextProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      css={(theme) => css`
        svg {
          margin-right: ${theme.space.xxsmall};
        }
      `}
    >
      <Icon color="error" size="small">
        <ExclamationCircle />
      </Icon>
      <Text textColor="error.500" role="alert">
        {children}
      </Text>
    </Box>
  );
};
