
export function findSum(...args: number[]): number {
  if (args.find(val => val < 0)) {
    return -1;
  } else {
    return [...arguments].reduce((total, current) => total + current);
  }
}