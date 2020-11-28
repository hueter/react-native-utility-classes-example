import { Falsy, ViewStyle } from "react-native";
import { isTruthy } from "src/type_guards/is_truthy";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export type Spacer =
  | "m-0_5"
  | "m-0"
  | "m-1"
  | "m-2"
  | "m-3"
  | "m-4"
  | "m-5"
  | "mt-0"
  | "mt-0_5"
  | "mt-1"
  | "mt-2"
  | "mt-3"
  | "mt-4"
  | "mt-5"
  | "mt-auto"
  | "mb-0"
  | "mb-0_5"
  | "mb-1"
  | "mb-2"
  | "mb-3"
  | "mb-4"
  | "mb-5"
  | "mb-auto"
  | "ml-0"
  | "ml-0_5"
  | "ml-1"
  | "ml-2"
  | "ml-3"
  | "ml-4"
  | "ml-5"
  | "ml-auto"
  | "mr-0"
  | "mr-0_5"
  | "mr-1"
  | "mr-2"
  | "mr-3"
  | "mr-4"
  | "mr-5"
  | "mr-auto"
  | "mx-0"
  | "mx-0_5"
  | "mx-1"
  | "mx-2"
  | "mx-3"
  | "mx-4"
  | "mx-5"
  | "my-0"
  | "my-0_5"
  | "my-1"
  | "my-2"
  | "my-3"
  | "my-4"
  | "my-5"
  | "p-0"
  | "p-0_5"
  | "p-1"
  | "p-2"
  | "p-3"
  | "p-4"
  | "p-5"
  | "pt-0"
  | "pt-0_5"
  | "pt-1"
  | "pt-2"
  | "pt-3"
  | "pt-4"
  | "pt-5"
  | "pt-auto"
  | "pb-0"
  | "pb-0_5"
  | "pb-1"
  | "pb-2"
  | "pb-3"
  | "pb-4"
  | "pb-5"
  | "pb-auto"
  | "pl-0"
  | "pl-0_5"
  | "pl-1"
  | "pl-2"
  | "pl-3"
  | "pl-4"
  | "pl-5"
  | "pl-auto"
  | "pr-0"
  | "pr-0_5"
  | "pr-1"
  | "pr-2"
  | "pr-3"
  | "pr-4"
  | "pr-5"
  | "pr-auto"
  | "px-0"
  | "px-0_5"
  | "px-1"
  | "px-2"
  | "px-3"
  | "px-4"
  | "px-5"
  | "py-0"
  | "py-0_5"
  | "py-1"
  | "py-2"
  | "py-3"
  | "py-4"
  | "py-5";

const Spacers: Spacer[] = [
  "m-0_5",
  "m-0",
  "m-1",
  "m-2",
  "m-3",
  "m-4",
  "m-5",
  "mt-0",
  "mt-0_5",
  "mt-1",
  "mt-2",
  "mt-3",
  "mt-4",
  "mt-5",
  "mt-auto",
  "mb-0",
  "mb-0_5",
  "mb-1",
  "mb-2",
  "mb-3",
  "mb-4",
  "mb-5",
  "mb-auto",
  "ml-0",
  "ml-0_5",
  "ml-1",
  "ml-2",
  "ml-3",
  "ml-4",
  "ml-5",
  "ml-auto",
  "mr-0",
  "mr-0_5",
  "mr-1",
  "mr-2",
  "mr-3",
  "mr-4",
  "mr-5",
  "mr-auto",
  "mx-0",
  "mx-0_5",
  "mx-1",
  "mx-2",
  "mx-3",
  "mx-4",
  "mx-5",
  "my-0",
  "my-0_5",
  "my-1",
  "my-2",
  "my-3",
  "my-4",
  "my-5",
  "p-0",
  "p-0_5",
  "p-1",
  "p-2",
  "p-3",
  "p-4",
  "p-5",
  "pt-0",
  "pt-0_5",
  "pt-1",
  "pt-2",
  "pt-3",
  "pt-4",
  "pt-5",
  "pt-auto",
  "pb-0",
  "pb-0_5",
  "pb-1",
  "pb-2",
  "pb-3",
  "pb-4",
  "pb-5",
  "pb-auto",
  "pl-0",
  "pl-0_5",
  "pl-1",
  "pl-2",
  "pl-3",
  "pl-4",
  "pl-5",
  "pl-auto",
  "pr-0",
  "pr-0_5",
  "pr-1",
  "pr-2",
  "pr-3",
  "pr-4",
  "pr-5",
  "pr-auto",
  "px-0",
  "px-0_5",
  "px-1",
  "px-2",
  "px-3",
  "px-4",
  "px-5",
  "py-0",
  "py-0_5",
  "py-1",
  "py-2",
  "py-3",
  "py-4",
  "py-5",
];
export const SpacerSet = new Set<Spacer>(Spacers);

