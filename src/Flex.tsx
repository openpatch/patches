/** @jsx jsx */
import { ReactNode } from "react";
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { flexbox, FlexboxProps } from "./system";

export type FlexProps = FlexboxProps;

export const Flex = styled.div<FlexProps>({ display: "flex" }, flexbox);
