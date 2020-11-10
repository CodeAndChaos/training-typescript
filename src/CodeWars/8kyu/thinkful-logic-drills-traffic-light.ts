export function updateLight(current: 'green' | 'yellow' | 'red'): string {
  let lights = ['red', 'yellow', 'green'];
  let nextIndex = (lights.indexOf(current) + 1) % lights.length;
  return lights[nextIndex];
}


export function updateLight2(current: 'green' | 'yellow' | 'red'): string {
  return {
    'green': 'red',
    'yellow': 'green',
    'red': 'yellow'
  }[current];
}

