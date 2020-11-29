import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import { useStyleUtilties } from "src/hooks/use_style_utilities";
import { UtilProp } from "src/helpers/style_utility_helper";

export type StyledViewProps = ViewProps & UtilProp;

export const StyledView: React.FC<StyledViewProps> = ({
  style,
  util,
  ...props
}) => {
  const stylesWithUtilities = useStyleUtilties({
    existingStyles: style,
    utilities: util,
  });

  return <View {...props} style={stylesWithUtilities} />;
};
