const number = [5, 3, 34, 56, 2, 30, 34];

const checkLargestNumber = (arr: number[]) => {
  // method 1
    const largeNumber = Math.max(...arr);

  // method 2 raw
  let largestNumber: number = arr[0];

  for (let i = 0; i < arr.length; i++) {
    largestNumber < arr[i + 1] ? (largestNumber = arr[i + 1]) : largestNumber;
  }
  
  console.log(largestNumber);
  console.log(largeNumber)
};

checkLargestNumber(number);
