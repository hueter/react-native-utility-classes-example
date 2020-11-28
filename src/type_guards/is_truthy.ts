import { Falsy } from "react-native";

/**
 * A type guard that filters out falsy items
 * @param it Any type
 */
export function isTruthy<T>(it: T | Falsy): it is T {
  return Boolean(it);
}
