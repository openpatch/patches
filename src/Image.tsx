import { HTMLAttributes } from "react";
import { border, BorderProps, space, SpaceProps, styled } from "./system";


export type ImageProps = BorderProps &
  SpaceProps &
  HTMLAttributes<HTMLImageElement>;

// @ts-ignore
export const Image = styled.img<ImageProps>(border, space);
