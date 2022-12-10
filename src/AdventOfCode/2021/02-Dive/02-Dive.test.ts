import {
  readDemoData,
  readDemoData2,
  readPuzzleData,
  readPuzzleData2,
} from "../../utils/readFiles";
import { executePilotOrders, executePilotOrdersWithAim } from "./02-Dive";
import {it, expect} from 'vitest';
it("processes an entry", async () => {
  const data = await readDemoData(__dirname);
  expect(executePilotOrders(data)).toEqual(150);
});

it("finds the solution", async () => {
  const data = await readPuzzleData(__dirname);
  expect(executePilotOrders(data)).toEqual(1893605);
});

it("processes an entry", async () => {
  const data = await readDemoData(__dirname);
  expect(executePilotOrdersWithAim(data)).toEqual(900);
});

it("finds the solution", async () => {
  const data = await readPuzzleData(__dirname);
  expect(executePilotOrdersWithAim(data)).toEqual(2120734350);
});
