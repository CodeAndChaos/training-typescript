
import { areTheyTheSame } from './are-they-the-same';
import { expect, it } from "vitest";

it("is equal, test 1", () => {
    const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    const a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
    expect(areTheyTheSame(a1, a2)).toBeTruthy();
})
it("is equal, test 2", () => {
    const b1 = [2, 2, 3];
    const b2 = [4, 9, 9];
    expect(areTheyTheSame(b1, b2)).toBeFalsy()
})