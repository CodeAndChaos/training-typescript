import { readFile } from "fs/promises";
import { resolve } from "path";

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
        return multiplyNumbers(...factors)
    } else {
        return undefined
    }
}

export const readPuzzleInput = async (): Promise<number[]> => {
    try {
        const file = await readFile(resolve(__dirname, 'puzzleInput.txt'), 'utf-8');
        return file.split('\r\n').map(val => parseInt(val, 10))
    } catch (e) {
        console.log(e);
        return [];
    }
}

export const findSumOfThreeNumbersEquals = (numArr: number[], sum: number) => {
    for (let num of numArr) {
        let subSum = sum - num;
        let factors = findSumOfTwoNumbersEquals(numArr, subSum);
        if (factors) {
            return [...factors, num]
        }
    }
}

export const findExpenseReportError2 = (inputArr: number[]): number | undefined => {
    const factors = findSumOfThreeNumbersEquals(inputArr, 2020);
    if (factors) {
        return multiplyNumbers(...factors)
    } else {
        return undefined
    }
}

export const multiplyNumbers = (...arg: number[]) => {
    return arg.reduce((acc, val) => val * acc)
}