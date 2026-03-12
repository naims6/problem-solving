const number = 5;

// with recursion
const generateFactorialNumberWithRecursion = (num: number): number => {
  if (num === 0) return 1;

  return num * generateFactorialNumberWithRecursion(num - 1);
};

console.log(generateFactorialNumberWithRecursion(number));

// without recursion
const factorialWithoutRecursion = (num: number) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  console.log(result);
};

factorialWithoutRecursion(5);
