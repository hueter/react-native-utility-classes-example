import { FlexStyle, TextStyle, ViewStyle } from "react-native";
import { theme } from "src/theme";
import { Falsy } from "src/types";
import { isTruthy } from "src/type_guards/is_truthy";
import { applySpacer, Spacer, SpacerSet } from "src/helpers/spacer_utility_helper";

type TextUtils =
  | "font-bold"
  | "font-normal"
  | "h1"
  | "h2"
  | "h3"
  | "italic-bold"
  | "italic"
  | "not-italic"
  | "text-2xl"
  | "text-3xl"
  | "text-base"
  | "text-lg"
  | "text-sm"
  | "text-xl"
  | "text-xs"
  | "underline"
  | "line-through"
  | "no-underline"
  | "text-left"
  | "text-center"
  | "text-right"
  | "text-justify";

type TextColorUtils =
  | "text-danger"
  | "text-gray50"
  | "text-gray100"
  | "text-gray200"
  | "text-gray300"
  | "text-gray400"
  | "text-gray500"
  | "text-gray600"
  | "text-gray700"
  | "text-gray800"
  | "text-gray900"
  | "text-primary"
  | "text-secondary"
  | "text-success"
  | "text-warning"
  | "text-white";

type BackgroundColorUtilities =
  | "bg-danger"
  | "bg-gray50"
  | "bg-gray100"
  | "bg-gray200"
  | "bg-gray300"
  | "bg-gray400"
  | "bg-gray500"
  | "bg-gray600"
  | "bg-gray700"
  | "bg-gray800"
  | "bg-gray900"
  | "bg-primary"
  | "bg-secondary"
  | "bg-success"
  | "bg-transparent"
  | "bg-warning"
  | "bg-white";

type BorderColorUtilities =
  | "border-danger"
  | "border-gray50"
  | "border-gray100"
  | "border-gray200"
  | "border-gray300"
  | "border-gray400"
  | "border-gray500"
  | "border-gray600"
  | "border-gray700"
  | "border-gray800"
  | "border-gray900"
  | "border-primary"
  | "border-secondary"
  | "border-success"
  | "border-transparent"
  | "border-white";

type BorderUtilities =
  | "border-0"
  | "border-2"
  | "border-4"
  | "border-8"
  | "border-b-0"
  | "border-b-2"
  | "border-b-4"
  | "border-b-8"
  | "border-b"
  | "border-l-0"
  | "border-l-2"
  | "border-l-4"
  | "border-l-8"
  | "border-l"
  | "border-r-0"
  | "border-r-2"
  | "border-r-4"
  | "border-r-8"
  | "border-r"
  | "border-t-0"
  | "border-t-2"
  | "border-t-4"
  | "border-t-8"
  | "border-t"
  | "border"
  | "rounded-b-full"
  | "rounded-b-lg"
  | "rounded-b-md"
  | "rounded-b-none"
  | "rounded-b-sm"
  | "rounded-b"
  | "rounded-full"
  | "rounded-lg"
  | "rounded-md"
  | "rounded-none"
  | "rounded-sm"
  | "rounded-t-full"
  | "rounded-t-lg"
  | "rounded-t-md"
  | "rounded-t-none"
  | "rounded-t-sm"
  | "rounded-t"
  | "rounded-tl-md"
  | "rounded-tr-md"
  | "rounded";

type FlexUtils =
  | "flex-1"
  | "flex-col-reverse"
  | "flex-col"
  | "flex-grow-0"
  | "flex-grow"
  | "flex-no-wrap"
  | "flex-none"
  | "flex-row-reverse"
  | "flex-row"
  | "flex-shrink-0"
  | "flex-shrink"
  | "flex-wrap-reverse"
  | "flex-wrap"
  | "items-baseline"
  | "items-center"
  | "items-end"
  | "items-start"
  | "items-stretch"
  | "justify-around"
  | "justify-between"
  | "justify-center"
  | "justify-end"
  | "justify-evenly"
  | "justify-start"
  | "self-auto"
  | "self-center"
  | "self-end"
  | "self-start"
  | "self-stretch";

type PositionUtils =
  | "absolute"
  | "bottom-0"
  | "inset-0"
  | "left-0"
  | "relative"
  | "right-0"
  | "top-0";

type SizeUtils = "h-full" | "w-full";

type OpacityUtils =
  | "opacity-0"
  | "opacity-100"
  | "opacity-25"
  | "opacity-50"
  | "opacity-75";

type ShadowUtils =
  | "shadow-lg"
  | "shadow-md"
  | "shadow-sm"
  | "shadow-xl"
  | "shadow-xs"
  | "shadow";

