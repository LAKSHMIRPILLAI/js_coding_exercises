// Spread Syntax Bonus activity

function printColours(colours){
    if (!colours) throw new Error("colour is required");
    var x=[...colours];
    return x;
}

function shoppingList(list, newItem){
    if (!list) throw new Error("list is required");
    if (!newItem) throw new Error("newItem is required");
    var newList=[...list,...newItem];
    return newList;
}

function highestNumber(numbers){
    if (!numbers) throw new Error("numbers are required");
    var highestNum=Math.max(...numbers);
    return highestNum;
}

function splitThatString(string){
    if (!string) throw new Error("string is required");
    const splitString=string.split("");
    return [...splitString];
}


// Optional Chaining Bonus activity!

function addressLookUp(user){
    if (!user) throw new Error("user is required");
    var postCode = user?.address?.postcode;//optional chaining for missing object properties
    return postCode;
}


module.exports = {
    printColours,
    shoppingList,
    highestNumber,
    splitThatString,
    addressLookUp
};