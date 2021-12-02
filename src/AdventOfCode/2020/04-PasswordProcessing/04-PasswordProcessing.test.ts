import { read } from "fs";
import { resolve } from "path";
import { readDataArrayFromFile } from "../../utils/readFiles";
import { processBatchPasswordData, processBatchPasswordData2 } from "./04-PasswordProcessing";

const readData = async (filename: string) => {
    const inputFilePath = resolve(__dirname, filename)
    let inputArr = await readDataArrayFromFile(inputFilePath)
    const BREAK_CHAR = `%DATA_END%`
    inputArr = inputArr.map(val => val === "" ? BREAK_CHAR: val).join(' ').split(BREAK_CHAR)
    return inputArr;
}

it('reads data', async () => {
    const inputArr = await readData('demoData.txt');
    expect(inputArr.length).toBe(1)
    expect(processBatchPasswordData(inputArr)).toBe(1)
})

it('solves part 1', async () => {
    const inputArr = await readData('puzzleinput.txt');
    expect(processBatchPasswordData(inputArr)).toBe(1)
})


