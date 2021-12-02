export const multiplyNumbers = (...arg: number[]) => {
    return arg.reduce((acc, val) => val * acc)
}