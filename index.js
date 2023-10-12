function isPalindrome(word) {
  // Write your algorithm here
  let oneLetter=word.length;
  if (oneLetter < 2){
    return true;
  }
  let start=0;
  let end = word.length-1;
  //const chars=word.split("")
  while(start < end) {
    if(word[start] != word[end]) {
      
    return false;
  }
  start+=1;
  end-=1;
}
return true;
}

/* 
  Add your pseudocode here
  1. initilize a function that takes a word
  2. initilize a veriable that has the length od thw word
  3. initilize an if statement to check if lenght if word is less than 2
  4. if not initilize 2 variables one for the first letter =0 and one for the last letter = word.length-1 for the word
  5. initilize a while loop start < end 
  6. initilize an if statement to check the indexs if the first letter dose not matches the last will return false
  7. if yes there's a match a will increase the counters for both variables
  8. function return true 
 
*/

/*
  Add written explanation of your solution here
   1. first thing about Palindrome if the word only consist of one letter than it's true
  2. if not then we will check if the first and last letter matches and contiues that with while loop
  3. don't forget about the counters
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}


module.exports = isPalindrome;
