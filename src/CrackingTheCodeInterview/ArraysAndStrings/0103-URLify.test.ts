import { urlify, urlifyCharArray, urlifyCharArray2, urlifyNoReplace } from "./0103-URLify";

const testWhitespaceFunctions = (fun: (text: string) => string) => {
    expect(fun("NoWhiteSpace")).toEqual("NoWhiteSpace");
    expect(fun("This is a test")).toEqual("This%20is%20a%20test")

}

it("urlifies using native", () => {
    testWhitespaceFunctions(urlify)
});

it("replaces without using replace", () => {
    testWhitespaceFunctions(urlifyNoReplace)
})

it("replaces using charArray", () => {
    testWhitespaceFunctions(urlifyCharArray)
})

it("refactored using charArray", () => {
    testWhitespaceFunctions(urlifyCharArray2)
})