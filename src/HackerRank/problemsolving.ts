export const findVowelSubstring = (s: string, k: number): string => {
  let maxString = "";
  let maxVowels = 0;
  const vowelMap = s.split("").map((c) => (isVowel(c) ? 1 : 0));

  for (let i = 0; i < s.length; i++) {
    if (vowelMap[i] === 0) {
        continue;
    }
    const count = vowelMap.slice(i, i + k).reduce((acc: number, curr) => acc + curr, 0);
    if (count > maxVowels) {
      maxVowels = count;
      const subString = s.substring(i, i + k);
      maxString = subString;
    }
  }
  return maxString;
};

export const countVowelsInString = (s: string): number => {
  let vowels = 0;
  for (let i = 0; i < s.length; i++) {
    if (isVowel(s[i])) {
      vowels++;
    }
  }
  return vowels;
};

const isVowel = (c: string): boolean => {
  return ["a", "e", "i", "o", "u"].includes(c);
};
