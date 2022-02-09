function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  var len=nums.length;
  var newArray=[];
  if (nums==[]) return newArray;
  else for(var i=0;i<len;i++){
    newArray[i]=Math.pow(nums[i],2);

  }
  //console.log(newArray);
  return(newArray);
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  var len=words.length;
  var newWord=words[0];
  for(var i=1;i<len;i++){
    newWord+=words[i].charAt(0).toUpperCase()+words[i].slice(1);
  }
  //console.log(newWord);
  return newWord;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
   var len =people.length;
   var countSub=0;
   var x=0;
   for(var i=0;i<len;i++){
     if(people[i].subjects==[])  x=0;
     else 
        x=people[i].subjects.length;
     countSub+=x;
   }
   //console.log(countSub);
   return(countSub);

}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  var len=menu.length;
  //console.log(Object.keys(menu));//to check keys of the menu object-it came as 0,1,2,3
  //console.log(Object.values(menu));//to check values of the menu object
  //console.log(Object.values(menu)[0]);//to check values of the menu object
  for (var i=0;i<len;i++)
  {
    var objValue=Object.values(menu)[i];//get each element in the object value
    var ingredientValue=objValue.ingredients.includes(ingredient);//check special ingredient in each 
    if (ingredientValue==true)  return true;
 }
  return false;

}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  var arr1Len=arr1.length;
  var newArray=[];
  for(var i=0;i<arr1Len;i++)
  {
    var x=arr1[i];
    var y=arr2.includes(x);//check if element in arr1 is in arr2
    if(y==true && newArray.includes(x)==false) newArray.push(x); //add elem to new array if elem in arr2 and not in the newarray
  }
  //console.log(newArray);
  return newArray.sort();//to get numbers in ascending order
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
