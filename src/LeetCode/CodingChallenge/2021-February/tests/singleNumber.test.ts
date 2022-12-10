import { singleNumber } from "../singleNumber"
import { expect, it } from "vitest";
it("single Number test 1", ()=> {
    const nums = [2,2,1]
    expect(singleNumber(nums)).toEqual(1)
})

it("single Number test 2", ()=> {
    const nums = [4,1,2,1,2]
    expect(singleNumber(nums)).toEqual(4)

})

it("single Number test 3", ()=> {
    const nums = [1]
    expect(singleNumber(nums)).toEqual(1)
})

it("single Number test 4", ()=> {
    const nums = [2,2,4]
    expect(singleNumber(nums)).toEqual(4)
})