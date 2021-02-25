import { Text } from "../../src/Text";
import { useTheme } from "../../src/hooks";
import { AutoGrid } from "../../src/AutoGrid";

export const Fonts = () => {
  const [{ fonts }] = useTheme();
  return (
    <AutoGrid gap="standard">
      {Object.keys(fonts).map((font) => (
        <div key={font}>
          <Text fontFamily={font as any} fontSize="medium">
            {font}
          </Text>
          <Text fontSize="standard" textColor="neutral.400">
            {fonts[font]}
          </Text>
        </div>
      ))}
    </AutoGrid>
  );
};
