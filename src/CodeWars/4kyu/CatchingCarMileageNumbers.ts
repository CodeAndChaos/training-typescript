export const isNumberFollowedByZeros = (n: number) => {
    const match = `${n}`.match(/^\d0*$/)
    return match !== null;
}

export const isAllDigitEqual = (n: number) => {
    return `${n}`.replace(new RegExp(`${n}`[0], 'g'), "").length === 0
}

export const isSequentialNumberIncreasing = (n: number) => {
    return `01234567890`.includes(`${n}`)
}

export const isSequentialNumberDecreasing = (n: number) => {
    return `9876543210`.includes(`${n}`)
}

export const isPalindrome = (n: number) => {
    return `${n}` === `${n}`.split("").reverse().join("")
}

export const isAwesomeNumber = (n: number, awesome: number[]) => {
    return awesome.includes(n)
}

const checkNumber = (n: number, awesome: number[]) => {
    return `${n}`.length > 2 && (
        isNumberFollowedByZeros(n)
        || isAllDigitEqual(n)
        || isSequentialNumberIncreasing(n)
        || isSequentialNumberDecreasing(n)
        || isPalindrome(n)
        || isAwesomeNumber(n, awesome)
    )

}

//https://www.codewars.com/kata/52c4dd683bfd3b434c000292/train/typescript
export const isInteresting = (n: number, awesome: number[]) => {

    if (checkNumber(n, awesome)) {
        return 2
    }
    if (checkNumber(n + 1, awesome) || checkNumber(n + 2, awesome)) {
        return 1
    }

    return 0
}