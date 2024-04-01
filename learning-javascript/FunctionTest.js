/* Hoisting: calling a function before it is declared
* moves declarations to the top of current scope
*/
func1();

function func1(){
    console.log("Hello World");
}


//all typeof = strings
let typedef = typeof(func1);
console.log(typeof typedef);

/*variables = anonymous function
*typeof on a function returns "function" thus identifying it 
*/
const a = function (num1, num2){
    return num1 + num2;
}
console.log(typeof a, a(2,3).toString()); //returns the function as a String

//arrow function notation
const b = () => {
    return "test";
};

console.log(b());

//calling a function right away
(function func2(){
    console.log(arguments.length); //returns number of arguments inputted by the user
})();

//all functions are objects (that means they have associated methods and instance/static data)
const func3Obj = new Function("a","b", "return a*b * arguments.length;");
console.log(func3Obj(3,4));

let arr = [b];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]());
}

//Making a function a property of an object
const myObj = {
    prop1: "Hello World",
    prop2: b
};

console.log(myObj.prop2());



