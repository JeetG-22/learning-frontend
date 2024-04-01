function main(callBack){
    console.log(callBack(2))
}

main(num => num * 2);

const arr = [1,2,3,4];
arr.push("test");
console.log("Original Array: " + arr);

const newArr = arr.map(a => a + a);
console.log("New Array: " + newArr);




