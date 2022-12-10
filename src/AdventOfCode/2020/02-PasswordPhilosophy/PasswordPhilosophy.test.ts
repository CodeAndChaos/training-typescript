import { resolve } from "path";
import { expect, it } from "vitest";
import { readDataArrayFromFile } from "../../utils/readFiles";
import {
  parsePasswordInput,
  validPasswords,
  verifyPasswordEntry,
  verifyPasswordEntryAlternative,
} from "./PasswordPhilosophy";

const exampleEntries = ["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"];

it("parses an input", () => {
  expect(parsePasswordInput(exampleEntries[0])).toEqual({
    min: 1,
    max: 3,
    char: "a",
    pass: "abcde",
  });
});

it("verifies an entry", () => {
  expect(
    verifyPasswordEntry({
      min: 1,
      max: 3,
      char: "a",
      pass: "abcde",
    })
  ).toBeTruthy();
  expect(
    verifyPasswordEntry({
      min: 1,
      max: 3,
      char: "b",
      pass: "cdefg",
    })
  ).toBeFalsy();
});

it("verifies an entry", () => {
  expect(
    verifyPasswordEntryAlternative({
      min: 1,
      max: 3,
      char: "a",
      pass: "abcde",
    })
  ).toBeTruthy();
  expect(
    verifyPasswordEntryAlternative({
      min: 1,
      max: 3,
      char: "b",
      pass: "cdefg",
    })
  ).toBeFalsy();
});

it("processes a list of passwords", () => {
  expect(validPasswords(exampleEntries, verifyPasswordEntry).length).toBe(2);
  expect(
    validPasswords(exampleEntries, verifyPasswordEntryAlternative).length
  ).toBe(1);
});

it("solves the problem", async () => {
  const inputFilePath = resolve(__dirname, "passwordList.txt");
  const inputArr = await readDataArrayFromFile(inputFilePath);
  expect(validPasswords(inputArr, verifyPasswordEntry).length).toBe(636);
  expect(validPasswords(inputArr, verifyPasswordEntryAlternative).length).toBe(
    588
  );
});
