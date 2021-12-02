import { readFile } from "fs/promises";
import { resolve } from "path";

export const readNumberArrayFromFile = async (path: string): Promise<number[]> => {
    const dataArray = await readDataArrayFromFile(path)
    return dataArray.map(val => parseInt(val, 10))
}

export const readDataArrayFromFile = async (path: string): Promise<string[]> => {
    try {
        const file = await readFile(path, 'utf-8');
        return file.replace('\r\n', '\n').split('\n')
    } catch (e) {
        console.log(e);
        return [];
    }
}

export const readData = async (dir: string, filename: string) => {
    const inputFilePath = resolve(dir, filename)
    let inputArr = await readDataArrayFromFile(inputFilePath)
    return inputArr;
}

export const readDemoData = async (dir:string) => {
    return await readData(dir, 'demoinput.txt')
}

export const readDemoData2 = async (dir:string) => {
    return await readData(dir, 'demoinput2.txt')
}


export const readPuzzleData = async (dir:string) => {
    return await readData(dir, 'puzzleinput.txt')
}

export const readPuzzleData2 = async (dir:string) => {
    return await readData(dir, 'puzzleinput2.txt')
}