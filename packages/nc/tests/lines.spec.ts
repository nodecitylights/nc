import { expect, test } from 'vitest'
import { lines } from '../src'

test('Hello\\nWorld', () => {
  let s = lines('Hello\nWorld')
	expect(s.next().value).toBe('Hello')
  expect(s.next().value).toBe('World')
  expect(s.next().value).toBeUndefined()
})
