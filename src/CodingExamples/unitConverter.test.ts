import { UnitConverters } from "./unitConverter";
import { expect, it } from "vitest";
it("converts Celsius to Fahrenheit", () => {
  expect(UnitConverters.celsiusToFarenheit(0)).toBe(32);
  expect(UnitConverters.celsiusToFarenheit(100)).toBe(212);
});

it("converts negative celsius to Farenheit", () => {
  expect(UnitConverters.celsiusToFarenheit(-1)).toBe(30.2);
  expect(UnitConverters.celsiusToFarenheit(-100)).toBe(-148);
});

it("throws an error for temperatures below absolute Zero", () => {
  const absoluteZeroInCelsius = -273.15;
  expect(() =>
    UnitConverters.celsiusToFarenheit(absoluteZeroInCelsius - 1)
  ).toThrowError();
});
