import { cssColor } from "./utils";
import { teal } from "../shared/colors";

test("cssColor", () => {
  const css = cssColor(teal, "text");

  expect(css).toMatchSnapshot();
});
