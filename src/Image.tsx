import { HTMLAttributes } from "react";
import { border, BorderProps, space, SpaceProps } from "./system";
/** @jsx jsx */
import styled from "@emotion/styled";

export type ImageProps = BorderProps &
  SpaceProps &
  HTMLAttributes<HTMLImageElement>;

// @ts-ignore
export const Image = styled.img<ImageProps>(border, space);
