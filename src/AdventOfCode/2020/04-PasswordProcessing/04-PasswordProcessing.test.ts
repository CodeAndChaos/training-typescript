import { read } from "fs";
import { resolve } from "path";
import { readDataArrayFromFile } from "../utils/readFiles";
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
    expect(inputArr.length).toBe(4)
    expect(processBatchPasswordData(inputArr)).toBe(2)
})

it('solves part 1', async () => {
    const inputArr = await readData('puzzleinput.txt');
    expect(processBatchPasswordData(inputArr)).toBe(204)
})


it('demo data', async () => {
    const validPass = await readData('validPass.txt');
    expect(processBatchPasswordData2(validPass)).toBe(4);
})

it('demo data invalid', async () => {
    const invalidPass = await readData('invalidPass.txt');
    expect(processBatchPasswordData2(invalidPass)).toBe(0);
})

it('solves part 2', async () => {
    const inputArr = await readData('puzzleinput.txt');
    expect(processBatchPasswordData2(inputArr)).toBe(179)
})
