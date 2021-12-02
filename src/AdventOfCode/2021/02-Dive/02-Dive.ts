export const executePilotOrders = (pilotOrders: string[]): number => {
  let horizontalPosition = 0;
  let depth = 0;
  for (let order of pilotOrders) {
    const [direction, valueAsStr] = order.split(" ");
    const value = parseInt(valueAsStr);
    if (direction === "forward") {
      horizontalPosition += value;
    }
    if (direction === "down") {
      depth += value;
    }
    if (direction === "up") {
      depth -= value;
    }
  }

  return horizontalPosition * depth;
};

export const executePilotOrdersWithAim = (pilotOrders: string[]): number => {
    let horizontalPosition = 0;
    let depth = 0;
    let aim = 0;

    for (let order of pilotOrders) {
      const [direction, valueAsStr] = order.split(" ");
      const value = parseInt(valueAsStr);
      if (direction === "forward") {
        horizontalPosition += value;
        depth += aim * value;
      }
      if (direction === "down") {
        aim += value;
      }
      if (direction === "up") {
        aim -= value;
      }
    }
  
    return horizontalPosition * depth;
  };
