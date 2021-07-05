import { findPairs, findPairs2 } from "./addArray"

it('finds positive pairs', () => {
    const input = [1,3,2,5,6,7,8,9];
    const value = 3;
    const output = [[1,2]]
    expect(findPairs(value, input)).toEqual(output);
})

it('finds no pairs', () => {
    const input = [1,2,3];
    const value = 80;
    const output:number[][] = []
    expect(findPairs(value, input)).toEqual(output);
})

it('finds positive pairs 2', () => {
    const input = [-1,1,2,3,4,5,6,7,8,9];
    const value = 3;
    const output = [[-1,4],[1,2]]
    expect(findPairs2(value, input)).toEqual(output);
})

