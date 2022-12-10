import { twoSum } from "../01-twoSum"
import { expect, it } from "vitest";
it("test [2, 7, 11, 15], 9", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
})

it("test [3, 2, 4], 6)", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])

})

it("twoSum([3, 3], 6)", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1])

})

it("twoSum([0,4,3,0], 0)", () => {
    expect(twoSum([0, 4, 3, 0], 0)).toEqual([0, 3])
})
