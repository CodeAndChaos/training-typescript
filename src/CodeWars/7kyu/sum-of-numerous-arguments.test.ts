import { findSum } from "./sum-of-numerous-arguments"
import { expect, it } from "vitest";
it('finds stuff', () => {
    expect(findSum(1, 3, -2)).toEqual(-1)
})