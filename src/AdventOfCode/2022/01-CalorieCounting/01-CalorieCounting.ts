const processElvesCarryInput = (input: string[]): number[] => {
  const newValues: number[] = [0];
  let index = 0;
  input.forEach((val) => {
    if (val === "") {
      index++;
      newValues[index] = 0;
    } else {
      newValues[index] += Number(val);
    }
  });
  return newValues;
};

export const calorieCounting = (input: string[]) => {
  const caloriesCount = processElvesCarryInput(input);
  return Math.max(...caloriesCount);
};

export const calorieCountingPart2 = (input: string[]) => {
  const caloriesCount = processElvesCarryInput(input);
  caloriesCount.sort((a, b) => b - a);
  
  return caloriesCount.reduce((a, b) => a + b, 0);
};
