function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  var fillings=sandwich.fillings;
  //console.log(fillings);
  return fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  var loc=person.city;
  if (loc=='Manchester') return true;
  else return false;

}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  var numOfBuses=Math.floor(people/40);// number of buses =people /40 (completely divisible)+remaining people in another bus
  if (people% 40!=0) return numOfBuses+1;
  else return numOfBuses;
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  var len=arr.length;
  var countSheep=0;
  for (var i=0;i<len;i++){
    if (arr[i].toLowerCase()=='sheep')
     countSheep+=1;
  }
  //console.log(countSheep);
  return countSheep;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  var address=person.address;
  var postCode=address.postCode;
  var city=address.city;
  if (postCode.charAt(0)=='M') 
    if (city=='Manchester')  return true;
    else return false;
  else return false;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
