import { readData, readDemoData, readPuzzleData } from "../../utils/readFiles"
import { chainOfAllAdapters, possibleCombinations } from "./10-AdapterArray"
import { expect, it } from "vitest";
it("finds all differences", async () => {
    const input = await readDemoData(__dirname)
    const data = input.map(val => parseInt(val, 10))
    const jolts = chainOfAllAdapters(data)
    expect(jolts).toEqual({ "countSingleJolt": 7, "countTripleJolt": 5 })
    expect(jolts.countSingleJolt * jolts.countTripleJolt).toEqual(35)
})

it("finds all differences", async () => {
    const input = await readData(__dirname, "demoinput2.txt")
    const data = input.map(val => parseInt(val, 10))
    const jolts = chainOfAllAdapters(data)
    expect(jolts).toEqual({ "countSingleJolt": 22, "countTripleJolt": 10 })
    expect(jolts.countSingleJolt * jolts.countTripleJolt).toEqual(220)
})

it("finds all differences", async () => {
    const input = await readPuzzleData(__dirname)
    const data = input.map(val => parseInt(val, 10))
    const jolts = chainOfAllAdapters(data)
    expect(jolts).toEqual({ "countSingleJolt": 68, "countTripleJolt": 27 })
    expect(jolts.countSingleJolt * jolts.countTripleJolt).toEqual(1836)
})

it("finds all differences", async () => {
    const input = await readDemoData(__dirname)
    const data = input.map(val => parseInt(val, 10))
    expect(possibleCombinations(data)).toEqual(8)
})


it("finds all differences", async () => {
    const input = await readData(__dirname, "demoinput2.txt")
    const data = input.map(val => parseInt(val, 10))
    expect(possibleCombinations(data)).toEqual(23328)
})