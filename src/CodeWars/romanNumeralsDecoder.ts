// https://www.codewars.com/kata/51b6249c4612257ac0000005/train/typescript

export const numeralDecoder = (romanNumber: string): number => {
    const romanValueMap: { [x: string]: number } = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    const values = romanNumber.split("").map((val) => romanValueMap[val]);

    let count = 0;
    for (let i = 0; i < values.length; i++) {
        const currentValue = values[i];
        const nextValue = values[i + 1];
        if (currentValue < nextValue) {
            count += nextValue - currentValue;
            i++;
        } else {
            count += currentValue;
        }
    }

    return count;
}