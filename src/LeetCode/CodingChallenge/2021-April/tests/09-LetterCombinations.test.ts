import { letterCombinations } from "../09-LetterCombinations";

it('tests letter combinations', () => {
    let digits = "23";
    let output = ["ad","ae","af","bd","be","bf","cd","ce","cf"]
    expect(letterCombinations(digits)).toEqual(output);
})

it('tests letter combinations 2', () => {
    let digits = "";
    let output:string[] = [];
    expect(letterCombinations(digits)).toEqual(output);
})

it('tests letter combinations 2', () => {
    let digits = "2";
    let output = ["a","b","c"]
    expect(letterCombinations(digits)).toEqual(output);
})