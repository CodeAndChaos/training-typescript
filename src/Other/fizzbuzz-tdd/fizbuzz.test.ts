import {fizzBuzz} from './fizbuzz';
it("Returns Fizz on division by 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
});

it("Returns Buzz on division by 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
});

it("Returns FizzBuzz on division by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
});

it("Returns the number as string if not divisible by 3 or 5", () => {
    expect(fizzBuzz(1)).toBe("1");
});
