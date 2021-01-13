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

export type StyledTextareaProps = {
  error?: boolean;
  resize?: "both" | "horizontal" | "vertical" | "none";
} & InputHTMLAttributes<HTMLInputElement> &
  ColorProps &
  CursorProps &
  SpaceProps &
  TypographyProps &
  BackgroundProps &
  BorderProps &
  ShadowProps;

export const StyledTextarea = styled.textarea<StyledTextareaProps>(
  ({ theme, resize, error }) => [
    css`
      border-radius: ${theme.radii.small};
      padding: ${theme.space.xsmall} ${theme.space.xxsmall};
      border-color: ${theme.colors.neutral["100"]};
      border-style: solid;
      border-width: ${theme.borderWidths.standard};
      box-sizing: border-box;
      width: 100%;
      resize: ${resize};
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

export type TextareaProps = {
  id?: string;
  value?: string;
  onChange?: (v: string) => void;
  onBlur?: () => void;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  resize?: "both" | "horizontal" | "vertical" | "none";
};

export const Textarea = ({
  id,
  value,
  onChange = () => {},
  onBlur = () => {},
  disabled,
  required,
  error,
  resize = "vertical",
}: TextareaProps) => {
  function handleChange(
    e: ChangeEvent<HTMLTextAreaElement> & ChangeEvent<HTMLInputElement>
  ) {
    if (!disabled) {
      const newValue = e.currentTarget.value;
      onChange(newValue);
    }
  }
  return (
    <StyledTextarea
      id={id}
      value={value}
      onChange={handleChange}
      onBlur={onBlur}
      required={required}
      disabled={disabled}
      aria-invalid={error}
      error={error}
      resize={resize}
    />
  );
};
