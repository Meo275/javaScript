// Example 1: Simple constant
const PI = 3.14159;
console.log("Value of PI:", PI);

// Example 2: Constant string
const country = "Ireland";
console.log("Country:", country);

// Example 3: Constant array (you can modify items inside, but not reassign the array itself)
const fruits = ["apple", "banana", "mango"];
fruits.push("orange"); // ✅ allowed (modifying contents)
console.log("Fruits:", fruits);

// fruits = ["grape"]; ❌ Not allowed (cannot reassign entire array)

// Example 4: Constant object
const user = { name: "Alice", age: 22 };
user.age = 23; // ✅ allowed (modifying property)
console.log("User:", user);

// user = { name: "Bob" }; ❌ Not allowed (cannot reassign entire object)

// Example 5: Constant used in a calculation
const TAX_RATE = 0.23;
let price = 100;
let total = price + price * TAX_RATE;
console.log("Total price with tax:", total);
