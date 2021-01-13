import { ReactElement } from "react";
import { css } from "@emotion/react";
import { Box } from "./Box";
import { InputAddon } from "./InputAddon";
import { InputProps } from "./Input";

export type InputGroupProps = {
  children?: ReactElement<InputProps>;
  addonLeft?: string;
  addonRight?: string;
};

export const InputGroup = ({
  children,
  addonLeft,
  addonRight,
}: InputGroupProps) => {
  return (
    <Box
      display="flex"
      boxShadow="small"
      borderRadius="small"
      borderColor="neutral.200"
      borderStyle="solid"
      borderWidth="standard"
      css={css`
        & > input {
          border: none;
          border-radius: 0;
          flex: 1;
        }
      `}
    >
      {addonLeft && (
        <InputAddon
          css={(theme) => css`
            border-right-color: ${theme.colors.neutral["200"]};
            border-right-width: ${theme.borderWidths.standard};
            border-right-style: solid;
            border-bottom-left-radius: ${theme.radii.small};
            border-top-left-radius: ${theme.radii.small};
          `}
        >
          {addonLeft}
        </InputAddon>
      )}
      {children}
      {addonRight && (
        <InputAddon
          css={(theme) => css`
            border-left-color: ${theme.colors.neutral["200"]};
            border-left-width: ${theme.borderWidths.standard};
            border-left-style: solid;
            border-bottom-right-radius: ${theme.radii.small};
            border-top-right-radius: ${theme.radii.small};
          `}
        >
          {addonRight}
        </InputAddon>
      )}
    </Box>
  );
};
