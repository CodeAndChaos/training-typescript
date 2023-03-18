export const rucksack_part1 = (input: string[]) => {
  let sum = 0;
  input.forEach((value) => {
    const [a, b] = compartments(value);
    const char = findIdenticalChar(a, b);
    const val = assignValueToChar(char);
    sum += val;
  });
  return sum;
};

const compartments = (s: string) => {
  const middle = Math.floor(s.length / 2);
  let s1 = s.substring(0, middle);
  let s2 = s.substring(middle);

  return [s1, s2];
};

const findIdenticalChar = (s1: string, s2: string) => {
  const arr1 = s1.split("");
  const arr2 = s2.split("");
  for (const value of arr2) {
    if (arr1.includes(value)) {
      return value;
    }
  }
  return "";
};

const assignValueToChar = (char: string) => {
  let modifier = 0;
  if (char !== char.toLowerCase()) {
    modifier = 26;
  }
  const OFFSET = 96;
  const value = char.toLowerCase().charCodeAt(0) - OFFSET;
  return value + modifier;
};
