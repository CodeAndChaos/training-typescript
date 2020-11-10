import { humanYearsCatYearsDogYears, humanYearsCatYearsDogYears2 } from "./cat-years-dog-years";

describe("Example Tests", function () {

  it("one", function () {
    expect(humanYearsCatYearsDogYears(1)).toEqual([1, 15, 15])
    expect(humanYearsCatYearsDogYears2(1)).toEqual([1, 15, 15])
  });

  it("two", function () {
    expect(humanYearsCatYearsDogYears(2)).toEqual([2, 24, 24])
    expect(humanYearsCatYearsDogYears2(2)).toEqual([2, 24, 24])
  });

  it("ten", function () {
    expect(humanYearsCatYearsDogYears(10)).toEqual([10, 56, 64])
    expect(humanYearsCatYearsDogYears2(10)).toEqual([10, 56, 64])
  });

});

