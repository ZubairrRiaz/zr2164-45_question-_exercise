"use strict";
//Eqaulity or ineqaulity test
console.log("Eqaulity test with string: ", "Apple" === "Apple");
//Eqaulity or ineqaulity test
console.log("Eqaulity test with string: ", "Apple" === "APPLE");
//Test using lower case function
console.log("Lower case test: ", "APPLE".toLowerCase() == "apple");
//Test using lower case function
console.log("Lower case test: ", "APPLE".toLowerCase() == "APPLE");
//Numericals Eqaulity or ineqaulity test
console.log("Numerical test: ", 26 === 26);
//Greater than and less than  test
console.log("greater than test: ", 26 > 26);
//Greater than and less than  test
console.log("greater than test: ", 50 > 25);
//Greater than and less than  test
console.log("less than test: ", 50 <= 100);
// && and || operator tets
console.log("&& operator test: ", 5 === 5 && 30 > 20);
// && and || operator tets
console.log("|| operator test: ", 5 === 5 || 20 > 30);
//test wether an item is a array
const fruits = ['banana', 'watermelon', 'strawbery', 'Melon'];
console.log("Strawbery in array Test: ", fruits.includes('strawbery'));
//test wether an item is a array
console.log("Apple is not in array Test: ", fruits.includes('Aplle'));
