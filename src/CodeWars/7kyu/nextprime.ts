function isNumberPrime(n: number) {
  if (n === 2 || n === 3) {
    return true;
  }

  if (n < 2 || n % 1 || n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  let foo = Math.floor(Math.sqrt(n));
  for (let i = 5; i <= foo; i += 6) {
    if (n % i === 0 || n % (i + 2) == 0) {
      return false;
    }
  }
  return true;
}

export function nextPrime(n: number) {
  while (true) {
    n++;
    if (isNumberPrime(n)) {
      return n;
    }
  }
}