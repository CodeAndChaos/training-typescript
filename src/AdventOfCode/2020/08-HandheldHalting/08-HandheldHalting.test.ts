import { readDemoData, readPuzzleData} from "../utils/readFiles";
import { handheldHaltingPart1, handheldHaltingPart2 } from "./08-HandheldHalting";

it("does something", async() => {
    const input = await readDemoData(__dirname);
    expect(handheldHaltingPart1(input)).toEqual(5);

})

it("does something", async() => {
    const input = await readPuzzleData(__dirname);
    expect(handheldHaltingPart1(input)).toEqual(1475);
})

it("does something", async() => {
    const input = await readDemoData(__dirname);
    expect(handheldHaltingPart2(input)).toEqual(8);

})

it("does something", async() => {
    const input = await readPuzzleData(__dirname);
    expect(handheldHaltingPart2(input)).toEqual(1270);
})