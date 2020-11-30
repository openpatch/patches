import styled from "@emotion/styled";
import { flexbox, FlexboxProps } from "./system";

export type FlexProps = FlexboxProps;

export const Flex = styled.div<FlexProps>({ display: "flex" }, flexbox);
