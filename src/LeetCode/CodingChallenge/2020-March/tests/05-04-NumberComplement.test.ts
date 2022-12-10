import { findComplement } from "../05-04-NumberComplement"
import { expect, it } from "vitest";

it("example 1", () => {
    expect(findComplement(5)).toEqual(2)
})

it("example 2", () => {
    expect(findComplement(1)).toEqual(0)
})