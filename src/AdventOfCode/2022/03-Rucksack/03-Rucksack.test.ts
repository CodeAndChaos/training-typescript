import { expect, it } from "vitest";
import { readDemoData, readPuzzleData } from "../../utils/readFiles";
import { rucksack_part1 } from "./03-Rucksack";
it("rucksack", async () => {
  const input = await readDemoData(__dirname);
  expect(rucksack_part1(input)).toBe(157);
});

it("counts the calories of the elves", async () => {
  const input = await readPuzzleData(__dirname);
  expect(rucksack_part1(input)).toBe(8240);
});
