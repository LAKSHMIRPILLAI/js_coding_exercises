function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  var result=word.charAt(0).toUpperCase() + word.slice(1);
  //console.log(result);
  return result;
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  var result=firstName.charAt(0).toUpperCase()+'.'+lastName.charAt(0).toUpperCase();
  //console.log(result);
  return result;
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  var resultVat= originalPrice*(1+(vatRate/100));
  var roundedResultVat=Math.round(resultVat*100)/100;
  //console.log(roundedResultVat);
  return roundedResultVat;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  var result=originalPrice *(1-(reduction/100));
  var roundedResult=Math.round(result*100)/100;
  //console.log(roundedResult);
  return roundedResult;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  var len= str.length;
  var middle=Math.floor(len/2)
  var result;
  if (len%2!=0) result=str.charAt(middle);
  else  result=str.slice(middle-1,middle+1);
  //console.log(result);
  return result;

}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  var len= word.length;
  var result='';
  for (var i = (len - 1); i >= 0; i--) { 
    result+= word[i];
  }
  //console.log(result);
  return result;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  var arrlen= words.length;
  var newArray=[]
  for (var i=0;i<arrlen;i++){
    var wordToReverse=words[i]
    var wordLen=wordToReverse.length
    var result='';
    for (var j = (wordLen - 1); j >= 0; j--) { 
      result+= wordToReverse[j];
    }
    newArray[i]=result;
  }
  //console.log(newArray);
   return newArray;
    
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  var len=users.length;
  var count=0;
  for (var i=0;i<len;i++){
    var user=users[i];
    if (user.type=='Linux') count+=1;
  }
  //console.log(count);
  return count;

}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  var len =scores.length;
  var total=0;
  for (var i=0;i<len;i++){
    total+=scores[i];
  }
  var result= total/len
  //console.log(result);
  return Math.round(result*100)/100;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  var num=n;
  var x;
  if (n%5==0 && n%3==0 ) x="fizzbuzz";
  else if (n%3==0) x="fizz";
  else if (n%5==0) x="buzz";
  else x=num;
  //console.log(x)
  return x;


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