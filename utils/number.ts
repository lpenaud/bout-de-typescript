/**
 * Option to {@link rangeNumber}
 */
interface RangeNumberOptions {
  /**
   * The first number of the range.
   */
  start: number;

  /**
   * The last number of the range (not included)
   */
  end: number;

  /**
   * The increment to add after each iteration.
   */
  step: number;
}

/**
 * Default range options.
 */
const DEFAULT_RANGE_OPTIONS: RangeNumberOptions = {
  start: 0,
  end: Number.MAX_SAFE_INTEGER,
  step: 1,
};

/**
 * Create a number generator between two values.
 * @example
 * Array.from(rangeNumber({ end: 4 }))
 * // returns: [0, 1, 2, 3]
 * Array.from(rangeNumber({ start: 1, end: 4 }))
 * // returns: [1, 2, 3]
 * Array.from(rangeNumber({ step: 2, end: 4 }))
 * // returns: [0, 2]
 * Array.from(rangeNumber({ start: 1, step: 2, end: 4 }))
 * // returns: [1, 3]
 * @param options Range definitions.
 * @returns Number generator between two values.
 * @see {@link range}
 */
export function rangeNumber(
  options?: Partial<RangeNumberOptions>,
): Generator<number> {
  return range({ ...DEFAULT_RANGE_OPTIONS, ...options });
}

/**
 * Create a range between two number.
 * @param options Range definitions.
 */
function* range({ start, end, step }: RangeNumberOptions): Generator<number> {
  while (start < end) {
    yield start;
    start += step;
  }
}
