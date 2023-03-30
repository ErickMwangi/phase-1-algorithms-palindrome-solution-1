function reverse(word){
  const wordArray = word.split("");
  const reverseWordArray =wordArray.reverse();
  const reversedWord = reverseWordArray.join("");
  return reversedWord;
}

function isPalindrome(word) {
  
  // Write your algorithm here
  const reverseWord = reverse(word);
  return word === reverseWord
}

/* 
  Add your pseudocode here
  1. Reverse the input string
  2. If the reversed word string is equal to input string,
       return true
  3. Else
      return false
*/

/*
  Add written explanation of your solution here
 1. The `reverse` function takes a word as input, converts it to an array  of individual characters using the `split` method .Get the reversed version of the input word by calling the "reverse function".
 2. Check if the input word is equal to the reversed version.
 3. If they are equal, return `true` as the input word is a palindrome.
 4. And if they are not equal,return `false` as the input word is not a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

}

module.exports = isPalindrome;
