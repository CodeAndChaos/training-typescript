export const chainOfAllAdapters = (input: number[]) => {
    input.sort((a, b) => a - b)
    const jolts = input.reduce<{ countSingleJolt: number, countTripleJolt: number }>((acc, val, index) => {
        const diff = input[index + 1] - val;
        if (diff === 1) {
            acc.countSingleJolt++
        }
        if (diff === 3) {
            acc.countTripleJolt++
        }
        return acc
    }, { countSingleJolt: 0, countTripleJolt: 0 })

    // Adding connecting to socket
    if (input[0] === 1) {
        jolts.countSingleJolt++
    }
    if (input[0] === 3) {
        jolts.countTripleJolt++
    }

    //Adding the final Device
    jolts.countTripleJolt++;
    return jolts
}

export const possibleCombinations = (input: number[]) => {
    input.sort((a, b) => a - b);
    const data = input.map((val, i) => {
        if (input[i + 1]) {
            return input[i + 1] - val
        } else {
            return 3
        }
    })
    return data.join('').split('3').filter(val => val.length > 1).reduce<number>((acc, current) => {
        if (current === "11") {
            return acc * 2
        }
        if (current === "111") {
            return acc * 2 * 2
        }
        if (current === "1111") {
            return acc * 9
        }
        console.log(current)
        return acc
    }, 1);

}