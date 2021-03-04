import {
  ChangeEvent,
  forwardRef,
  ReactNode,
  RefObject,
  SelectHTMLAttributes,
} from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { Box } from "./Box";
import { CheveronDown } from "./icons/shade";
import {
  color,
  compose,
  cursor,
  space,
  typography,
  background,
  border,
  shadow,
  ColorProps,
  CursorProps,
  SpaceProps,
  TypographyProps,
  BackgroundProps,
  BorderProps,
  ShadowProps,
} from "./system";

export type SelectProps = {
  id?: string;
  children?: ReactNode;
  value?: string;
  error?: boolean;
  ref?: RefObject<HTMLSelectElement>;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  disbaled?: boolean;
  required?: boolean;
};

type StyledSelectProps = SelectHTMLAttributes<HTMLSelectElement> &
  ColorProps &
  CursorProps &
  SpaceProps &
  TypographyProps &
  BackgroundProps &
  BorderProps &
  ShadowProps;

const StyledSelect = styled.select<StyledSelectProps>(
  compose(color, cursor, space, typography, background, border, shadow)
);

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      id,
      children,
      onChange = () => {},
      onBlur = () => {},
      disbaled = false,
      value,
      error = false,
      required = false,
      ...props
    },
    ref
  ) => {
    function handleSelect(e: ChangeEvent<HTMLSelectElement>) {
      if (!disbaled) {
        const newValue = e.currentTarget.value;
        onChange(newValue);
      }
    }
    return (
      <Box width="100%" position="relative">
        <StyledSelect
          {...props}
          id={id}
          required={required}
          borderRadius="small"
          padding="xsmall"
          borderColor="neutral.100"
          borderStyle="solid"
          onChange={handleSelect}
          onBlur={onBlur}
          value={value}
          ref={ref}
          disabled={disbaled}
          borderWidth="standard"
          aria-invalid={error}
          css={(theme) => [
            css`
              width: 100%;
              appearance: none;
              outline-color: transparent;
              outline-width: 0;
              background: white;

              ::placeholder {
                color: ${theme.colors.neutral["400"]};
              }
              :focus {
                outline-color: transparent;
                outline-width: 0;
                border-color: ${theme.colors.primary["800"]};
                box-shadow: ${theme.shadows.outline};
                z-index: 1;
              }
            `,
            disbaled &&
              css`
                cursor: ${theme.cursor["not-allowed"]};
                background-color: ${theme.colors.neutral["50"]};
              `,
            error &&
              css`
                border-color: ${theme.colors.error["500"]};
              `,
          ]}
        >
          {children}
        </StyledSelect>
        <Box
          position="absolute"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="32px"
          right="8px"
          top="0"
          bottom="0"
          css={css`
            pointer-events: none;
          `}
          tabIndex={-1}
        >
          <CheveronDown />
        </Box>
      </Box>
    );
  }
);