type OverflowUtils =
  | "overflow-auto"
  | "overflow-hidden"
  | "overflow-scroll"
  | "overflow-visible";

type ZIndexUtils = "z-0" | "z-10" | "z-20" | "z-30" | "z-40" | "z-50";

/**
 * Based on tailwind utilities, check out https://tailwindcss.com/docs/utility-first
 */
export type UtilityName =
  | BackgroundColorUtilities
  | BorderColorUtilities
  | BorderUtilities
  | FlexUtils
  | PositionUtils
  | TextUtils
  | TextColorUtils
  | OpacityUtils
  | SizeUtils
  | OverflowUtils
  | ShadowUtils
  | ZIndexUtils;

export type Util = Array<UtilityName | Spacer | Falsy> | null | undefined;
export type UtilProp = {
  util?: Util;
};

type UtilityNameFlexMap = {
  [key in UtilityName]: {
    [FlexKey in keyof FlexStyle]: FlexStyle[FlexKey];
  };
};

type UtilityNameTextMap = {
  [key in UtilityName]: {
    [TextKey in keyof TextStyle]: TextStyle[TextKey];
  };
};

type UtilityNameViewMap = {
  [key in UtilityName]: {
    [ViewKey in keyof ViewStyle]: ViewStyle[ViewKey];
  };
};

