export function positiveSum(arr: number[]): number {
  return arr
    .filter(val => val > 0)
    .reduce((total, val) => total + val, 0);
}

console.log(positiveSum([-1, -2, -3, -4, -5]))