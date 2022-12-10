import { sumPairs } from "./sum-of-pairs";
import { expect, it } from "vitest";

const l1 = [1, 4, 8, 7, 3, 15];
const l2 = [1, -2, 3, 0, -6, 1];
const l3 = [20, -13, 40];
const l4 = [1, 2, 3, 4, 1, 0];
const l5 = [10, 5, 2, 3, 7, 5];
const l6 = [4, -2, 3, 3, 4];
const l7 = [0, 2, 0];
const l8 = [5, 9, 13, -3];

it("Testing For Sum of Pairs", () => {
    expect(sumPairs(l1, 8)).toEqual([1, 7]);
    expect(sumPairs(l2, -6)).toEqual([0, -6]);
    expect(sumPairs(l3, -7)).toBeUndefined();
    expect(sumPairs(l4, 2)).toEqual([1, 1]);
    expect(sumPairs(l5, 10)).toEqual([3, 7]);
    expect(sumPairs(l6, 8)).toEqual([4, 4]);
    expect(sumPairs(l7, 0)).toEqual([0, 0]);
    expect(sumPairs(l8, 10)).toEqual([13, -3]);
});