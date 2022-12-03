export const calorieCounting = (input: string[]) => {
  const newValues: number[] = [];
  let index = 0;
  input.forEach((val) => {
    if (val === "") {
      index++;
    } else {
      if (isNaN(newValues[index])) {
        newValues[index] = 0;
      }
      newValues[index] += parseInt(val, 10);
    }
  });
  return Math.max(...newValues);
};
