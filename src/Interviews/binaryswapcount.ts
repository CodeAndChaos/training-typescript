
export const minBinarySwapCount = (arr: number[]): number => {
    let count = 0;
    let countOnes = arr.reduce((acc, curr) => acc+curr, 0);

    arr.forEach((x, i) => {
        if (i < countOnes) {
            if (x === 0) {
                count++;
                count += countOnes - i;
            }
        } else {
            if (x === 1) {
                count++;
                count += i - countOnes;
            }
        }
    });
    if (count > 0) {
        return Math.floor(count/2);
    }
    

    return count;
}