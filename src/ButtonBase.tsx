import React from "react";
import tw, { css, TwStyle } from "twin.macro";
import Spinner from "./icons/Spinner";

export interface ButtonBaseProps {
  label: string;
  iconLeft?: any;
  iconRight?: any;
  cssOverride?: TwStyle;
  size?: "base" | "sm" | "lg";
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
}

const base = tw`
  text-base
  py-2
  px-4
`;

const sm = tw`
  text-sm
  py-1
  px-3
`;

const lg = tw`
  text-lg
  py-3
  px-5
`;

const disabledCss = tw`
  opacity-50
  cursor-not-allowed
`;

export const ButtonBase: React.FC<ButtonBaseProps> = ({
  label,
  iconLeft = null,
  iconRight = null,
  cssOverride = null,
  size = "base",
  fullWidth = false,
  type = undefined,
  disabled = false,
  loading = false,
}) => {
  let sizeCss = base;
  switch (size) {
    case "sm":
      sizeCss = sm;
      break;
    case "lg":
      sizeCss = lg;
      break;
  }
  return (
    <button
      disabled={loading || disabled}
      type={type}
      css={css`
        ${disabled && disabledCss}
        ${loading && tw`animate-pulse`}
        ${fullWidth &&
        tw`w-full`}
        ${sizeCss}
        ${tw`relative transition duration-100`}
      ${tw`rounded font-bold text-center uppercase flex items-center justify-center`}
      ${tw`bg-neutrals-600 hover:bg-neutrals-500 active:bg-neutrals-700 text-neutrals-50 `}
      ${cssOverride}
      `}
    >
      {iconLeft && <span css={tw`w-4 h-4 mr-2`}>{iconLeft}</span>}{" "}
      <span>{label}</span>{" "}
      {iconRight && <span css={tw`w-4 h-4 ml-2`}>{iconRight}</span>}
    </button>
  );
};
