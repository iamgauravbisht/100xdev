/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const lowercaseSTR = str.toLowerCase();
  const reversedSTR = lowercaseSTR.split("").reverse().join("");
  if (lowercaseSTR !== reversedSTR) {
    return false;
  }
  return true;
}

module.exports = isPalindrome;
