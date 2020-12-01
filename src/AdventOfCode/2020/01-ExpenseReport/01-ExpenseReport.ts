import { readFile } from "fs/promises";
import { resolve } from "path";
import { mainModule } from "process";

export const findSumOfTwoNumbersEquals = (numArr: number[], sum: number) => {
    const firstFactor = numArr.find(val => numArr.includes(sum - val));
    if (firstFactor === undefined) {
        return undefined;
    } else {
        return [firstFactor, sum - firstFactor]
    }
}

export const findExpenseReportError = (inputArr: number[]): number | undefined => {
    const factors = findSumOfTwoNumbersEquals(inputArr, 2020);
    if (factors) {
        return factors[0] * factors[1]
    } else {
        return undefined
    }
}

export const readPuzzleInput = async (): Promise<number[]> => {
    try {
        const file = await readFile(resolve(__dirname, 'puzzleInput.txt'), 'utf-8');
        return file.split('\r\n').map(val => parseInt(val, 10))
    } catch(e){
        console.log(e);
        return [];
    }
}

