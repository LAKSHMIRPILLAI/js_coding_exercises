const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
    } = require("../challenges/exercise007");
        
    
    describe("sumDigits", () => {
      test("takes a number, e.g. 123 and returns the sum of all its digits,zx", () => {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(123456)).toBe(21);
        expect(sumDigits(9824563)).toBe(37);
      });
    });
    
    describe("createRange", () => {
      test("creates a range of numbers as an array", () => {
        expect(createRange(3,11,2)).toMatchObject([3, 5, 7, 9, 11]);
    
        expect(createRange(5,50,10)).toMatchObject([5,15,25,35,45]);
    
        expect(createRange(5,50,5)).toMatchObject([5,10,15,20,25,30,35,40,45,50]);
    
        expect(createRange(4,9,1)).toMatchObject([4,5,6,7,8,9]);
      });
    });
    
    describe("getScreentimeAlertList", () => {
      test("return an array of usernames of users who have used more than 100 minutes of screentime for a given date", () => {
        const users= [
            {
              username: "beth_1234",
              name: "Beth Smith",
              screenTime: [
               { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
               { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
               { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
               { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
               ]    
                },
            {
               username: "sam_j_1989",
               name: "Sam Jones",
               screenTime: [
               { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
               { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
               { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
               ]
                },
            {
                username: "daniel_1245",
                name: "Daniel Prince",
              screenTime: [
               { date: "2019-01-01", usage: { twitter: 34, instagram: 62, facebook: 20} },
               { date: "2019-02-02", usage: { twitter: 56, instagram: 44, facebook: 31} },
               { date: "2019-02-03", usage: { twitter: 52, instagram: 15, facebook: 49} },
               { date: "2019-02-04", usage: { twitter: 30, instagram: 56, facebook: 61} },
               ]    
                },
            {
               username: "jessie_j_1977",
               name: "Jessie Jacob",
               screenTime: [
               { date: "2019-07-11", usage: { mapMyRun: 12, whatsApp: 0, facebook: 34, safari: 10} },
               { date: "2019-07-13", usage: { mapMyRun: 0, whatsApp: 23, facebook: 0, safari: 16} },
               { date: "2019-07-14", usage: { mapMyRun: 27, whatsApp: 0, facebook: 44, safari: 31} },
               ]
                },
          ];
          expect(getScreentimeAlertList(users,"2019-05-04")).toBe( "beth_1234");
        expect(getScreentimeAlertList(users,"2019-07-13")).toBe(null);
        expect(getScreentimeAlertList(users,"2019-01-01")).toBe("daniel_1245");
        expect(getScreentimeAlertList(users,"2019-02-03")).toBe("daniel_1245"); 
      });

    });
    
    describe("hexToRGB", () => {
      test("This function convert each hexadecimal value for R, G and B into its decimal equivalent!", () => {
        expect(hexToRGB("#0000FF")).toBe("rgb(0,0,255)");
        expect(hexToRGB("#C0C0C0")).toBe("rgb(192,192,192)");
        expect(hexToRGB("#800000")).toBe("rgb(128,0,0)");
        expect(hexToRGB("#00FF00")).toBe("rgb(0,255,0)");
        expect(hexToRGB("#008080")).toBe("rgb(0,128,128)");
      });
    });
    
    describe("findWinner", () => {
      test("return X if player X has won, 0 if the player 0 has won, and null if there is currently no winner", () => {
        expect(findWinner( [["X", "0", null],["X", null, "0"],["X", null, "0"]])).toEqual( null);
        expect(findWinner([["X", "0", "0"],["X", null, "0"],["X", null, "0"]])).toEqual( "0");
        expect(findWinner([["X", "0", "0"],["X", null, "X"],["X", null, "X"]])).toEqual("X");
      });
    });
    
   
    