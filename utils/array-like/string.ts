import { assertIsNan } from "../error.ts";

/**
 * Generate a list of char between the start to end char code included.
 * @example
 * Array.from(rangeChar(48, 57))
 * // returns: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
 * @param start Char code to start with.
 * @param end Char code to end with.
 * @throws If start or end aren't a number.
 */
export function* rangeChar(start: number, end: number): Generator<string> {
  assertIsNan(start, "Start char is not a number");
  assertIsNan(end, "Start char is not a number");
  for (; start <= end; start++) {
    yield String.fromCharCode(start);
  }
}

/**
 * Generate a list of char between the start to end char code included.
 * @example
 * Array.from(range("ac"))
 * // returns: ["a", "b", "c"]
 * Array.from(range("a", "d"))
 * // returns: ["a", "b", "c", "d"]
 * @param start Start char and second if the end is not given.
 * @param end End char
 * @returns Genarator between start char to the end.
 */
export function rangeString(start: string, end?: string): Generator<string> {
  return rangeChar(
    start.charCodeAt(0),
    end === undefined ? start.charCodeAt(1) : end.charCodeAt(0),
  );
}
