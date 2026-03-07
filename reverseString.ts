const str = "Naim Sorker";

const reverseString = (str: string) => {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  console.log(reversedString);
};

reverseString(str);
