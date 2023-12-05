/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const lowercaseSTR = str.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  const output = lowercaseSTR.split("").reduce((acc, char) => {
    return vowels.includes(char) ? acc + 1 : acc;
  }, 0);
  return output;
}

module.exports = countVowels;
