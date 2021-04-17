import { countVowels, countVowels2, halvesAreAlike, splitStringInHalf } from "../07-StringHalves"

it("string halves test 1", () => {
    expect(halvesAreAlike("book")).toBe(true)
})
it("string halves test 2", () => {
    expect(halvesAreAlike("textbook")).toBe(false)
})
it("string halves test 1", () => {
    expect(halvesAreAlike("MerryChristmas")).toBe(false)
})

it("string halves test 1", () => {
    expect(halvesAreAlike("AbCdEfGh")).toBe(true)
})

it("splits string in two parts", () => {
    expect(splitStringInHalf("book")).toEqual(["bo", "ok"])
})

it("counts Vowels", () => {
    expect(countVowels("book")).toBe(2)
    expect(countVowels("AbCdEfGh")).toBe(2)
})

it("counts Vowels", () => {
    expect(countVowels2("book")).toBe(2)
    expect(countVowels2("AbCdEfGh")).toBe(2)
})