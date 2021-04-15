export function fib(n: number): number {
    const vals: { [n: number]: number } = {
        0: 0,
        1: 1
    };
    const helper = (n: number): number => {
        if (vals[n] === undefined) {
            vals[n] = helper(n - 1) + helper(n - 2)
        }

        return vals[n]
    }
    return helper(n);
};