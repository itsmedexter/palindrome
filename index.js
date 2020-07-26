// given a string, return true if the string is a palindrome

// create a function called palindrome that takes a string
function palindrome(str) {
  // create a variable called reversed that is a str, split into substrings in a array, reversed, then return back to a string
  const reversed = str.split('').reverse().join('');
  // return reversed is equal to str argument
  return reversed === str;
}


function palindrome(str) {
  //  using every method to check if all elements pass test to returning a boolean, takes two argument and uses an arrow function
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1]
  });
}