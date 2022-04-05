/**
 * Utility to filter different types on an union
 *
 * Example:
 *
 * type Test = 1 | boolean | { a: 2 } | 'foo' | 'bar'
 * type Filtered = FilterUnion<Test, string> --> 'foo' | 'bar'
 */

export type FilterUnion<Union extends any, Filter> = Union extends Filter ? Union : never
