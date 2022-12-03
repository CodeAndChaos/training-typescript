export const rockpaperPart1 = (input: string[]) => {
  const valMap: Record<string, { type: string; value: number }> = {
    A: {
      type: "ROCK",
      value: 1,
    },
    B: {
      type: "PAPER",
      value: 2,
    },
    C: {
      type: "SCISSORS",
      value: 3,
    },
    X: {
      type: "ROCK",
      value: 1,
    },
    Y: {
      type: "PAPER",
      value: 2,
    },
    Z: {
      type: "SCISSORS",
      value: 3,
    },
  };

  const processedInput = input.map((val) => {
    let [player1, player2] = val.split(" ");
    let score = valMap[player1].value;
    if (valMap[player1].type === valMap[player2].type) {
      return score + 3;
    }

    if (
      valMap[player1].type === "ROCK" &&
      valMap[player2].type === "SCISSORS"
    ) {
      return score + 6;
    }
    if (valMap[player1].type === "PAPER" && valMap[player2].type === "ROCK") {
      return score + 6;
    }
    if (
      valMap[player1].type === "SCISSORS" &&
      valMap[player2].type === "PAPER"
    ) {
      return score + 6;
    }
    return score;
  });
 
  return processedInput.reduce((acc = 0, val = 0) => acc + val);
};

export const rockpaperPart2 = (input: string[]) => {
  return 0;
};
