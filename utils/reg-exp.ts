/**
 * Perform search againt the given string.
 * Yield for every result array.
 * @example
 * // Capture 'a' and the next char.
 * const re = /a(.)?/g
 * const content = "abac";
 * Array.from(multiMatchs(re, content));
 * // returns [["ab", "b"], ["ac", "c"]]
 * Array.from(multiMatchs(re, content), ([,ch]) => ch)
 * // returns ["b", "c"]
 * @param re Regular expression expected with the global flag.
 * @param content Content to perform the search
 */
export function* multiMatchs(re: RegExp, content: string): Generator<RegExpMatchArray> {
  if (!re.global) {
    throw new Error("RegExp haven't global flag");
  }
  let match: RegExpMatchArray | null;
  while ((match = re.exec(content)) !== null) {
    yield match;
  }
}
