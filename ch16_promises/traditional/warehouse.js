// warehouse.js

// The warehouse worker makes a promise to fetch an item
let warehousePromise = new Promise(function (resolve, reject) {
  console.log("Desk person: Can you find that item in the warehouse?");
  console.log("Warehouse worker: Sure, I'll check...");

  // Simulate time taken to search the warehouse (2 seconds)
  setTimeout(function () {
    // Randomly decide if the worker finds the item or not
    let itemFound = Math.random() > 0.5; // 50% chance

    if (itemFound) {
      resolve("Warehouse worker: I found the item!");
    } else {
      reject("Warehouse worker: Sorry, I couldn't find it.");
    }
  }, 2000);
});

// Update the HTML while waiting
document.getElementById("status").textContent =
  "Promise is pending... (warehouse worker is searching)";

// Handle the promise result
warehousePromise
  .then(function (successMessage) {
    console.log(successMessage);
    document.getElementById("status").textContent =
      "Promise fulfilled ✅ — The item was found!";
  })
  .catch(function (errorMessage) {
    console.log(errorMessage);
    document.getElementById("status").textContent =
      "Promise rejected ❌ — The item could not be found.";
  });
