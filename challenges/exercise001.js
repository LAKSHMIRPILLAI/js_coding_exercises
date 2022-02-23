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
  const num= originalPrice*(1+(vatRate/100));
  return  Number.isInteger(num) ? Number(num.toFixed(0)) : Number(num.toFixed(2));
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  const num=originalPrice *(1-(reduction/100));
  return  Number.isInteger(num) ? Number(num.toFixed(0)) : Number(num.toFixed(2));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  const middle=Math.floor(str.length/2);
  return (str.length%2!==0)? str.charAt(middle):str.slice(middle-1,middle+1);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
   return words.map(word => reverseWord(word));
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  return  users.filter(function (users) {return  users.type.match('Linux');}).length;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let total=0;
  scores.forEach(scores=>total+=scores);
  return Number.isInteger(total/scores.length) ? Number((total/scores.length).toFixed(0)) : Number((total/scores.length).toFixed(2));
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  return (n%5===0 && n%3===0 )? "fizzbuzz":(n%3===0)?"fizz":(n%5===0)?"buzz":n;
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