/**
 * assert.equal(solution('XXI'), 21);
    assert.equal(solution('I'), 1);
    assert.equal(solution('IV'), 4);
    assert.equal(solution('MMVIII'), 2008);
    assert.equal(solution('MDCLXVI'), 1666);
 */

import { numeralDecoder } from "./romanNumeralsDecoder"
import { expect, it } from "vitest";
it("default tests", () => {
    expect(numeralDecoder('XXI')).toBe(21)
    expect(numeralDecoder('I')).toBe(1)
    expect(numeralDecoder('IV')).toBe(4)
    expect(numeralDecoder('MMVIII')).toBe(2008)
    expect(numeralDecoder('MDCLXVI')).toBe(1666)
})