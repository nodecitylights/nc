type PredicateFn<T> = (val: T) => boolean

export function indexOfBy(
	s: string,
	predicate: PredicateFn<string>,
	startIdx = 0,
): number {
	for (let i = startIdx; i < s.length; i++) {
		if (predicate(s[i])) {
			return i
		}
	}

	return -1
}

export function lastIndexOfBy(
	s: string,
	predicate: PredicateFn<string>,
	endIdx = 0,
): number {
	for (let i = s.length; i > endIdx; i--) {
		if (predicate(s[i])) {
			return i
		}
	}

	return -1
}

export function *lines(s: string): Generator<string> {
	yield * yieldSplitBy(s, c => c === '\n')
}

export function *yieldSplit(s: string, delim: string): Generator<string> {
	let startIdx = 0
	let delimIdx = 0

	while ((delimIdx = s.indexOf(delim, startIdx)) !== -1) {
		yield s.substring(startIdx, delimIdx)
		startIdx = delimIdx + delim.length
	}

	yield s.substring(startIdx)
}

export function *yieldSplitBy(
	s: string,
	predicate: PredicateFn<string>,
): Generator<string> {
	let startIdx = 0
	let matchIdx = 0

	while ((matchIdx = indexOfBy(s, predicate, startIdx)) !== -1) {
		yield s.substring(startIdx, matchIdx)
		startIdx = matchIdx + 1
	}

	yield s.substring(startIdx)
}
