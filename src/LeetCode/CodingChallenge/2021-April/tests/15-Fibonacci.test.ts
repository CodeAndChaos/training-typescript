import { fib } from "../15-Fibonacci";
import { expect, it } from "vitest";
it('test1', () => {
    expect(fib(2)).toBe(1);
})

it('test2', () => {
    expect(fib(3)).toBe(2);
})

it('test3', () => {
    expect(fib(4)).toBe(3);
})