type Size = "0_5" | "0" | "1" | "2" | "3" | "4" | "5";

type MarginProperty = "m" | "mt" | "mb" | "ml" | "mr" | "mx" | "my";
type MarginViewStyleProperty = Extract<
  keyof ViewStyle,
  | "margin"
  | "marginTop"
  | "marginBottom"
  | "marginHorizontal"
  | "marginLeft"
  | "marginRight"
  | "marginVertical"
>;

type PaddingProperty = "p" | "pt" | "pb" | "pl" | "pr" | "px" | "py";
type PaddingViewStyleProperty = Extract<
  keyof ViewStyle,
  | "padding"
  | "paddingTop"
  | "paddingBottom"
  | "paddingHorizontal"
  | "paddingLeft"
  | "paddingRight"
  | "paddingVertical"
>;

const marginPropertyMap: Record<
  MarginProperty,
  {
    property: MarginViewStyleProperty;
    verticalOrHorizontal: "vertical" | "horizontal";
  }
> = {
  m: { property: "margin", verticalOrHorizontal: "vertical" },
  mb: { property: "marginBottom", verticalOrHorizontal: "vertical" },
  ml: { property: "marginLeft", verticalOrHorizontal: "horizontal" },
  mr: { property: "marginRight", verticalOrHorizontal: "horizontal" },
  mt: { property: "marginTop", verticalOrHorizontal: "vertical" },
  mx: { property: "marginHorizontal", verticalOrHorizontal: "horizontal" },
  my: { property: "marginVertical", verticalOrHorizontal: "vertical" },
};

const paddingPropertyMap: Record<
  PaddingProperty,
  {
    property: PaddingViewStyleProperty;
    verticalOrHorizontal: "vertical" | "horizontal";
  }
> = {
  p: { property: "padding", verticalOrHorizontal: "vertical" },
  pb: { property: "paddingBottom", verticalOrHorizontal: "vertical" },
  pl: { property: "paddingLeft", verticalOrHorizontal: "horizontal" },
  pr: { property: "paddingRight", verticalOrHorizontal: "horizontal" },
  pt: { property: "paddingTop", verticalOrHorizontal: "vertical" },
  px: { property: "paddingHorizontal", verticalOrHorizontal: "horizontal" },
  py: { property: "paddingVertical", verticalOrHorizontal: "vertical" },
};

type SpacerSizeMap = {
  [key in Size]: number;
} & {
  auto: "auto";
};

export const verticalSpacerSizeMap: SpacerSizeMap = {
  0: 0,
  "0_5": hp(0.25),
  1: hp(0.5),
  2: hp(1.5),
  3: hp(3),
  4: hp(6),
  5: hp(10),
  auto: "auto",
};

export const horizontalSpacerSizeMap: SpacerSizeMap = {
  0: 0,
  "0_5": wp(0.6),
  1: wp(1.2),
  2: wp(3),
  3: wp(6),
  4: wp(13),
  5: wp(21),
  auto: "auto",
};

export class SpacerUtilityHelper {
  static applySpacer = (spacer: Spacer): ViewStyle => {
    const [property, size] = spacer.split("-");
    const validSize = size as Size;

    let computedProperty: MarginViewStyleProperty | PaddingViewStyleProperty;
    let computedSize: number | "auto";

    if (property.includes("m")) {
      const marginResult = marginPropertyMap[property as MarginProperty];
      computedProperty = marginResult.property;
      computedSize =
        marginResult.verticalOrHorizontal === "vertical"
          ? verticalSpacerSizeMap[validSize]
          : horizontalSpacerSizeMap[validSize];
    } else {
      const paddingResult = paddingPropertyMap[property as PaddingProperty];
      computedProperty = paddingResult.property;
      computedSize =
        paddingResult.verticalOrHorizontal === "vertical"
          ? verticalSpacerSizeMap[validSize]
          : horizontalSpacerSizeMap[validSize];
    }
    return {
      [computedProperty]: computedSize,
    };
  };

  static applySpacers = (spacers: Array<Spacer | Falsy>): ViewStyle => {
    return spacers.filter(isTruthy).reduce((accumulator, spacer) => {
      return { ...accumulator, ...SpacerUtilityHelper.applySpacer(spacer) };
    }, {});
  };
}
