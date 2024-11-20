export function luhnValidator(input: string): boolean {
  const trimmed = input.trim();

  if (!/^[0-9]+$/.test(trimmed)) {
    return false;
  }

  const sum: number = trimmed
    .split('')
    .reverse()
    .map(Number)
    .reduce((sum, num, index) => {
      if (index % 2 !== 0) {
        num *= 2;
        num = num > 9 ? num - 9 : num;
      }

      return sum + num;
    }, 0);

  return sum % 10 === 0;
}
