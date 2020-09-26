/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Icon, IconProps } from "../../src/Icon";
import { Card } from "../../src/Card";
import { CardContent } from "../../src/CardContent";
import { Flex } from "../../src/Flex";
import { AutoGrid } from "../../src/AutoGrid";
import { Box } from "../../src/Box";

export type IconsProps = {
  icons: Record<string, any>;
} & IconProps;

export const Icons = ({ icons, color, size = "auto" }: IconsProps) => {
  return (
    <AutoGrid columns={2} gap="standard">
      {Object.keys(icons).map((key) => {
        const I = icons[key];

        return (
          <Card key={key}>
            <CardContent>
              <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Icon color={color} size={size}>
                  <I />
                </Icon>
                <Box mt="xsmall" textAlign="center">
                  <span>{key}</span>
                </Box>
              </Flex>
            </CardContent>
          </Card>
        );
      })}
    </AutoGrid>
  );
};
