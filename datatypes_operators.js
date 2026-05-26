
// Exercise 1: Numbers

// 1. Declare number variables
let intNum = 10;
let floatNum = 5.5;

// 2. Arithmetic operations
let addition = intNum + 2;
let subtraction = intNum - 2;
let multiplication = intNum * 2;
let division = intNum / 2;
let modulus = intNum % 3;
let exponentiation = intNum ** 2;

// 3. Print all variables
console.log("Integer Number:", intNum);
console.log("Floating Number:", floatNum);

console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Modulus:", modulus);
console.log("Exponentiation:", exponentiation);


// ===============================
// Exercise 2: Boolean and Operators
// ===============================

// 1 & 2. Comparison operators
let x = 8;
let y = 12;

console.log("Is x greater than y?", x > y);
console.log("Is x less than or equal to y?", x <= y);
console.log("Is x equal to y?", x === y);
console.log("Is x not equal to y?", x !== y);


// 3. Logical operators
let a = true;
let b = false;

console.log("a AND b:", a && b);
console.log("a OR b:", a || b);
console.log("NOT a:", !a);


// 4. Assignment operators
let p = 10;

p += 5;
console.log("After += :", p);

p -= 3;
console.log("After -= :", p);

p *= 2;
console.log("After *= :", p);

p /= 4;
console.log("After /= :", p);

p %= 3;
console.log("After %= :", p);