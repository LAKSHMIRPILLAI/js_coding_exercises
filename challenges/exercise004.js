function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  var len=nums.length;
  var smallNumArray=[];
  const number=1;
  for (var i=0;i<len;i++)
  {
    if (nums[i]<number) smallNumArray.push(nums[i]);//to add number to the end of the new array
  }
  //console.log(smallNumArray);
  return smallNumArray;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  var len=names.length;
  var newArray=[];
  for(var i=0;i<len;i++)
  {
    if(names[i].charAt(0)==char) newArray.push(names[i]);//to add number to the end of the new array
  }
  //console.log(newArray);
  return newArray;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  var len=words.length;
  const char='to ';
  var newArray=[];
  for(var i=0;i<len;i++)
  {
    if(words[i].substring(0,3)==char) newArray.push(words[i]);//to add verb to the end of the new array
  }
  //console.log(newArray);
  return newArray;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  var len=nums.length;
  var newArray=[];
  for(var i=0;i<len;i++)
  {
    if(Math.floor(nums[i])==nums[i]) newArray.push(nums[i]);//to check the integer in the array
  }
  //console.log(newArray);
  return newArray;
}


function getCities(users) {
  if (!users) throw new Error("users is required");
  var len=users.length;
  //console.log(len);
  var newArray=[];
  for(var i=0;i<len;i++)
  {
    var x=users[i].data.city.displayName;//to get the city names from the object
     newArray.push(x);
  }
  //console.log(newArray);
  return newArray;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  var len=nums.length;
  var newArray=[];
  if (nums==[]) return newArray;
  else for(var i=0;i<len;i++){
    //newArray[i]=Math.sqrt(nums[i]).toFixed(2);//to get squareroot of nums corrected to two decimal positions
    //the above one gives wrong output of 6.00 for the number 36 which is different from the expected output 6
    newArray[i]=Math.round(Math.sqrt(nums[i])*100)/100;
  }
  //console.log(newArray);
  return(newArray);
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  var len=sentences.length;
  var newArray=[];
  if (sentences==[]) return newArray;
  else for(var i=0;i<len;i++){
      var stringStatus=sentences[i].toLowerCase().includes(str.toLowerCase());//check if string is present in the sentence irrespective of the case
    if (stringStatus==true) newArray.push(sentences[i])
   }
  //console.log(newArray);
  return(newArray);
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  var len=triangles.length;
  var newArray=[];
  for(var i=0;i<len;i++)
  {
    var x=triangles[i];//to get each set of triangle sides
    var maxSide=Math.max(...x);//To get the maximum side of the 3 values for a triangle
    newArray.push(maxSide);
  }
 // console.log(newArray);
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
