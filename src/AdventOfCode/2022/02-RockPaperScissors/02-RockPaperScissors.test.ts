import { expect, it } from "vitest";
import { readDemoData, readPuzzleData } from "../../utils/readFiles";
import { rockpaperPart1, rockpaperPart2 } from "./02-RockPaperScissors";
it("counts the calories of the elves", async () => {
  const input = await readDemoData(__dirname);
  expect(rockpaperPart1(input)).toBe(15);
});

it("counts the calories of the elves", async () => {
  const input = await readPuzzleData(__dirname);
  expect(rockpaperPart1(input)).toBe(14711);
});
