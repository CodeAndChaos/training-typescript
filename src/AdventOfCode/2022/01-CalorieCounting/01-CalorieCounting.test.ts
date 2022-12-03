import { readPuzzleData } from "../../utils/readFiles";
import { calorieCounting, calorieCountingPart2 } from "./01-CalorieCounting";

it("counts the calories of the elves", async () => {
  const input = await readPuzzleData(__dirname);
  expect( calorieCounting(input)).toBe(68802)
});

it("counts the calories of the elves", async () => {
  const input = await readPuzzleData(__dirname);
  expect( calorieCountingPart2(input)).toBe(205370)
});
