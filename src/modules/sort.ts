/**
 * Comparerer function for alphabetical sorting.
 */
export function alphabetize(a: string, b: string): number {
  if (a < b) {
    return -1
  } else if (a > b) {
    return 1
  }
  return 0
}
