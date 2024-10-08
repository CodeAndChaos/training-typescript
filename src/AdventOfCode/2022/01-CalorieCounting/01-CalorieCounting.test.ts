import { readPuzzleData } from "../../utils/readFiles";
import { calorieCounting, calorieCountingPart2 } from "./01-CalorieCounting";
import { expect, it } from "vitest";
it("counts the calories of the elves", async () => {
  const input = await readPuzzleData(__dirname);
  expect( calorieCounting(input)).toBe(11681662)
});
