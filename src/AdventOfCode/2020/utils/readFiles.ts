import { readFile } from "fs/promises";

export const readNumberArrayFromFile = async (path: string): Promise<number[]> => {
    const dataArray = await readDataArrayFromFile(path)
    return dataArray.map(val => parseInt(val, 10))
}

export const readDataArrayFromFile = async (path: string): Promise<string[]> => {
    try {
        const file = await readFile(path, 'utf-8');
        return file.split('\r\n')
    } catch (e) {
        console.log(e);
        return [];
    }
}