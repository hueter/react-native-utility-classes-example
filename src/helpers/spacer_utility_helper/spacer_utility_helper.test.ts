import { SpacerUtilityHelper } from "./spacer_utility_helper";

describe("SpacerUtilityHelper", () => {
  describe("applySpacers", () => {
    it("translates bootstrap-style spacers correctly", () => {
      expect(
        SpacerUtilityHelper.applySpacers(["m-0", "ml-auto", "mx-5"])
      ).toEqual({
        margin: 0,
        marginLeft: "auto",
        marginHorizontal: expect.any(Number),
      });

      expect(SpacerUtilityHelper.applySpacers(["p-5", "py-3", "pl-5"])).toEqual(
        {
          padding: expect.any(Number),
          paddingLeft: expect.any(Number),
          paddingVertical: expect.any(Number),
        }
      );
    });
  });
});
