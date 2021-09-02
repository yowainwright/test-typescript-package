/**
 * Curry
 * @param fn
 * @returns unkown
 */

export const curry =
	(fn: (x: unknown, y: unknown) => unknown): unknown =>
	(x: unknown): unknown =>
	(y: unknown): unknown =>
		fn(x, y)
