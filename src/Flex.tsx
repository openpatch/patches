import { flexbox, FlexboxProps, styled } from "./system";

export type FlexProps = FlexboxProps;

export const Flex = styled.div<FlexProps>({ display: "flex" }, flexbox);
