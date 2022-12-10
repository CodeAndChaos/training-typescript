import { removeDuplicates } from "../16-RemoveDuplicatesInString";
import { expect, it } from "vitest";
it("test 1", () => {
    const input = "abcd";
    const factor = 2
    const output = "abcd"
    expect(removeDuplicates(input, factor)).toEqual(output)
})

it("test 2", () => {
    const input = "deeedbbcccbdaa";
    const factor = 3
    const output = "aa"
    expect(removeDuplicates(input, factor)).toEqual(output)
})

it("test 3", () => {
    const input = "pbbcggttciiippooaais";
    const factor = 2
    const output = "ps"
    expect(removeDuplicates(input, factor)).toEqual(output)
})
