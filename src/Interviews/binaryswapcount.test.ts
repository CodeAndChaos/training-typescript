import { minBinarySwapCount } from "./binaryswapcount";
import { expect, it } from "vitest";
it('returns 0', () => {
    let arr = [1,1,1,1,0,0,0,0,0]
    let result = minBinarySwapCount(arr);
    expect(result).toBe(0);
});

it('returns 1', () => {
    let arr = [1,1,1,0,1,0,0,0]
    let result = minBinarySwapCount(arr);
    expect(result).toBe(1);
});

it('swaps', () => {
    let arr = [0,0,1]
    let result = minBinarySwapCount(arr);
    expect(result).toBe(2);
})
it('swaps', () => {
    let arr = [0,1,1,0]
    let result = minBinarySwapCount(arr);
    expect(result).toBe(2);
})
it('swaps', () => {
    let arr = [1,0,0,1]
    let result = minBinarySwapCount(arr);
    expect(result).toBe(2);
})