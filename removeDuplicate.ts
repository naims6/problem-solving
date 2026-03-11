const duplicateValue = [1, 3, 3, 3, 6, 3, 2, 5, 6, 23, 1, 4, 5, 6];

// method 1
const uniqueValue = [...new Set(duplicateValue)];

// method 2

const uniqueValue2 = duplicateValue.filter(
  (val, ind) => duplicateValue.indexOf(val) === ind,
);

console.log(uniqueValue)
console.log(uniqueValue2);
