const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let positionOfN=nums.indexOf(n);
  if (positionOfN===-1) return null;//if n is not found
  else if (positionOfN===nums.length-1) return null;//if n is in the last index position
  else return nums[nums.indexOf(n)+1];

};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let count0=0;
  let count1=0;
  for (let i=0;i<str.length;i++)
    Number(str[i])===0?  count0+=1:count1+=1;
  return {1:count1,0:count0};
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  const numString=n.toString();//to convert number to string
  let reversedNum='';
  for (let i=(numString.length)-1;i>=0;i--)reversedNum+=numString[i];//to reverse the number
  return Number(reversedNum);//to convert string back to number
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let total=0;
  for(let i=0;i<arrs.length;i++)
  {
    let x=arrs[i];//get each subarray
    let y=arrs[i].length;//get length of each subarray
    for (let j=0;j<y;j++) total+=arrs[i][j];//add each element of the subarray
  }
  return total;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length>=2){
     [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];//swap the first and last element
      return arr;
  }
  else return arr;

};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  for (let i in haystack) {
    let x = i;//to get the property 
    let y=haystack[x].toString().toLowerCase();//to get thevalue of property which should be a string 
    let term = y.includes(searchTerm.toLowerCase());//both converted to lower case to avoid case sensitivity
    if (term === true)
    return true;
  }
   return false;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  const punct = /[!"#$%&'()*+,.\/:;<=>?@\[\\\]^`{|}~-]+/g;//to remove all the punctuation marks
  const strng=str.replace(punct,'').toLowerCase();//to remove capitalization
  const wordArr = strng.split(' ');//convert string into separate words
  let countObj={};//create an object for counting
  for (let i=0;i<wordArr.length;i++){
      let word=wordArr[i];//get each word
      if (word in countObj)  countObj[word]+=1;
      else countObj[word]=1;
    }
    return countObj;
};
  
  

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
