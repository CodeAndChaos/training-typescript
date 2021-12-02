export const multiplyNumbers = (...arg: number[]) => {
    return arg.reduce((acc, val) => val * acc)
}

export const stringArrayToNumberArray = (input: string[]) => {
    return input.map(val => parseInt(val, 10))
}