import { expect, test } from 'vitest'
import { yieldSplitBy } from '../src'

const isNumber = (c: string): boolean => '123456789'.includes(c)

test('yieldSplitBy()', () => {
  let s = yieldSplitBy('hello1world2banana3apple', isNumber)
	expect(s.next().value).toBe('hello')
  expect(s.next().value).toBe('world')
  expect(s.next().value).toBe('banana')
  expect(s.next().value).toBe('apple')
  expect(s.next().value).toBeUndefined()
})
