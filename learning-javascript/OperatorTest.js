const num = 20;
const stringNum = "20";


/*
* == compares the values not the datatype
* Number(string) = Integer.parseInt(string);
* == converts both sides to the same datatype before comparing
*/
console.log("==: ", typeof num, typeof stringNum,  num == stringNum);
console.log("==: ",typeof num, typeof Number(stringNum),  num == stringNum); //whats its actually doing in the background

const num2 = 1;
const boolNum = true;

console.log("==: ", num2 == boolNum);

//=== makes sure that datatypes are the same or the result is false
console.log("=== : ", num === stringNum);
console.log("!== : ", num !== stringNum);


