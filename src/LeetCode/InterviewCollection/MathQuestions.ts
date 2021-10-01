const fizzBuzz = (): string[] => {
    const result: string[] = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            result.push('FizzBuzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(i.toString());
        }
    }
    return result;
};

type Cord = Internal | Leaf;

interface ICord {
    toString(): string;
    concat(s:Cord): Cord;
    charAt(i:number): string;
}

interface Internal extends ICord {
    left: Cord;
    right: Cord;
    length: number;
}

interface Leaf extends ICord {
    length: number;
    value: string;
}