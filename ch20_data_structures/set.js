// set.js — Demonstrating JavaScript Set data structure

// 1️⃣ Create a Set
const names = new Set(["Maryan", "Fatima", "Asli", "Mustafa"]);
console.log("Initial Set:", names);

// // 2️⃣ Add elements
names.add("Amina");
// names.add("Fatima"); // duplicate — will be ignored
// console.log("After adding Amina and duplicate Fatima:", names);

// // 3️⃣ Check if an element exists
console.log("Has Maryan?", names.has("Maryan"));   // true
// console.log("Has Ahmed?", names.has("Ahmed"));     // false

// // 4️⃣ Delete an element
names.delete("Asli");
// console.log("After deleting Asli:", names);

// // 5️⃣ Get Set size
// console.log("Set size:", names.size);

// // 6️⃣ Iterate over a Set
// console.log("Iterating through Set:");
// for (const name of names) {
//   console.log(name);
// }

// // 7️⃣ Convert Set to Array
// const nameArray = Array.from(names);
// console.log("Converted to Array:", nameArray);

// // 8️⃣ Clear the Set
// names.clear();
// console.log("After clearing:", names);

// // ✅ Extra: Demonstrating Set operations using arrays

// const setA = new Set(["Maryan", "Fatima", "Asli", "Mustafa"]);
// const setB = new Set(["Mustafa", "Amina", "Fatima", "Ali"]);

// // 🧮 Union
// const union = new Set([...setA, ...setB]);
// console.log("Union:", union);

// // 🔁 Intersection
// const intersection = new Set([...setA].filter(x => setB.has(x)));
// console.log("Intersection:", intersection);

// // 🚫 Difference
// const difference = new Set([...setA].filter(x => !setB.has(x)));
// console.log("Difference (A - B):", difference);

console.log(names);