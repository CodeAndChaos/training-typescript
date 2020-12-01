import { readFile } from "fs/promises";

export const readNumberArrayFromFile = async (path: string): Promise<number[]> => {
    try {
        const file = await readFile(path, 'utf-8');
        return file.split('\r\n').map(val => parseInt(val, 10))
    } catch (e) {
        console.log(e);
        return [];
    }
}