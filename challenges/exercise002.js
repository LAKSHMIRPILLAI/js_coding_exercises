function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return (person.city==='Manchester') ;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return Math.ceil(people/40);// number of buses =people /40 (completely divisible)+remaining people in another bus
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  return arr.filter(function (arr) {return  arr.toLowerCase().match('sheep');}).length;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  return (person.address.postCode.slice(0,3)==='M16')?(person.address.city=='Manchester'):false;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
