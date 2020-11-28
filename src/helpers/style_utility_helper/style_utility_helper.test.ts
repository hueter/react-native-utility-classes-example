import { TextStyle, ViewStyle } from "react-native";
import { StyleUtilityHelper } from "src/helpers/style_utility_helper";

describe("StyleUtilityHelper", () => {
  describe("applyStyleUtilities", () => {
    it("translates tailwind utilities correctly", () => {
      expect(
        StyleUtilityHelper.applyStyleUtilities([
          "bg-primary",
          "border",
          "border-gray200",
          "rounded",
          "p-5",
        ])
      ).toEqual({
        backgroundColor: expect.any(String),
        borderWidth: 1,
        borderColor: expect.any(String),
        borderRadius: expect.any(Number),
        padding: expect.any(Number),
      } as ViewStyle);

      expect(
        StyleUtilityHelper.applyStyleUtilities([
          "italic",
          "font-bold",
          "text-lg",
          "mb-3",
        ])
      ).toEqual({
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize: expect.any(Number),
        marginBottom: expect.any(Number),
      } as TextStyle);
    });
  });
});
