function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase() + word.slice(1);

}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0).toUpperCase()+'.'+lastName.charAt(0).toUpperCase();
 }

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return Math.round(originalPrice*(1+(vatRate/100))*100)/100;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return Math.round(originalPrice *(1-(reduction/100))*100)/100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  const len= str.length;
  const middle=Math.floor(len/2)
  let result;
  if (len%2!==0) result=str.charAt(middle);
  else  result=str.slice(middle-1,middle+1);
  return result;

}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  const len= word.length;
  let reversedWord='';
  for (let i = (len - 1); i >= 0; i--)    reversedWord+= word[i];
  return reversedWord;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  const arrlen= words.length;
  let  newArray=[]
  for (let i=0;i<arrlen;i++){
    let wordToReverse=words[i]
    const wordLen=wordToReverse.length
    let result='';
    for (let j = (wordLen - 1); j >= 0; j--) { 
      result+= wordToReverse[j];
    }
    newArray[i]=result;
  }
   return newArray;   
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  const len=users.length;
  let count=0;
  for (let i=0;i<len;i++){
    let user=users[i];
    if (user.type==='Linux') count+=1;
  }
  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  const len =scores.length;
  let total=0;
  for (let i=0;i<len;i++){
    total+=scores[i];
  }
  return  Math.round((total/len)*100)/100;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  let returnValue;
  if (n%5===0 && n%3===0 ) returnValue="fizzbuzz";
  else if (n%3===0) returnValue="fizz";
  else if (n%5===0) returnValue="buzz";
  else returnValue=n;
  return returnValue;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};