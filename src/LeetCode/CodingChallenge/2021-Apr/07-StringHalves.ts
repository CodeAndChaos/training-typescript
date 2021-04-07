// Problem: Determine if String Halves Are Alike


// https://leetcode.com/explore/challenge/card/april-leetcoding-challenge-2021/593/week-1-april-1st-april-7th/3699/

export function splitStringAtPosition(s: string, pos: number): string[] {
    return [s.substr(0, pos), s.substr(pos)];
}

export function splitStringInHalf(s: string): string[] {
    return splitStringAtPosition(s, s.length / 2);
}

export function countVowels(s: string): number {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return [...s].filter(val => vowels.includes(val)).length
}


export function halvesAreAlike(s: string): boolean {
    const [a, b] = splitStringInHalf(s);
    return countVowels(a) === countVowels(b);
};