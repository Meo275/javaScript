// 1. Global Scope
var globalVar = "I'm global"; // Accessible everywhere
let globalLet = "I'm also global";
const globalConst = "Me too";

console.log(globalVar); // ✅ "I'm global"
console.log(globalLet); // ✅ "I'm also global"
console.log(globalConst); // ✅ "Me too"

// 2. Function Scope (var)
function testFunctionScope() {
  var functionVar = "Inside function";
  console.log(functionVar); // ✅ accessible here
}
testFunctionScope();
// console.log(functionVar); // ❌ Error: not accessible outside the function

// 3. Block Scope (let & const)
if (true) {
  let blockLet = "Inside block (let)";
  const blockConst = "Inside block (const)";
  var blockVar = "Inside block (var)";

  console.log(blockLet); // ✅ works inside block
  console.log(blockConst); // ✅ works inside block
}
console.log(blockVar); // ✅ var escapes the block
// console.log(blockLet);   // ❌ Error
// console.log(blockConst); // ❌ Error

// 4. Hoisting example
console.log(hoistedVar); // ✅ undefined (var is hoisted)
var hoistedVar = "Hoisted!";

// console.log(hoistedLet);   // ❌ Error: Cannot access before initialization
// let hoistedLet = "Not hoisted properly";

// console.log(hoistedConst); // ❌ Error
// const hoistedConst = "Not hoisted properly";
