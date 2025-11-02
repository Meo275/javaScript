// monthlySales.js — Demonstrating Map data structure with monthly sales

// 1️⃣ Create a new Map
let monthlySales = new Map();

// 2️⃣ Add key-value pairs (month -> sales in USD)
monthlySales.set("Jan", 1250.5);
monthlySales.set("Feb", 1420.3);
monthlySales.set("Mar", 980.4);
monthlySales.set("Apr", 1110.0);
monthlySales.set("May", 1330.6);
monthlySales.set("Jun", 890.7);
monthlySales.set("Jul", 760.2);
monthlySales.set("Aug", 820.9);
monthlySales.set("Sep", 950.1);
monthlySales.set("Oct", 1075.4);
monthlySales.set("Nov", 1189.0);
monthlySales.set("Dec", 1560.8);
monthlySales.set("Annual", 13538.9);

// 3️⃣ Retrieve a specific month’s sales
console.log(monthlySales.get("Aug")); // 820.9

// 4️⃣ Check number of records
console.log(monthlySales.size); // 13

// 5️⃣ Optional: Display all months and sales
console.log("\nAll Monthly Sales:");
for (let [month, sales] of monthlySales) {
  console.log(`${month} → $${sales}`);
}
