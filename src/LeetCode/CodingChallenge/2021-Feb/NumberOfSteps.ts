// Given a non-negative integer num, 
// return the number of steps to reduce it to zero. 
// If the current number is even, you have to divide it by 2, 
// otherwise, you have to subtract 1 from it.

function step(num:number, count:number=0): number {
    if (num === 0){
        return count;
    }
    if (num % 2 === 0){
        return step(num/2, count + 1)
    } else {
        return step(num - 1, count + 1)
    }
}


export function numberOfSteps (num: number): number {
    return step(num);
};