// Arithmetic Operators in JavaScript

// let a = 10;
// let b = 3;

// console.log("Addition (a + b):", a + b); // 13
// console.log("Subtraction (a - b):", a - b); // 7
// console.log("Multiplication (a * b):", a * b); // 30
// console.log("Division (a / b):", a / b); // 3.333...
// console.log("Modulus (a % b):", a % b); // 1
// console.log("Exponentiation (a ** b):", a ** b); // 1000

// var numOfBrothers = 5
// // numOfBrothers++
// // numOfBrothers++
// console.log(numOfBrothers);

// let a = 10;
// let b = 5;
// let c = "10";

// // Equal to (==) - compares values only
// console.log(a == c); // true (because values are equal, type is ignored)

// // Strict equal to (===) - compares value AND type
// console.log(a === c); // false (number !== string)

// // Not equal to (!=) - compares values only
// console.log(a != b); // true (10 != 5)

// // Strict not equal to (!==) - compares value AND type
// console.log(a !== c); // true (10 (number) !== "10" (string))

// // Greater than (>)
// console.log(a > b); // true

// // Less than (<)
// console.log(a < b); // false

// // Greater than or equal to (>=)
// console.log(a >= 10); // true

// // Less than or equal to (<=)
// console.log(b <= 5); // true

// Logical Operators in JavaScript

// Logical Operators Example

// let a = true;
// let b = false;

// // Logical AND (&&) – true only if both are true
// console.log("a && b:", a && b); // false
// console.log("a && true:", a && true); // true

// // Logical OR (||) – true if at least one is true
// console.log("a || b:", a || b); // true
// console.log("false || b:", false || b); // false

// // Logical NOT (!) – reverses the value
// console.log("!a:", !a); // false (becuase a is true)
// console.log("!b:", !b); // true (becuase b is false)

// // Combining conditions
// let x = 10;
// let y = 5;

// console.log((x > 5) && (y < 10)); // true
// console.log((x < 5) || (y < 10)); // true
// console.log(!(x === 10));        //false

// var age = 7;
// var withParent = true;
// console.log(age);

// if (age > 13) {
//   console.log("watch movie with parent");
//   if (age < 13 && withParent == true) 
//   console.log("watch movie with parent");
// }

// var isMarried = false
// console.log(!isMarried);

// Basic assignment
let x = 10;  
x += 20
console.log("x =", x); // 10

// Basic assignment
let a = 10;  
a *= 20
console.log("x =" + a); // 10

// // Add and assign
// x += 5;   // same as x = x + 5
// console.log("x += 5 →", x); // 15

// // Subtract and assign
// x -= 3;   // same as x = x - 3
// console.log("x -= 3 →", x); // 12

// // Multiply and assign
// x *= 2;   // same as x = x * 2
// console.log("x *= 2 →", x); // 24

// // Divide and assign
// x /= 4;   // same as x = x / 4
// console.log("x /= 4 →", x); // 6

// // Modulus and assign
// x %= 5;   // same as x = x % 5
// console.log("x %= 5 →", x); // 1

// // Exponentiation and assign
// x **= 3;  // same as x = x ** 3
// console.log("x **= 3 →", x); // 1

