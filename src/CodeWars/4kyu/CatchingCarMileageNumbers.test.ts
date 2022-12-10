import { isAllDigitEqual, isInteresting, isNumberFollowedByZeros,isAwesomeNumber, isPalindrome, isSequentialNumberDecreasing, isSequentialNumberIncreasing } from "./CatchingCarMileageNumbers";
import { expect, it } from "vitest";
it('should work, dangit!', function () {
    expect(isInteresting(3, [1337, 256])).toEqual(0);
    expect(isInteresting(1336, [1337, 256])).toEqual(1);
    expect(isInteresting(1337, [1337, 256])).toEqual(2);

    expect(isInteresting(11208, [1337, 256])).toEqual(0);
    expect(isInteresting(11209, [1337, 256])).toEqual(1);
    expect(isInteresting(11211, [1337, 256])).toEqual(2);
})


it("tests for Numbers Followed by Zeros", () => {
    expect(isNumberFollowedByZeros(1000)).toBe(true)
    expect(isNumberFollowedByZeros(10020)).toBe(false)
    expect(isNumberFollowedByZeros(1336)).toBe(false)
})

it("tests if all digits are equal", () => {
    expect(isAllDigitEqual(1111)).toBe(true)
    expect(isAllDigitEqual(1131)).toBe(false)
})

it("tests if it is a sequential number", () => {
    expect(isSequentialNumberIncreasing(1234)).toBe(true)
    expect(isSequentialNumberIncreasing(2345)).toBe(true)
    expect(isSequentialNumberIncreasing(1224)).toBe(false)
})

it("tests if it is a sequential number dec", () => {
    expect(isSequentialNumberDecreasing(3210)).toBe(true)
    expect(isSequentialNumberDecreasing(4321)).toBe(true)
    expect(isSequentialNumberDecreasing(9872)).toBe(false)
})

it("is a palindrome", () => {
    expect(isPalindrome(121)).toBe(true)
    expect(isPalindrome(1221)).toBe(true)
    expect(isPalindrome(73837)).toBe(true)
    expect(isPalindrome(1336)).toBe(false)
})

it("is a awesome number", () => {
    expect(isAwesomeNumber(12, [12])).toBe(true)
    expect(isAwesomeNumber(123, [12])).toBe(false)
})