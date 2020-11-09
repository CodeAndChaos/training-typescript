import { duplicateCount } from "./countingDuplicates";

it("test", function () {
    expect(duplicateCount("")).toBe(0);
    expect(duplicateCount("abcde")).toBe(0);
    expect(duplicateCount("aabbcde")).toBe(2);
    expect(duplicateCount("aabBcde")).toBe(2);
    expect(duplicateCount("Indivisibility")).toBe(1)
    expect(duplicateCount("Indivisibilities")).toBe(2)
  });