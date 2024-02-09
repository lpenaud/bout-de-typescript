/**
 * Throw an error if the value is not a number (NaN).
 * @param value Expect to be a valid number.
 * @param msg Error message to throw.
 * @returns The given value if it's a valid number.
 * @throws If the given value is not a number (NaN).
 */
export function assertIsNan(value: number, msg?: string): number {
  if (Number.isNaN(value)) {
    throw new Error(msg ?? `${value} is not a number`);
  }
  return value;
}
