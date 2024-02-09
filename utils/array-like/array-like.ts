import type { OptionalNullable } from "../types.ts";

/**
 * Get length from a object.
 * @example
 * getLength("abc")
 * // returns: 3
 * getLength(null)
 * // returns: 0
 * getLength(undefined)
 * // returns: 0
 * getLength(["abc"])
 * // returns 1
 * @param obj Object with a length property.
 * @returns Value of length property otherwise 0.
 */
export function getLength(obj: OptionalNullable<ArrayLike<unknown>>): number {
  return obj === undefined || obj === null ? 0 : obj.length;
}

/**
 * Test if the given object is empty.
 * @param obj Object with a length property.
 * @returns True if the object is empty, undefined or null otherwise false.
 * @see {@link getLength}
 */
export function isEmpty(obj: OptionalNullable<ArrayLike<unknown>>): boolean {
  return getLength(obj) === 0;
}

/**
 * Test if the given object is not empty.
 * @param obj Object with a length property.
 * @returns True if the object is not empty, undefined or null otherwise false.
 * @see {@link getLength}
 */
export function isNotEmpty(obj: OptionalNullable<ArrayLike<unknown>>): boolean {
  return getLength(obj) > 0;
}
