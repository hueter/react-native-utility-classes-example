import React from "react";
import { Text, TextProps, TextStyle } from "react-native";
import { useStyleUtilties } from "src/hooks/use_style_utilities";
import { UtilProp } from "src/helpers/style_utility_helper";

export type StyledTextProps = TextProps & UtilProp;

export const StyledText: React.FC<StyledTextProps> = ({
  style,
  util,
  ...props
}) => {
  const stylesWithUtilities = useStyleUtilties<TextStyle>({
    existingStyles: style,
    utilities: util,
  });

  return (
    <Text {...props} style={stylesWithUtilities} />
  );
};
