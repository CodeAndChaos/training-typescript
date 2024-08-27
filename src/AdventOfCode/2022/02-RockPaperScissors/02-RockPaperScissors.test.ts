import { expect, it } from "vitest";
import { readDemoData, readPuzzleData } from "../../utils/readFiles";
import { rockPaperPart1 } from "./02-RockPaperScissors";

it("counts the calories of the elves", async () => {
  const input = await readDemoData(__dirname);
  expect(rockPaperPart1(input)).toBe(15);
});

it("counts the calories of the elves", async () => {
  const input = await readPuzzleData(__dirname);
  expect(rockPaperPart1(input)).toBe(14711);
});
