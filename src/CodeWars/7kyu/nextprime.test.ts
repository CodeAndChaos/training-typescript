import { nextPrime } from "./nextprime";
import { expect, it } from "vitest";
it("finds the next Prime", () => {
    expect(nextPrime(2)).toBe(3);
    expect(nextPrime(5)).toBe(7);
    expect(nextPrime(9)).toBe(11);
    expect(nextPrime(49)).toBe(53);
})