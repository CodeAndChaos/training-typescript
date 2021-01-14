import { read } from "fs";
import { resolve } from "path";
import { readDataArrayFromFile } from "../utils/readFiles";
import { processAnswerArray,processAnswerArray2 } from "./06-CustomCustoms";


const readData = async (filename: string) => {
    const inputFilePath = resolve(__dirname, filename)
    let inputArr = await readDataArrayFromFile(inputFilePath)
    return inputArr;
}

it('reads demodata', async () => {
    const inputArr = await readData('demoinput.txt');
    
    expect(processAnswerArray(inputArr)).toBe(11)
})
it('reads data', async () => {
    const inputArr = await readData('puzzleinput.txt');
    expect(processAnswerArray(inputArr)).toBe(6437)
})

it('reads demodata', async () => {
    const inputArr = await readData('demoinput.txt');
    
    expect(processAnswerArray2(inputArr)).toBe(6)
})

it('reads demodata', async () => {
    const inputArr = await readData('puzzleinput.txt');
    
    expect(processAnswerArray2(inputArr)).toBe(0)
})