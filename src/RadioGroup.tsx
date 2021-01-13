import { KeyboardEvent, useEffect, useRef } from "react";
import { css } from "@emotion/react";
import { Box } from "./Box";
import { Text } from "./Text";

type RadioProps = {
  id?: string;
  value: string | number;
  checked?: boolean;
  label?: string;
  helperText?: string;
  disabled?: boolean;
  tabIndex?: number;
  error?: boolean;
  onSelect?: (value: string | number) => void;
};

const Radio = ({
  id,
  value = "",
  checked,
  label,
  helperText,
  disabled = false,
  tabIndex = 0,
  error = false,
  onSelect = () => {},
}: RadioProps) => {
  const ref = useRef<HTMLDivElement>(null);

  function handleSelect() {
    if (!disabled) {
      onSelect(value);
    }
  }

  useEffect(() => {
    if (!disabled && ref.current && checked) {
      ref.current.focus();
    }
  }, [checked]);

  return (
    <Box
      ref={ref}
      css={(theme) => [
        css`
          cursor: ${theme.cursor.pointer};
          display: block;
          position: relative;
          padding: ${theme.space.standard};
          padding-left: calc(${theme.space.standard} * 2 + 14px);
          border-style: solid;
          border-width: 1px;
          border-color: transparent;
          user-select: none;
          outline: none;

          /* This creates the visuals for the radio buttons */
          ::before,
          ::after {
            display: block;
            position: absolute;
            border-radius: 50%;
            content: "";
          }

          ::before {
            top: calc(${theme.space.standard} + 3px);
            left: ${theme.space.standard};
            width: 14px;
            height: 14px;
            border: 1px solid ${theme.colors.primary["800"]};
          }

          :focus {
            box-shadow: ${theme.shadows.outline};
          }
        `,
        checked &&
          css`
            background-color: ${theme.colors.primary["50"]};

            ::after {
              top: calc(${theme.space.standard} + 6px);
              left: calc(${theme.space.standard} + 3px);
              border-width: 5px;
              border-style: solid;
              border-color: ${theme.colors.primary["800"]};
              content: "";
            }
          `,
        disabled &&
          css`
            cursor: ${theme.cursor["not-allowed"]};

            ::after,
            ::before {
              border-color: ${theme.colors.neutral["600"]};
            }

            :focus {
              box-shadow: none;
            }
          `,
        checked &&
          disabled &&
          css`
            background-color: ${theme.colors.neutral["50"]};
            ::after {
              border-color: ${theme.colors.neutral["800"]};
            }
          `,
        checked &&
          error &&
          css`
            background-color: ${theme.colors.error["50"]};
          `,
        error &&
          css`
            ::before,
            ::after {
              border-color: ${theme.colors.error["500"]};
            }
          `,
      ]}
      id={id}
      onClick={handleSelect}
      role="radio"
      aria-disabled={disabled}
      aria-checked={checked}
      tabIndex={tabIndex}
    >
      <Text
        fontWeight="medium"
        css={(theme) => [
          checked &&
            css`
              color: ${theme.colors.primary["900"]};
            `,
          disabled &&
            css`
              color: ${theme.colors.neutral["500"]};
            `,
          error &&
            css`
              color: ${theme.colors.error["900"]};
            `,
        ]}
      >
        {label}
      </Text>
      <Text
        css={(theme) => [
          css`
            color: ${theme.colors.neutral["600"]};
          `,
          checked &&
            css`
              color: ${theme.colors.primary["600"]};
            `,
          disabled &&
            css`
              color: ${theme.colors.neutral["400"]};
            `,
          error &&
            css`
              color: ${theme.colors.error["600"]};
            `,
        ]}
      >
        {helperText}
      </Text>
    </Box>
  );
};

type RadioGroupOption = {
  value: string | number;
  id?: string;
  label?: string;
  helperText?: string;
};

export type RadioGroupProps = {
  options: Array<RadioGroupOption>;
  disabled?: boolean;
  value: string | number;
  onChange?: (value: string | number) => void;
  onBlur?: () => void;
  variant?: "outlined" | "normal";
  error?: boolean;
  required?: boolean;
};

export const RadioGroup = ({
  options,
  disabled = false,
  value,
  onChange = () => {},
  onBlur = () => {},
  variant = "normal",
  error = false,
  required = false,
}: RadioGroupProps) => {
  function handleSelect(value: string | number) {
    if (!disabled) {
      onChange(value);
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const selectedIndex = options.findIndex((o) => o.value === value) || 0;
    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
        let nextIndex = selectedIndex + 1;
        if (nextIndex >= options.length) {
          nextIndex = 0;
        }

        const nextOption = options[nextIndex];
        handleSelect(nextOption.value);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        let prevIndex = selectedIndex - 1;
        if (prevIndex < 0) {
          prevIndex = options.length - 1;
        }
        const prevOption = options[prevIndex];
        handleSelect(prevOption.value);
        break;
    }
  }

  return (
    <Box
      role="radiogroup"
      onKeyDown={handleKeyDown}
      onBlur={onBlur}
      borderRadius="standard"
      aria-invalid={error}
      aria-disabled={disabled}
      aria-required={required}
      borderStyle="solid"
      css={(theme) => [
        css`
          border-width: 0;
          border-color: ${theme.colors.primary["100"]};
          > div {
            border-bottom-color: ${theme.colors.primary["100"]};
            border-bottom-style: solid;
            border-bottom-width: ${theme.borderWidths.standard};
          }

          div:last-of-type {
            border: none;
          }
        `,
        variant === "outlined" &&
          css`
            border-width: ${theme.borderWidths.standard};
            div:first-of-type {
              border-top-left-radius: ${theme.radii.standard};
              border-top-right-radius: ${theme.radii.standard};
            }

            div:last-of-type {
              border: none;
              border-bottom-left-radius: ${theme.radii.standard};
              border-bottom-right-radius: ${theme.radii.standard};
            }
          `,
        disabled &&
          css`
            border-color: ${theme.colors.neutral["100"]};
            > div {
              border-bottom-color: ${theme.colors.neutral["100"]};
            }
          `,
        error &&
          css`
            border-color: ${theme.colors.error["500"]};
            > div {
              border-bottom-color: ${theme.colors.error["500"]};
            }
          `,
      ]}
    >
      {options.map((o, i) => (
        <Radio
          {...o}
          key={o.value}
          error={error}
          tabIndex={i === 0 ? 0 : -1}
          onSelect={handleSelect}
          disabled={disabled}
          checked={value === o.value}
        />
      ))}
    </Box>
  );
};
