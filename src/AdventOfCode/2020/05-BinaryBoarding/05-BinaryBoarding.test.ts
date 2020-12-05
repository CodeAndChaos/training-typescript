import { resolve } from "path"
import { readDataArrayFromFile } from "../utils/readFiles"
import { processBinarySymbol, processBoardingString, processColumn, processRow } from "./05-BinaryBoarding"

it ("works for F", () => {
    expect(processBinarySymbol(0, 127, "0")).toEqual({min: 0, max: 63 })
})

it( "works for B", () => {
    expect(processBinarySymbol(0, 63, "1")).toEqual({min: 32, max: 63 })
})

it("works for processing a string", () => {
    expect(processRow("FBFBBFF")).toEqual(44)
})

it("works for processing a column", () => {
    expect(processColumn("RLR")).toEqual(5)
})

it("processes example strings", () => {
    expect(processBoardingString("BFFFBBFRRR")).toEqual({row: 70, column: 7, id: 567})
    expect(processBoardingString("FFFBBBFRRR")).toEqual({row: 14, column: 7, id: 119})
    expect(processBoardingString("BBFFBBFRLL")).toEqual({row: 102, column: 4, id: 820})
})

it("finds an answer", async () => {
    const inputFilePath = resolve(__dirname, "puzzleinput.txt")
    let inputArr = await readDataArrayFromFile(inputFilePath)
    let solution = inputArr.map(processBoardingString).map(val => val.id)
    expect(Math.max(...solution)).toBe(930)
})

it("finds an answer for part 2", async () => {
    const inputFilePath = resolve(__dirname, "puzzleinput.txt")
    let inputArr = await readDataArrayFromFile(inputFilePath)
    let solution = inputArr.map(processBoardingString).map(val => val.id).sort((a, b) => {return a-b})
    let seat = 0;
    for (let i = 0; i<solution.length-1; i++){
        if (solution[i] +1 !== solution[i+1]){
            seat = solution[i] +1
            break;
        }
    }
    expect(seat).toEqual(515)
})