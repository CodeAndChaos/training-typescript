import { readDemoData, readPuzzleData } from "../../utils/readFiles";
import { findContiguousSum, findEncodingError } from "./09-EncodingError";

it("tests the demo data part 1", async () => {
    const demoData = await readDemoData(__dirname);
    expect(findEncodingError(demoData)).toEqual(127)
})

it("tests the demo data part 1", async () => {
    const demoData = await readPuzzleData(__dirname);
    expect(findEncodingError(demoData, 25)).toEqual(14144619)
})

const getSolutionPart2 = (nums: number[]): number => {
    return Math.min(...nums) + Math.max(...nums)
}

it("tests the demo data part 2", async () => {
    const demoData = await readDemoData(__dirname);
    const data = demoData.map(val => parseInt(val, 10))
    const sumArray = findContiguousSum(127, data)
    expect(sumArray).toEqual([15, 25, 47, 40,])
    expect(getSolutionPart2(sumArray)).toEqual(62)
})


it("tests the demo data part 1", async () => {
    const demoData = await readPuzzleData(__dirname);
    const data = demoData.map(val => parseInt(val, 10))
    const encodingError = findEncodingError(demoData, 25) || 0
    const sumArray = findContiguousSum(encodingError, data)
    expect(getSolutionPart2(sumArray)).toEqual(1766397)
})