// Example 1: Declaring and reassigning
var city = "Dublin";
console.log("City:", city); // Dublin

city = "Cork"; // ✅ allowed
console.log("Updated City:", city); // Cork

// Example 2: Redeclaring the same variable
var city = "Galway"; // ✅ allowed with var
console.log("Redeclared City:", city); // Galway

// Example 3: Function scope vs block scope
function testVar() {
  if (true) {
    var food = "Pizza"; // var is function-scoped, not block-scoped
  }
  console.log("Inside function:", food); // ✅ works
}
testVar();

// Example 4: var inside a function is not accessible outside
function anotherTest() {
  var secret = "hidden";
}
// console.log(secret); ❌ Error: secret is not defined

// Example 5: var allows hoisting
console.log("Before declaration:", message); // undefined (not error)
var message = "Hello World!";
console.log("After declaration:", message); // Hello World!
