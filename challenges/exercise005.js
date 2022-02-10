const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
   var len=nums.length;
   var posOfN=nums.indexOf(n);
   if (posOfN==-1) return null;//if n is not found
   else if (posOfN==len-1) return null;//if n is in the last index position
   else return nums[nums.indexOf(n)+1];

};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  var count0=0;
  var count1=0;
  for (var i=0;i<str.length;i++)
  {
    if (str[i]==0) count0+=1;
    else count1+=1;
  }
  var x={1:count1,0:count0};
  return x;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  var numString=n.toString();//to convert number to string
  var reversedNum='';
  for (var i=(numString.length)-1;i>=0;i--)
  {
    reversedNum+=numString[i];//to reverse the number
  }
  return Number(reversedNum);//to convert string back to number
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  var len=arrs.length;
  var total=0;
  for(var i=0;i<len;i++)
  {
    var x=arrs[i];//get each subarray
    var y=arrs[i].length;//get length of each subarray
    for (var j=0;j<y;j++)
    {
      total+=arrs[i][j];//add each element of the subarray
    }
  }
  return total;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  var len=arr.length;
  if (len>=2){
     [arr[0], arr[len - 1]] = [arr[len - 1], arr[0]];//swap the first and last element
      return arr;
  }
  else return arr;

};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  for (var i in haystack) {
    var x = i;//to get the property 
    var y=haystack[x].toString().toLowerCase();//to get thevalue of property which should be a string 
    var term = y.includes(searchTerm.toLowerCase());//both converted to lower case to avoid case sensitivity
    if (term == true)
    return true;
  }
   return false;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  var punct = /[!"#$%&'()*+,.\/:;<=>?@\[\\\]^`{|}~-]+/g;//to remove all the punctuation marks
  var strng=str.replace(punct,'').toLowerCase();//to remove capitalization
  var wordArr = strng.split(' ');//convert string into separate words
  var countObj={};//create an object for counting
  //console.log(wordArr);
  for (var i=0;i<wordArr.length;i++){
     var word=wordArr[i];//get each word
      if (word in countObj)  countObj[word]+=1;
      else countObj[word]=1;
      //console.log(countObj);
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
