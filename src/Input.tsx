import { ChangeEvent, InputHTMLAttributes } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
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

export type StyledInputProps = {
  error?: boolean;
} & InputHTMLAttributes<HTMLInputElement> &
  ColorProps &
  CursorProps &
  SpaceProps &
  TypographyProps &
  BackgroundProps &
  BorderProps &
  ShadowProps;

export const StyledInput = styled.input<StyledInputProps>(
  ({ theme, error }) => [
    css`
      border-radius: ${theme.radii.small};
      padding: ${theme.space.xsmall} ${theme.space.xxsmall};
      border-color: ${theme.colors.neutral["100"]};
      border-style: solid;
      border-width: ${theme.borderWidths.standard};

      box-sizing: border-box;
      width: 100%;
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
      :disabled {
        background-color: ${theme.colors.neutral["50"]};
      }
    `,
    error &&
      css`
        border-color: ${theme.colors.error["500"]};
      `,
  ],
  compose(color, cursor, space, typography, background, border, shadow)
);

export type InputProps = {
  id?: string;
  type?: string;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (v: string) => void;
  onBlur?: () => void;
  error?: boolean;
};

export const Input = ({
  id,
  value,
  error = false,
  placeholder,
  type = "text",
  onChange = () => {},
  onBlur = () => {},
  disabled = false,
  required = false,
}: InputProps) => {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (!disabled) {
      const newValue = e.currentTarget.value;
      onChange(newValue);
    }
  }
  return (
    <StyledInput
      id={id}
      type={type}
      placeholder={placeholder}
      aria-invalid={error}
      disabled={disabled}
      required={required}
      onChange={handleChange}
      onBlur={onBlur}
      error={error}
      value={value}
    />
  );
};
