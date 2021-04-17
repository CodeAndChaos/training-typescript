import { hammingWeight } from "../NumberOfOneBit"

it('test1', (() => {
    const input = parseInt("00000000000000000000000000001011", 2)
    expect(hammingWeight(input)).toBe(3)
}))

it('test2', (() => {
    const input = parseInt("00000000000000000000000010000000", 2)
    expect(hammingWeight(input)).toBe(1)
}))

it('test3', (() => {
    const input = parseInt("11111111111111111111111111111101", 2)
    expect(hammingWeight(input)).toBe(31)
}))