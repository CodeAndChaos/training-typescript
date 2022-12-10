import { expect, it } from "vitest";
import {
  readDemoData,
  readDemoData2,
  readPuzzleData,
  readPuzzleData2,
} from "../../utils/readFiles";
import {
  howManyIncreasedValues,
  threeSlidingWindowMeasurements,
} from "./01-SonarSweep";
it("processes an entry", async () => {
  const data = await readDemoData(__dirname);
  expect(howManyIncreasedValues(data)).toEqual(7);
});

it("finds the solution", async () => {
  const data = await readPuzzleData(__dirname);
  expect(howManyIncreasedValues(data)).toEqual(1754);
});

it("processes an entry", async () => {
  const data = await readDemoData2(__dirname);
  expect(threeSlidingWindowMeasurements(data)).toEqual(5);
});

it("finds the solution", async () => {
  const data = await readPuzzleData2(__dirname);
  expect(threeSlidingWindowMeasurements(data)).toEqual(1789);
});
