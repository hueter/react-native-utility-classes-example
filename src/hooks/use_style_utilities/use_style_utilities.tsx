import { FlexStyle, StyleProp, TextStyle } from "react-native";
import { StyleUtilityHelper, UtilProp } from "src/helpers/style_utility_helper";

export const useStyleUtilties = <T extends FlexStyle | TextStyle>({
  existingStyles,
  utilities,
}: {
  existingStyles: StyleProp<any>;
  utilities?: UtilProp["util"];
}): T => {
  let appliedStyles = existingStyles;
  if (utilities) {
    appliedStyles = {
      ...existingStyles,
      ...StyleUtilityHelper.applyStyleUtilities(utilities),
    } as T;
  }
  return appliedStyles as T;
};
