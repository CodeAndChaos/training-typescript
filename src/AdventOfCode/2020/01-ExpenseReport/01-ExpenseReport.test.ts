import { resolve } from "path";
import { expect, it } from "vitest";
import { readNumberArrayFromFile } from "../../utils/readFiles";
import {
  findExpenseReportError,
  findExpenseReportError2,
  findSumOfThreeNumbersEquals,
  findSumOfTwoNumbersEquals,
} from "./01-ExpenseReport";
const testNumbers = [1721, 979, 366, 299, 675, 1456];

it("works for test input", () => {
  expect(findSumOfTwoNumbersEquals(testNumbers, 2020)).toEqual([1721, 299]);
  expect(findExpenseReportError(testNumbers)).toEqual(514579);
});

it("finds the solution", async () => {
  const inputFilePath = resolve(__dirname, "puzzleInput.txt");
  const inputArr = await readNumberArrayFromFile(inputFilePath);
  expect(findExpenseReportError(inputArr)).toEqual(840324);
});

it("works for 3 inputs", () => {
  expect(findSumOfThreeNumbersEquals(testNumbers, 2020)).toEqual([
    366, 675, 979,
  ]);
  expect(findExpenseReportError2(testNumbers)).toEqual(241861950);
});

it("finds the solution part 2", async () => {
  const inputFilePath = resolve(__dirname, "puzzleInput.txt");
  const inputArr = await readNumberArrayFromFile(inputFilePath);
  expect(findExpenseReportError2(inputArr)).toEqual(170098110);
});
