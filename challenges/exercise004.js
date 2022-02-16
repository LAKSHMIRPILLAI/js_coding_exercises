function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const len=nums.length;
  let smallNumArray=[];
  for (let i=0;i<len;i++)
     if (nums[i]<1) smallNumArray.push(nums[i]);//to add number to the end of the new array
  return smallNumArray;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const len=names.length;
  let newArray=[];
  for(let i=0;i<len;i++)
    if(names[i].charAt(0)===char) newArray.push(names[i]);//to add number to the end of the new array
  return newArray;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const len=words.length;
  const char='to ';
  let newArray=[];
  for(let i=0;i<len;i++)
    if(words[i].substring(0,3)===char) newArray.push(words[i]);//to add verb to the end of the new array
  return newArray;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const len=nums.length;
  let newArray=[];
  for(let i=0;i<len;i++)
    if(Math.floor(nums[i])===nums[i]) newArray.push(nums[i]);//to check the integer in the array
  return newArray;
}


function getCities(users) {
  if (!users) throw new Error("users is required");
  const len=users.length;
  let newArray=[];
  for(let i=0;i<len;i++)
     newArray.push(users[i].data.city.displayName);//to get the city names from the object
  return newArray;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const len=nums.length;
  let newArray=[];
  for(let i=0;i<len;i++)  newArray[i]=Math.round(Math.sqrt(nums[i])*100)/100;
  return(newArray);
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const len=sentences.length;
  let newArray=[];
  for(let i=0;i<len;i++){
    let stringStatus=sentences[i].toLowerCase().includes(str.toLowerCase());//check if string is present in the sentence irrespective of the case
    if (stringStatus===true) newArray.push(sentences[i])
   }
  return(newArray);
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const len=triangles.length;
  let newArray=[];
  for(let i=0;i<len;i++)
  {
    let side=triangles[i];//to get each set of triangle sides
    let maxSide=Math.max(...side);//To get the maximum side of the 3 values for a triangle
    newArray.push(maxSide);
  }
  return newArray;
  
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
