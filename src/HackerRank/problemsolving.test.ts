import { countVowelsInString, findVowelSubstring } from "./problemsolving";

it("works for testcase", () => {
  expect(findVowelSubstring("caberqiiteg", 5)).toBe("erqii");
});

it("counts vowels in string", () => {
  expect(countVowelsInString("aaa")).toBe(3);
});
