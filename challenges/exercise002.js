function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  const loc=person.city;
  return (loc==='Manchester') 
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return Math.ceil(people/40);// number of buses =people /40 (completely divisible)+remaining people in another bus
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  const len=arr.length;
  let countSheep=0;
  for (let i=0;i<len;i++){
    if (arr[i].toLowerCase()==='sheep')
     countSheep+=1;
  }
  return countSheep;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  const postCode=person.address.postCode;
  const city=person.address.city;
  if (postCode.slice(0,3)==='M16') 
    return (city=='Manchester');
  else return false;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
