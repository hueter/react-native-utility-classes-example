import React from "react";
import { Text, TextProps, TextStyle } from "react-native";
import { applyStyleUtilities, UtilProp } from "src/helpers/style_utility_helper";

export type StyledTextProps = TextProps & UtilProp;

export const StyledText: React.FC<StyledTextProps> = ({
  style,
  util,
  ...props
}) => {
  const stylesWithUtilities = Object.assign(
    {},
    style,
    applyStyleUtilities(util)
  );
  return <Text {...props} style={stylesWithUtilities} />;
};
