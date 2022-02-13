const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
  } = require("../challenges/exercise006");
  
  describe("sumMultiples", () => {
    test("returns the sum of any numbers in the array that are a multiple of 3 or 5", () => {
      expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
      expect(sumMultiples([5, 3, 7, 18, 11, 20])).toBe(46);
      expect(sumMultiples([4, 22, 654, 123, 65, 23, 40, 1])).toBe(882);
    });
  
    test("if the number is not found in the array, returns 0", () => {
      expect(sumMultiples([11, 13, 7, 8, 1, 17])) .toBe(0);
    });
  });
  
  describe("isValidDNA", () => {
    test("will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.", () => {
      expect(isValidDNA("cgtacgt")).toEqual(true);
  
      expect(isValidDNA("cgtabsjs")).toEqual(false);
  
      expect(isValidDNA("tcgwrraat")).toEqual(false);
  
      expect(isValidDNA("gtactgcat")).toEqual(true);
    });
  });
  
  describe("getComplementaryDNA", () => {
    test("will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of ACTG would have a complementary DNA string of TGAC.", () => {
      expect(getComplementaryDNA("CGTACKLJHH")).toBe("Not Valid");
      expect(getComplementaryDNA("CGTACGTATGCA")).toBe("GCATGCATACGT");
      expect(getComplementaryDNA("GTACGTACGACTACG")).toBe("CATGCATGCTGATGC");
      expect(getComplementaryDNA("CGTAGTCA")).toBe("GCATCAGT"); // No leading 0 necessary
    });
  });
  
  describe("isItPrime", () => {
    test("This function should receive a number and return true/false depending on whether it is a prime number or not.", () => {
      expect(isItPrime(5)).toBe(true);
      expect(isItPrime(234)).toBe(false);
      expect(isItPrime(311)).toBe(true);
      expect(isItPrime(727)).toBe(true);
      expect(isItPrime(14637)).toBe(false);
    });
  });
  
  describe("createMatrix", () => {
    test("This function should receive a number and return an array of n arrays, each filled with n items.", () => {
      expect(createMatrix(3,"foo")).toEqual( [["foo", "foo", "foo"],["foo", "foo", "foo"],["foo", "foo", "foo"]]);
      expect(createMatrix(5,"a")).toEqual( [["a","a","a","a","a"],["a","a","a","a","a"],["a","a","a","a","a"],["a","a","a","a","a"],["a","a","a","a","a"]]);
      expect(createMatrix(4,3)).toEqual([[3,3,3,3],[3,3,3,3],[3,3,3,3],[3,3,3,3]]);
    });
  });
  
  describe("areWeCovered", () => {
    test("return true/false depending on whether there are enough staff scheduled for the given day.", () => {
        const staff= [
            { name: "Heather", rota: ["Monday", "Tuesday", "Friday"]  },
            { name:  "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Alex", rota: ["Saturday", "Monday", "Sunday", "Wednesday"] },
            { name: "Neil", rota: ["Saturday", "Friday", "Tuesday", "Wednesday"] },
            { name: "Debbie", rota: ["Saturday", "Wednesday", "Tuesday"]},
            { name: "Otto", rota: ["Saturday", "Sunday", "Friday", "Wednesday"] },
            {name: "Justin", rota: ["Thursday", "Tuesday", "Wednesday"] }
          ];
      expect(areWeCovered(staff, "Saturday")).toBe(true);
      expect(areWeCovered(staff, "Monday")).toBe(false);
      expect(areWeCovered(staff, "Friday")).toBe(true);
  
      
    });
  });

  