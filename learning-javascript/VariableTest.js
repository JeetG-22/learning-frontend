//primitives
let myBoolean = true;

let myString = "Hello World";

let firstNum = 40;
firstNum = 80;

let secondNum = 43;

console.log("10"+9); // 109 : + sign is both concat & addition operator

Console.log("10"-9); //1 //converts the string to a number then does the arithmetic

//arrays (use square brackets for inits)
let myArray = [myBoolean, firstNum, secondNum];

console.log(myString, myArray);

//creating an object
const myObject = {firstProperty: myArray, secondProperty: firstNum + secondNum};
console.log(myObject.firstProperty, myObject.secondProperty);
console.log(myObject.firstProperty[1]);





