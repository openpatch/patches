// follows https://www.w3.org/TR/wai-aria-practices/examples/checkbox/checkbox-1/checkbox-1.html
import { KeyboardEvent, ReactNode } from "react";
import { css } from "@emotion/react";
import { Box } from "./Box";

export type CheckboxProps = {
  id?: string;
  children?: ReactNode;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  onChange?: (checked: boolean) => void;
  onBlur?: () => void;
};

export const Checkbox = ({
  id,
  children,
  checked = false,
  disabled = false,
  required = false,
  onChange = () => {},
  onBlur = () => {},
}: CheckboxProps) => {
  function handleClick() {
    if (!disabled) {
      onChange(!checked);
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (!disabled) {
      if (e.key === " ") {
        onChange(!checked);
        e.stopPropagation();
        e.preventDefault();
      }
    }
  }

  return (
    <Box
      id={id}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onBlur={onBlur}
      css={(theme) => [
        css`
          display: inline-block;
          position: relative;
          padding-left: 1.4em;
          cursor: default;

          ::before,
          ::after {
            position: absolute;
            top: 50%;
            left: 7px;
            transform: translate(-50%, -50%);
            content: "";
          }

          ::before {
            width: 18px;
            height: 18px;
            border: 1px solid hsl(0, 0%, 66%);
            border-radius: 0.2em;
          }

          :active::before {
            background-image: linear-gradient(
              to bottom,
              hsl(300, 3%, 73%),
              hsl(300, 3%, 93%) 30%
            );
          }

          :focus {
            outline: none;
          }

          :focus::before {
            width: 20px;
            height: 20px;
            box-sizing: content-box;
            box-shadow: ${theme.shadows.outline};
          }
        `,
        checked &&
          css`
            ::before {
              background: ${theme.colors.primary["800"]};
            }

            ::after {
              display: block;
              width: 0.25em;
              height: 0.5em;
              border: solid #fff;
              border-width: 0 0.155em 0.155em 0;
              transform: translateY(-65%) translateX(-50%) rotate(45deg);
            }

            :active::before {
              background: ${theme.colors.primary["800"]};
            }
          `,
        disabled &&
          css`
            cursor: not-allowed;

            ::before {
              background: ${theme.colors.neutral["100"]};
            }
            :focus::before {
              box-shadow: none;
            }

            :active::before {
              background-image: none;
            }
          `,
      ]}
      role="checkbox"
      aria-checked={checked}
      aria-disabled={disabled}
      aria-required={required}
      tabIndex={0}
    >
      {children}
    </Box>
  );
};
