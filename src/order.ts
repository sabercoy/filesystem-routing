/**
 * The one string ordering used for routes: by UTF-16 code unit, the same as
 * `Array.prototype.sort()` without a comparator. Unlike `localeCompare` it
 * gives the same answer in every locale, so generated output is identical
 * across machines.
 *
 * Dependency-free so the tree module can share it.
 */
export function compareStrings(a: string, b: string): number {
  return a < b ? -1 : a > b ? 1 : 0;
}

/**
 * Insert `item` into `sorted` (ascending by `key`) after any equal keys, so
 * the array stays sorted however it is built up.
 */
export function insertSorted<T>(sorted: T[], item: T, key: (item: T) => string) {
  const k = key(item);
  const at = sorted.findIndex(other => compareStrings(key(other), k) > 0);
  sorted.splice(at >= 0 ? at : sorted.length, 0, item);
}
