import base from "./base";

describe("base theme", () => {
  test("media query (mq)", () => {
    expect(base.mq("sm")).toBe("@media (min-width: 640px)");
  });
});
