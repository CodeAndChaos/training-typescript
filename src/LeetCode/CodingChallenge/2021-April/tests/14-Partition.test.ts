import { expect, it } from "vitest";
import { arrayToList, listToArray, partition } from "../14-Partition";

it("converts arrays to lists", () => {
  expect(arrayToList([1, 4, 3, 2, 5, 2])).toEqual({
    next: {
      next: {
        next: { next: { next: { next: null, val: 2 }, val: 5 }, val: 2 },
        val: 3,
      },
      val: 4,
    },
    val: 1,
  });
});

it("converts listToArray", () => {
  const list = arrayToList([]);
  expect(listToArray(list)).toEqual([0]);
});

it("converts listToArray", () => {
  const list = arrayToList([1, 4, 3, 2, 5, 2]);
  expect(listToArray(list)).toEqual([1, 4, 3, 2, 5, 2]);
});

it("does standard test 1", () => {
  const input = partition(arrayToList([2, 1]), 2);
  expect(listToArray(input)).toEqual([1, 2]);
});

it("does standard test 1", () => {
  const input = partition(arrayToList([]), 0);
  expect(listToArray(input)).toEqual([0]);
});
