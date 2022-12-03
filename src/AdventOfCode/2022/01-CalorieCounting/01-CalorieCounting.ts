const processElvesCarryInput = (input: string[]): number[] => {
  const newValues: number[] = [0];
  let index = 0;
  input.forEach((val) => {
    if (val === "") {
      index++;
      newValues[index] = 0;
    } else {
      newValues[index] += parseInt(val, 10);
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
  return caloriesCount[0] + caloriesCount[1] + caloriesCount[2];
};
