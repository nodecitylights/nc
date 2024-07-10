import { expect, test } from 'vitest'
import { yieldSplit } from '../src'

test('yieldSplit()', () => {
	let s = yieldSplit('hello,world,banana,apple', ',')
	expect(s.next().value).toBe('hello')
	expect(s.next().value).toBe('world')
	expect(s.next().value).toBe('banana')
	expect(s.next().value).toBe('apple')
	expect(s.next().value).toBeUndefined()
})
