function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let smallNumArray=[];
  nums.forEach(nums=> {if (nums<1) smallNumArray.push(nums);});//to add number to the end of the new array
  return smallNumArray;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let newArray=[];
  names.forEach(names=>{if(names.charAt(0)===char) newArray.push(names);});//to add number to the end of the new array
  return newArray;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const char='to ';
  let newArray=[];
  words.forEach(words=>{if(words.substring(0,3)===char) newArray.push(words);});//to add verb to the end of the new array
  return newArray;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let newArray=[];
  nums.forEach(nums=>{if(Math.floor(nums)===nums) newArray.push(nums);});//to check the integer in the array
  return newArray;
}


function getCities(users) {
  if (!users) throw new Error("users is required");
  let newArray=[];
  users.forEach(users=>{newArray.push(users.data.city.displayName);});//to get the city names from the object
  return newArray;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map(nums=>{return Number.isInteger(Math.sqrt(nums))? Number(Math.sqrt(nums).toFixed(0)):Number(Math.sqrt(nums).toFixed(2));});
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let newArray=[];
  sentences.forEach(sentences=>{
    let stringStatus=sentences.toLowerCase().includes(str.toLowerCase());//check if string is present in the sentence irrespective of the case
    if (stringStatus===true) newArray.push(sentences);
   });
  return(newArray);
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let newArray=[];
  triangles.forEach(triangles=>{
    let side=triangles;//to get each set of triangle sides
    let maxSide=Math.max(...side);//To get the maximum side of the 3 values for a triangle
    newArray.push(maxSide);
  });
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
