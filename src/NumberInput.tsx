import { ChangeEvent, KeyboardEvent } from "react";
import { css } from "@emotion/react";
import { Box } from "./Box";
import { StyledInput } from "./Input";
import { ChevronDown, ChevronUp } from "./icons/outline";

export type NumberInputProps = {
  id?: string;
  max?: number;
  min?: number;
  step?: number;
  value?: number;
  onChange?: (n: number | null) => void;
  onBlur?: () => void;
  disabled?: boolean;
  error?: boolean;
  required?: boolean;
};

export const NumberInput = ({
  id,
  min,
  max,
  step = 1,
  value = 0,
  onChange = () => {},
  onBlur = () => {},
  disabled = false,
  error = false,
  required = false,
}: NumberInputProps) => {
  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    let flag = true;
    switch (e.key) {
      case "ArrowUp":
        increase();
        break;
      case "ArrowDown":
        decrease();
        break;
      case "Home":
        toMin();
        break;
      case "End":
        toMax();
        break;
      default:
        flag = false;
    }

    if (flag) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  function handleInnerChange(v: number | null) {
    if (!disabled) {
      onChange(v);
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const n = Number(e.currentTarget.value);
    if (Number.isNaN(n)) {
      handleInnerChange(null);
    } else {
      handleInnerChange(n);
    }
  }

  function toMax() {
    if (max) {
      handleInnerChange(max);
    }
  }

  function toMin() {
    if (min) {
      handleInnerChange(min);
    }
  }

  function increase() {
    const newValue = value + step;
    if (!max || newValue <= max) {
      handleInnerChange(newValue);
    }
  }

  function decrease() {
    const newValue = value - step;
    if (!min || newValue >= min) {
      handleInnerChange(newValue);
    }
  }

  return (
    <Box position="relative">
      <StyledInput
        id={id}
        required={required}
        disabled={disabled}
        error={error}
        padding="xsmall"
        css={css`
          box-sizing: border-box;
          appearance: none;
          margin: 0;
          width: 100%;
          position: relative;
          padding-left: 1rem;
          padding-right: 1rem;
        `}
        onChange={handleChange}
        value={value?.toString()}
        onKeyDown={handleKeyDown}
        onBlur={onBlur}
        type="text"
        inputMode="decimal"
        pattern="[0-9]*(.[0-9]+)?"
        role="spinbutton"
      />
      <Box
        zIndex="10"
        cursor="pointer"
        position="absolute"
        borderLeftColor="neutral.100"
        borderLeftStyle="solid"
        css={css`
          top: 1px;
          bottom: 1px;
          right: 2px;
          border-left-width: 1px;
        `}
        width="24px"
      >
        <Box
          aria-label={`+${step}`}
          height="50%"
          width="24px"
          textAlign="center"
          top={0}
          backgroundColor="neutral.50"
          position="absolute"
          role="button"
          tabIndex={-1}
          css={css`
            border-bottom-width: 1px;
          `}
          borderBottomColor="neutral.100"
          borderBottomStyle="solid"
          onClick={increase}
        >
          <ChevronUp height="1em" />
        </Box>
        <Box
          aria-label={`-${step}`}
          height="50%"
          bottom={0}
          width="24px"
          textAlign="center"
          backgroundColor="neutral.50"
          position="absolute"
          role="button"
          tabIndex={-1}
          onClick={decrease}
        >
          <ChevronDown height="1em" />
        </Box>
      </Box>
    </Box>
  );
};
