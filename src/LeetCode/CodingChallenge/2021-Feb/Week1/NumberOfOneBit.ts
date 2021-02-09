export function hammingWeight(n: number): number {
    const data = n.toString(2).split("").filter(val => val === "1");
    return data.length
};