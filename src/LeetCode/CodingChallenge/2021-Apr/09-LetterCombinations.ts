
export function letterCombinations(digits: string): string[] {
    if (digits === "") return [];
    const convertedChars = [...digits].map(val => KEYPAD[val])
    const combinations = createCombinations(convertedChars)
    return combinations;
};

const createCombinations = (chars: string[][]): string[] => {
    const [cur, ...rest] = chars;
    if (rest.length) {
        const combinations = createCombinations(rest)
        const output: string[] = []
        cur.forEach(val => combinations.forEach(item => output.push(val + item)))
        return output;
    } else {
        return cur
    }
}


const KEYPAD: { [x: string]: string[] } = {
    "1": [],
    "2": [
        "a", "b", "c"
    ],
    "3": [
        "d", "e", "f"
    ],
    "4": [
        "g", "h", "i"
    ],
    "5": [
        "j", "k", "l"
    ],
    "6": [
        "m", "n", "o"
    ],
    "7": [
        "p", "q", "r", "s"
    ],
    "8": [
        "t", "u", "v"
    ],
    "9": [
        "w", "x", "y", "z"
    ]
}