const utilityNameMap: UtilityNameFlexMap &
  UtilityNameTextMap &
  UtilityNameViewMap = {
  "flex-1": {
    flex: 1,
  },
  "flex-col": {
    flexDirection: "column",
  },
  "flex-col-reverse": {
    flexDirection: "column-reverse",
  },
  "flex-none": {
    flex: undefined,
  },
  "flex-row": {
    flexDirection: "row",
  },
  "flex-row-reverse": {
    flexDirection: "row-reverse",
  },
  "flex-wrap": {
    flexWrap: "wrap",
  },
  "flex-no-wrap": {
    flexWrap: "nowrap",
  },
  "flex-wrap-reverse": {
    flexWrap: "wrap-reverse",
  },
  "flex-grow": {
    flexGrow: 1,
  },
  "flex-grow-0": {
    flexGrow: 0,
  },
  "flex-shrink": {
    flexShrink: 1,
  },
  "flex-shrink-0": {
    flexShrink: 0,
  },
  "justify-around": {
    justifyContent: "space-around",
  },
  "justify-between": {
    justifyContent: "space-between",
  },
  "justify-center": {
    justifyContent: "center",
  },
  "justify-end": {
    justifyContent: "flex-end",
  },
  "justify-evenly": {
    justifyContent: "space-evenly",
  },
  "justify-start": {
    justifyContent: "flex-start",
  },
  "items-baseline": {
    alignItems: "baseline",
  },
  "items-center": {
    alignItems: "center",
  },
  "items-end": {
    alignItems: "flex-end",
  },
  "items-start": {
    alignItems: "flex-start",
  },
  "items-stretch": {
    alignItems: "stretch",
  },
  "self-auto": {
    alignSelf: "auto",
  },
  "self-center": {
    alignSelf: "center",
  },
  "self-end": {
    alignSelf: "flex-end",
  },
  "self-start": {
    alignSelf: "flex-start",
  },
  "self-stretch": {
    alignSelf: "stretch",
  },

  "bg-white": {
    backgroundColor: "white",
  },

  "bg-danger": {
    backgroundColor: theme.colors.danger,
  },
  "bg-success": {
    backgroundColor: theme.colors.success,
  },
  "bg-gray50": {
    backgroundColor: theme.colors.gray300,
  },
  "bg-gray100": {
    backgroundColor: theme.colors.gray300,
  },
  "bg-gray200": {
    backgroundColor: theme.colors.gray300,
  },
  "bg-gray300": {
    backgroundColor: theme.colors.gray300,
  },
  "bg-gray400": {
    backgroundColor: theme.colors.gray400,
  },
  "bg-gray500": {
    backgroundColor: theme.colors.gray500,
  },
  "bg-gray600": {
    backgroundColor: theme.colors.gray600,
  },
  "bg-gray700": {
    backgroundColor: theme.colors.gray700,
  },
  "bg-gray800": {
    backgroundColor: theme.colors.gray800,
  },
  "bg-gray900": {
    backgroundColor: theme.colors.gray800,
  },
  "bg-primary": {
    backgroundColor: theme.colors.primary,
  },
  "bg-secondary": {
    backgroundColor: theme.colors.secondary,
  },
  "bg-transparent": {
    backgroundColor: "transparent",
  },

  "text-white": {
    color: "white",
  },
  "text-danger": {
    color: theme.colors.danger,
  },
  "text-success": {
    color: theme.colors.success,
  },
  "text-gray50": {
    color: theme.colors.gray50,
  },
  "text-gray100": {
    color: theme.colors.gray100,
  },
  "text-gray200": {
    color: theme.colors.gray200,
  },
  "text-gray300": {
    color: theme.colors.gray300,
  },
  "text-gray400": {
    color: theme.colors.gray400,
  },
  "text-gray500": {
    color: theme.colors.gray500,
  },
  "text-gray600": {
    color: theme.colors.gray600,
  },
  "text-gray700": {
    color: theme.colors.gray700,
  },
  "text-gray800": {
    color: theme.colors.gray800,
  },
  "text-gray900": {
    color: theme.colors.gray900,
  },
  "text-primary": {
    color: theme.colors.primary,
  },
  "text-secondary": {
    color: theme.colors.secondary,
  },
  "opacity-0": {
    opacity: 0,
  },
  "opacity-25": {
    opacity: 0.25,
  },
  "opacity-50": {
    opacity: 0.5,
  },
  "opacity-75": {
    opacity: 0.75,
  },
  "opacity-100": {
    opacity: 1,
  },
  "border-0": {
    borderWidth: 0,
  },
  "border-2": {
    borderWidth: 2,
  },
  "border-4": {
    borderWidth: 4,
  },
  "border-8": {
    borderWidth: 8,
  },
  "border-t": {
    borderTopWidth: 1,
  },
  "border-t-0": {
    borderTopWidth: 0,
  },
  "border-t-2": {
    borderTopWidth: 2,
  },
  "border-t-4": {
    borderTopWidth: 4,
  },
  "border-t-8": {
    borderTopWidth: 8,
  },
  "border-b": {
    borderBottomWidth: 1,
  },
  "border-b-0": {
    borderBottomWidth: 0,
  },
  "border-b-2": {
    borderBottomWidth: 2,
  },
  "border-b-4": {
    borderBottomWidth: 4,
  },
  "border-b-8": {
    borderBottomWidth: 8,
  },
  "border-r": {
    borderRightWidth: 1,
  },
  "border-r-0": {
    borderRightWidth: 0,
  },
  "border-r-2": {
    borderRightWidth: 2,
  },
  "border-r-4": {
    borderRightWidth: 4,
  },
  "border-r-8": {
    borderRightWidth: 8,
  },
  "border-l": {
    borderLeftWidth: 1,
  },
  "border-l-0": {
    borderLeftWidth: 0,
  },
  "border-l-2": {
    borderLeftWidth: 2,
  },
  "border-l-4": {
    borderLeftWidth: 4,
  },
  "border-l-8": {
    borderLeftWidth: 8,
  },
  border: {
    borderWidth: 1,
  },
  "border-white": {
    borderColor: "white",
  },
  "border-danger": {
    borderColor: theme.colors.danger,
  },
  "border-success": {
    borderColor: theme.colors.success,
  },
  "border-gray50": {
    borderColor: theme.colors.gray50,
  },
  "border-gray100": {
    borderColor: theme.colors.gray100,
  },
  "border-gray200": {
    borderColor: theme.colors.gray200,
  },
  "border-gray300": {
    borderColor: theme.colors.gray300,
  },
  "border-gray400": {
    borderColor: theme.colors.gray400,
  },
  "border-gray500": {
    borderColor: theme.colors.gray500,
  },
  "border-gray600": {
    borderColor: theme.colors.gray600,
  },
  "border-gray700": {
    borderColor: theme.colors.gray700,
  },
  "border-gray800": {
    borderColor: theme.colors.gray800,
  },
  "border-gray900": {
    borderColor: theme.colors.gray900,
  },
  "border-primary": {
    borderColor: theme.colors.primary,
  },
  "border-secondary": {
    borderColor: theme.colors.secondary,
  },
  "border-transparent": {
    borderColor: "transparent",
  },
  absolute: {
    position: "absolute",
  },
  relative: {
    position: "relative",
  },
  "inset-0": {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  "bottom-0": {
    bottom: 0,
  },
  "left-0": {
    left: 0,
  },
  "right-0": {
    right: 0,
  },
  "top-0": {
    top: 0,
  },
  "z-0": {
    zIndex: 0,
    elevation: 0,
  },
  "z-10": {
    zIndex: 10,
    elevation: 2,
  },
  "z-20": {
    zIndex: 20,
    elevation: 4,
  },
  "z-30": {
    zIndex: 30,
    elevation: 6,
  },
  "z-40": {
    zIndex: 40,
    elevation: 8,
  },
  "z-50": {
    zIndex: 50,
    elevation: 10,
  },
  "text-3xl": {
    fontSize: theme.typography.sizes["3xl"],
  },
  "text-2xl": {
    fontSize: theme.typography.sizes["2xl"],
  },
  "text-xl": {
    fontSize: theme.typography.sizes.xl,
  },
  "text-lg": {
    fontSize: theme.typography.sizes.lg,
  },
  "text-base": {
    fontSize: theme.typography.sizes.base,
  },
  "text-sm": {
    fontSize: theme.typography.sizes.sm,
  },
  "text-xs": {
    fontSize: theme.typography.sizes.xs,
  },

  h1: {
    fontSize: theme.typography.sizes.h1,
    lineHeight: 44,
    fontStyle: "normal",
    fontWeight: "bold",
  },
  h2: {
    fontSize: theme.typography.sizes.h2,
    lineHeight: 40,
    fontStyle: "normal",
    fontWeight: "bold",
  },
  h3: {
    fontSize: theme.typography.sizes.h3,
    lineHeight: 34,
    fontStyle: "normal",
    fontWeight: "bold",
  },
  "font-bold": {
    fontWeight: "bold",
    // you might have to set fontFamily here as well to a bold font
  },
  "font-normal": {
    fontWeight: "normal",
  },
  "not-italic": {
    fontStyle: "normal",
  },
  italic: {
    fontStyle: "italic",
    // you might have to set fontFamily here as well to an italic font
  },

  "italic-bold": {
    fontStyle: "italic",
    fontWeight: "bold",
    // you might have to set fontFamily here as well to an italic/bold font
  },
  "h-full": {
    height: "100%",
  },
  "w-full": {
    width: "100%",
  },
  rounded: {
    borderRadius: 10,
  },
  "rounded-full": {
    borderRadius: 999,
  },
  "rounded-lg": {
    borderRadius: 50,
  },
  "rounded-md": {
    borderRadius: 25,
  },
  "rounded-none": {
    borderRadius: 0,
  },
  "rounded-sm": {
    borderRadius: 5,
  },
  "rounded-t": {
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  "rounded-t-full": {
    borderTopStartRadius: 999,
    borderTopEndRadius: 999,
  },
  "rounded-t-lg": {
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
  "rounded-t-md": {
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  "rounded-t-none": {
    borderTopStartRadius: 0,
    borderTopEndRadius: 0,
  },
  "rounded-t-sm": {
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
  },
  "rounded-b": {
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  "rounded-b-full": {
    borderBottomStartRadius: 999,
    borderBottomEndRadius: 999,
  },
  "rounded-b-lg": {
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
  },
  "rounded-b-md": {
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  "rounded-b-none": {
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
  },
  "rounded-b-sm": {
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
  },
  "rounded-tl-md": {
    borderTopStartRadius: 25,
  },
  "rounded-tr-md": {
    borderTopEndRadius: 25,
  },
  "shadow-xs": {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.0,
    elevation: 1,
  },
  "shadow-sm": {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  "shadow-md": {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  "shadow-lg": {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  "shadow-xl": {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  "overflow-auto": {
    overflow: undefined,
  },
  "overflow-hidden": {
    overflow: "hidden",
  },
  "overflow-scroll": {
    overflow: "scroll",
  },
  "overflow-visible": {
    overflow: "visible",
  },
  "bg-warning": {
    backgroundColor: theme.colors.warning,
  },
  "text-warning": {
    color: theme.colors.warning,
  },
  "line-through": {
    textDecorationLine: "line-through",
  },
  underline: {
    textDecorationLine: "underline",
  },
  "no-underline": {
    textDecorationLine: "none",
  },
  "text-center": {
    textAlign: "center",
  },
  "text-left": {
    textAlign: "left",
  },
  "text-right": {
    textAlign: "right",
  },
  "text-justify": {
    textAlign: "justify",
  },
};

/**
 * A helper that converts an array of utility class names into inline styles.
 * @param utilities - An array of utility class names (strings). Also accepts falsy values to be filtered out
 */
export function applyStyleUtilities<
  T extends FlexStyle | TextStyle | ViewStyle
>(utilities: Util): T {
  return utilities?.filter(isTruthy).reduce((accumulator, utility) => {
    const currentUtility = SpacerSet.has(utility as Spacer)
      ? applySpacer(utility as Spacer) // handle spacers separately
      : utilityNameMap[utility as UtilityName];
    return { ...accumulator, ...currentUtility };
  }, {}) as T;
}

/**
 * A helper that converts a list of utility class names into inline styles.
 * @param utilities - A comma-separated list of utility class names
 */
export function util<T extends FlexStyle | TextStyle | ViewStyle>(
  ...utilities: Array<UtilityName | Spacer | Falsy>
): T {
  return applyStyleUtilities(utilities);
}
