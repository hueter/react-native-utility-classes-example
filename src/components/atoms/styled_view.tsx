import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import { applyStyleUtilities, UtilProp } from "src/helpers/style_utility_helper";

export type StyledViewProps = ViewProps & UtilProp;

export const StyledView: React.FC<StyledViewProps> = ({
  style,
  util,
  ...props
}) => {
  const stylesWithUtilities = Object.assign(
    {},
    style,
    applyStyleUtilities(util)
  );
  return <View {...props} style={stylesWithUtilities} />;
};
