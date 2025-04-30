export function generateRandomNumber() {
  const digits = new Set();

  while (digits.size < 3) {
    const randomDigit = Math.floor(Math.random() * 10).toString();
    digits.add(randomDigit);
  }

  return [...digits];
}
