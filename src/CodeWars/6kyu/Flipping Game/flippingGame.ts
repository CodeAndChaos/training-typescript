/**
 * Flipping Game
 * 
 * https://www.codewars.com/kata/flipping-game
 * 
 * @param {number[]} arr 
 */

function helperSum(accumulator: number, currentValue: number) {
    return accumulator + currentValue;
}

export function flippingGame(arr: number[]) {
    let result = []
    for (let i = 1; i <= (arr.length); i++) {
        for (let j = 0; j <= (arr.length - i); j++) {
            let startSegment = arr.slice(0, j).reduce(helperSum, 0);
            let flipSegment = i - arr.slice(j, j + i).reduce(helperSum, 0);
            let endSegment = arr.slice(j + i).reduce(helperSum, 0);
            let total = startSegment + flipSegment + endSegment;
            result.push(total)
        }

    }
    return Math.max(...result);
}
