const {addNumbers, subNumbers, multNumbers, divNumbers, sqrtNumber, maxNumber} = require("./math");

describe("Tesing Math", ()=>{
    
    //Addition Test
    test("Should return the sum of two numbers", () => {
        expect(addNumbers(3,4)).toBe(7)
    });

    //Subtraction Test
    test("Should return the difference between two numbers", () => {
        expect(subNumbers(90,40)).toBe(50)
    });

    //Multiply Test
    test("Should return the product between two numbers", () => {
        expect(multNumbers(14,2)).toBe(28)
    });

    //Divide Test
    test("Should return the quotient of two numbers", () => {
        expect(divNumbers(81, 9)).toBe(9)
    });

    //Square Root Test
    test("Should return the square root of a number", () => {
        expect(sqrtNumber(4)).toBe(2)
    });

    //Find Max Test
    test("Should find the max of two numbers", () => {
        expect(maxNumber(6,9)).toBe(9)
    });


});