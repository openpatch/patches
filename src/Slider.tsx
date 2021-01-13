import { ChangeEvent, KeyboardEvent, ReactNode, useRef } from "react";
import { css } from "@emotion/react";
import { Box } from "./Box";

export type SliderProps = {
  id?: string;
  value?: number;
  onChange?: (n: number | null) => void;
  onBlur?: () => void;
  disabled?: boolean;
  required?: boolean;
  step?: number;
  labelLeft?: ReactNode;
  labelRight?: ReactNode;
  showValue?: boolean;
  min?: number;
  max?: number;
};

export const Slider = ({
  id,
  labelLeft = null,
  labelRight = null,
  value = 0,
  step = 1,
  min = 0,
  max = 100,
  disabled = false,
  required = false,
  showValue = true,
  onBlur = () => {},
  onChange = () => {},
}: SliderProps) => {
  const bubbleRef = useRef<HTMLDivElement>(null);

  function showBubble() {
    if (bubbleRef.current) {
      bubbleRef.current.style.visibility = "visible";
      bubbleRef.current.style.opacity = "1";
    }
  }

  function hideBubble() {
    if (bubbleRef.current) {
      bubbleRef.current.style.visibility = "hidden";
      bubbleRef.current.style.opacity = "0";
    }
  }

  function handleFocus() {
    showBubble();
  }

  function handleBlur() {
    onBlur();
    hideBubble();
  }

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
    const n = Number(e.target.value);
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

  const thumbPosition = Number(((value - min) * 100) / (max - min));

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Box mr="xsmall">{labelLeft ? labelLeft : min}</Box>
      <Box position="relative" display="flex" flex={1} alignItems="center">
        <input
          id={id}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onPointerOver={handleFocus}
          onPointerLeave={handleBlur}
          onPointerDown={handleFocus}
          onPointerUp={handleBlur}
          required={required}
          disabled={disabled}
          css={(theme) => [
            css`
              width: 100%;
              appearance: none;
              cursor: pointer;
              height: 8px;
              outline: none;
              border-radius: ${theme.radii.small};
              background-color: ${theme.colors.neutral["200"]};

              ::-moz-range-thumb,
              ::-webkit-slider-thumb {
                appearance: none;
                border: none;
                height: 20px;
                width: 20px;
                border-radius: 50%;
                background-color: ${theme.colors.primary["800"]};
              }
            `,
            disabled &&
              css`
                cursor: not-allowed;
                ::-moz-range-thumb,
                ::-webkit-slider-thumb {
                  background-color: ${theme.colors.neutral["200"]};
                }
              `,
          ]}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {showValue && (
          <output
            ref={bubbleRef}
            style={{
              left: `calc(${thumbPosition}% + (${
                10 - thumbPosition * 0.18
              }px))`,
            }}
            css={() => css`
              position: absolute;
              top: -36px;
              margin-left: -17px;
              z-index: 1;
              font-size: 0.75rem;
              visibility: hidden;
              opacity: 0;
              transform: scale(1) translateY(-10px);
              pointer-events: none;
              transition: visibility 0.33s linear, opacity 0.33s linear;
            `}
          >
            <span
              css={(theme) => [
                css`
                  width: 32px;
                  height: 32px;
                  display: flex;
                  transform: rotate(-45deg);
                  align-items: center;
                  border-radius: 50% 50% 50% 0;
                  justify-content: center;
                  background-color: ${theme.colors.primary["800"]};
                `,
                disabled &&
                  css`
                    background-color: ${theme.colors.neutral["200"]};
                  `,
              ]}
            >
              <span
                css={(theme) => css`
                  color: ${theme.colors.primary["50"]};
                  transform: rotate(45deg);
                `}
              >
                {value}
              </span>
            </span>
          </output>
        )}
      </Box>
      <Box ml="xsmall">{labelRight ? labelRight : max}</Box>
    </Box>
  );
};
