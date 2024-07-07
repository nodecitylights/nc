import { describe, expect, test } from 'vitest';
import { indexOfBy, lastIndexOfBy } from '../src';

const isDigit = (s: string) => /^[0-9]$/.test(s) as boolean

describe('indexOfBy()', () => {
	test.each([
		['abc1foo2', 3],
		['', -1],
	])('find first ASCII digit: %s, %i', (str, idx) => {
		expect(indexOfBy(str, isDigit)).toBe(idx)
	})
})

describe('lastIndexOfBy()', () => {
	test.each([
		['abc1foo2', 7],
		['', -1],
	])('find last ASCII digit: %s, %i', (str, idx) => {
		expect(lastIndexOfBy(str, isDigit)).toBe(idx)
	})
})
