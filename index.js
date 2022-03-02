function isPalindrome(word) {
  let wordReverse = word.split('').reverse().join('');
  if (word === wordReverse) {
    return true;
  } else {
    return false;
  };
};

/* 
  Add your pseudocode here

  create function with string input
    take string, split it up, reverse it, and join it back together. name this as a variable.
    compare string input vs reversed string 
      if same, return true
      if not the same, return false
*/

/*
  Add written explanation of your solution here

  a function receives a string input and determines if the string is the exact same forwards as it is backwards.
  if it is, the function will return true because that word or phrase is a palindrome.
  if it is not, the function will return false. aka not a palindrome
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("radar"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("steve"));
}

module.exports = isPalindrome;
