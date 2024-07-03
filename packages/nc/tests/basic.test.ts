import { expect, test } from 'vitest';

function greet(s: string): string {
	return `Hello, ${s}!`
}

test('greet runs correctly', () => {
	expect(greet('John')).toBe('Hello, John!');
});
