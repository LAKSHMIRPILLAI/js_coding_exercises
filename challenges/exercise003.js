function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(num => num * num)
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let newWord=words[0];
  for(let i=1;i<words.length;i++) newWord+=words[i].charAt(0).toUpperCase()+words[i].slice(1);
  return newWord;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
    let subjectTotal=0;
    let subjectCount=0;
    people.forEach(people=>{
      people.subjects===[]? subjectCount=0:subjectCount=people.subjects.length;
    subjectTotal+=subjectCount;
    });
    return(subjectTotal);
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  for (let i=0;i<menu.length;i++)
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
  let newArray=[];
  arr1.forEach(arr1=>
  {
    let x=arr1;
    let y=arr2.includes(x);//check if element in arr1 is in arr2
    if(y===true && newArray.includes(x)===false) newArray.push(x); //add elem to new array if elem in arr2 and not in the newarray
  });
  return newArray.sort();//to get numbers in ascending order
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
