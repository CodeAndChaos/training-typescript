import { resolve } from "path";
import { readDataArrayFromFile } from "../utils/readFiles";
import { findBagSolution, findBagSolution2, readMapOfRules, readRule } from "./07-HandyHaversacks";

const readData = async (filename: string) => {
    const inputFilePath = resolve(__dirname, filename)
    let inputArr = await readDataArrayFromFile(inputFilePath)
    return inputArr;
}

it("can read a bagRule", () => {
    const bag = readRule("light red bags contain 1 bright white bag, 2 muted yellow bags.")
    expect(bag.color).toEqual("light red")
    expect(bag.content).toEqual([{ "color": "bright white", "count": 1 }, { "color": "muted yellow", "count": 2 }])
})

it("can read a empty bagRule", () => {
    const bag = readRule("dotted black bags contain no other bags.")
    expect(bag.color).toEqual("dotted black")
    expect(bag.content).toEqual([])
})


it('reads a list', async () => {
    const data = await readData('demoinput.txt')
    expect(findBagSolution("shiny gold", data)).toEqual(4)
})

it('reads a list', async () => {
    const data = await readData('puzzleinput.txt')
    expect(findBagSolution("shiny gold", data)).toEqual(326)
})

it('reads a list', async () => {
    const data = await readData('demoinput.txt')
    expect(findBagSolution2("shiny gold", data)).toEqual(32)
})

it('reads a list', async () => {
    const data = await readData('puzzleinput.txt')
    expect(findBagSolution2("shiny gold", data)).toEqual(5635)
})
