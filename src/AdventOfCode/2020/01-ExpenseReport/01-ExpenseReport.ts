import { multiplyNumbers } from "../../utils/arrayUtils";

export const findSumOfTwoNumbersEquals = (numArr: number[], sum: number) => {
    const firstFactor = numArr.find(val => numArr.includes(sum - val));
    if (firstFactor === undefined) {
        return undefined;
    } else {
        return [firstFactor, sum - firstFactor]
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






const reportRepair = (fun: (arr: number[], sum: number) => number[] | undefined, inputArr: number[]): number => {
    const TARGET_SUM = 2020;
    const factors = fun(inputArr, TARGET_SUM) ?? []
    return multiplyNumbers(...factors)
}


export const findExpenseReportError = (inputArr: number[]): number => {
    return reportRepair(findSumOfTwoNumbersEquals, inputArr)
}

export const findExpenseReportError2 = (inputArr: number[]): number => {
    return reportRepair(findSumOfThreeNumbersEquals, inputArr)
}