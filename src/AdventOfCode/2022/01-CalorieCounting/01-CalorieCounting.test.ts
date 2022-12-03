import { readPuzzleData } from "../../utils/readFiles";
import { calorieCounting } from "./01-CalorieCounting";

it("counts the calories of the elves", async () => {
  const input = await readPuzzleData(__dirname);
  expect( calorieCounting(input)).toBe(68802)
});
