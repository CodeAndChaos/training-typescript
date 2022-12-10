import { numberOfSteps } from "../NumberOfSteps"
import { expect, it } from "vitest";
it("number of steps test 1", () => {
    expect(numberOfSteps(14)).toBe(6)
})

it("number of steps test 1", () => {
    expect(numberOfSteps(8)).toBe(4)
})

it("number of steps test 1", () => {
    expect(numberOfSteps(123)).toBe(12)
})