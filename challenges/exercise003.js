function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(num => num * num)
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  const len=words.length;
  let newWord=words[0];
  for(let i=1;i<len;i++) newWord+=words[i].charAt(0).toUpperCase()+words[i].slice(1);
  return newWord;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
   const len =people.length;
   let subjectTotal=0;
   let subjectCount=0;
   for(let i=0;i<len;i++){
     if(people[i].subjects===[]) subjectCount=0;
     else 
        subjectCount=people[i].subjects.length;
    subjectTotal+=subjectCount;
   }
   return(subjectTotal);
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  const len=menu.length;
  for (let i=0;i<len;i++)
  {
    let objValue=Object.values(menu)[i];//get each element in the object value
    let ingredientValue=objValue.ingredients.includes(ingredient);//check special ingredient in each 
    if (ingredientValue===true)  return true;
 }
  return false;

}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  const arr1Len=arr1.length;
  let newArray=[];
  for(let i=0;i<arr1Len;i++)
  {
    let x=arr1[i];
    let y=arr2.includes(x);//check if element in arr1 is in arr2
    if(y===true && newArray.includes(x)===false) newArray.push(x); //add elem to new array if elem in arr2 and not in the newarray
  }
  return newArray.sort();//to get numbers in ascending order
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
