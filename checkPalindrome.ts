const str = "siss";

const checkPalindrome = (str: string) => {
  const reversedStr = str.split("").reverse().join("");
  if (str === reversedStr) {
    console.log(true);
    return
  }
  console.log(false);
};

checkPalindrome(str);
