export function positiveSum(arr: number[]): number {
  return arr
    .filter(val => val > 0)
    .reduce((total, val) => total + val, 0);
}