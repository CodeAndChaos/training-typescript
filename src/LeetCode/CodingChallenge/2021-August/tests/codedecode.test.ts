import { expect, it } from "vitest";
import { numDecodings, numDecodings2, possiblePairs } from "../codedecode";

it("finds all combinations", () => {
    const result = possiblePairs("abcd", 2);
    expect(result).toEqual([
        "a b c d",
        "a b cd ",
        "a bc d",
        "ab c d",
        "ab cd ",
    ]);
});

it("testcase 1", () => {
    const input = "12"
    const output = 0
    expect(numDecodings(input)).toEqual(output);
});

it("testcase 3", () => {
    const input = "0"
    const output = 0
    expect(numDecodings(input)).toEqual(output);
});

it("testcase 4", () => {
    const input = "06"
    const output = 0
    expect(numDecodings(input)).toEqual(output);
});

it("testcase 5", () => {
    const input = "111111111111111111111111111111111111111111111"
    const output = 0
    expect(numDecodings(input)).toEqual(output);
});