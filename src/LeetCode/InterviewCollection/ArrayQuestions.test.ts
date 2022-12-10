import { intersect, removeDuplicates, singleNumber } from "./ArrayQuestions";
import { expect, it } from "vitest";
it('Task 1 - Removes Duplicates', () => {
    expect(removeDuplicates([1, 1, 2])).toEqual(2);
});

it('Task 5 - test1', () => {
    expect(singleNumber([2, 2, 1])).toEqual(1);
});

it('Task 5 - test2', () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toEqual(4);
});

it("Task 6 - test 1 ", () => {
    expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2]);
});
it("Task 6 - test 2", () => {
    expect(intersect([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([ 9, 4]);
});