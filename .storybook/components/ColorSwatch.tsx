import React from "react";
import styled from "styled-components";
import ThemeProvider from "../../src/components/ThemeProvider";

const WIDTH = "100px";
const HEIGHT = "100px";
const BORDER_RADIUS = 1;

const Wrapper = styled.div`
  display: inline-block;
  margin-right: ${({ theme }) => theme.spacing[3]}px;
  margin-bottom: ${({ theme }) => theme.spacing[3]}px;
  border-bottom-left-radius: ${({ theme }) =>
    theme.borderRadius[BORDER_RADIUS]}px;
  border-bottom-right-radius: ${({ theme }) =>
    theme.borderRadius[BORDER_RADIUS]}px;
  box-shadow: ${({ theme }) => theme.boxShadow[1]};
`;

const Color = styled.div`
  width: ${WIDTH};
  height: ${HEIGHT};
  border-top-left-radius: ${({ theme }) => theme.borderRadius[BORDER_RADIUS]}px;
  border-top-right-radius: ${({ theme }) =>
    theme.borderRadius[BORDER_RADIUS]}px;
  background-color: ${({ color }) => color};
`;

const Name = styled.div`
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight[1]};
  padding: ${({ theme }) => theme.spacing[2]}px;
`;

const Hex = styled.div`
  color: ${({ theme }) => theme.palette.neutrals[500]};
`;

const ColorSwatch = ({ color, name }) => {
  return (
    <ThemeProvider>
      <Wrapper>
        <Color color={color} />
        <Name>
          {name}
          <Hex>{color}</Hex>
        </Name>
      </Wrapper>
    </ThemeProvider>
  );
};

export default ColorSwatch;
