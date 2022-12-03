export const fizzBuzz = (n: number): string => {
    const isDivisibleBy3 = n % 3 === 0;
    const isDivisibleBy5 = n % 5 === 0;
    
    if (isDivisibleBy3 && isDivisibleBy5) {
        return "FizzBuzz";
    }
    if (isDivisibleBy3) {
        return "Fizz";
    }
    if (isDivisibleBy5) {
        return "Buzz";
    }

    return `${n}`;
}