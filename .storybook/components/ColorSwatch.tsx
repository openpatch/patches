import React from "react";
import styled from "../../src/styled";
import ThemeProvider from "../../src/ThemeProvider";

const WIDTH = "100px";
const HEIGHT = "100px";
const BORDER_RADIUS = 1;

const Wrapper = styled.div`
  display: inline-block;
  margin-right: ${({ theme }) => theme.spacing["3"]};
  margin-bottom: ${({ theme }) => theme.spacing["3"]};
  border-bottom-left-radius: ${({ theme }) =>
    theme.borderRadius[BORDER_RADIUS]};
  border-bottom-right-radius: ${({ theme }) =>
    theme.borderRadius[BORDER_RADIUS]};
  box-shadow: ${({ theme }) => theme.boxShadow["md"]};
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
  font-weight: ${({ theme }) => theme.fontWeight["normal"]};
  padding: ${({ theme }) => theme.spacing["2"]};
`;

const Hex = styled.div`
  color: ${({ theme }) => theme.colors.neutrals[500]};
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
