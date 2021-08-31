export const possiblePairs = (str: string, n = 2) => {

    const combinations = (str: string, n: number) => {
        let output: string[] = [];
        if (str.length <= 1) {
            output = [str];
        } else {
            for (let i = 0; i < n; i++) {
                const variants = combinations(str.substr(i + 1), n);
                variants.forEach(variant => {
                    output.push(str.substr(0, i + 1) + " " + variant);
                });
            }
        }
        return output;
    }
    return combinations(str, n);
}

const isValidDecodeString = (str: string) => {
    if (str.startsWith("0")) {
        return false;
    }

    const numValue = parseInt(str);
    if (numValue === 0 || numValue > 26) {
        return false;
    }

    return true;
}

const isValidDecodedString = (str: string) => {
    const entries = str.split(" ")
    for (let i = 0; i < entries.length; i++) {
        if (entries[i].startsWith("0")) {
            return false;
        }
        const numValue = parseInt(entries[i]);
        if (numValue === 0 || numValue > 26) {
            return false;
        }
    }
    return true;
}


export function numDecodings2(s: string): number {
    const pairs = possiblePairs(s);
    const output: number = pairs.reduce((acc, pair) => {
        if (isValidDecodedString(pair)) {
            return acc + 1;
        }
        return acc;
    }, 0);
    return output;
};

export function numDecodings(s: string): number {
    
    return 0;
}
