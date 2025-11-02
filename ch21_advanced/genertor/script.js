// function lastNames(){
//   console.log("Mohamed");
//   console.log("Adbirahman");
//   console.log("Amina");
//   console.log("Salma");
//   console.log("saeed");
//   console.log("Mustafa");
// }
// lastNames()


// function* lastNames() {
//   yield "Mohamed";
//   yield "Abdirahman";
//   yield "Amina";
//   yield "Salma";
//   yield "Saeed";
//   yield "Mustafa";
// }

// // Create generator object
// const names = lastNames();

// // Access values one by one
// console.log(names.next().value); // Mohamed
// console.log(names.next().value); // Abdirahman
// console.log(names.next().value); // Amina
// console.log(names.next().value); // Salma
// console.log(names.next().value); // Saeed
// console.log(names.next().value); // Mustafa
// console.log(names.next().done);  // true (no more values)


// Sleep function — returns a Promise that resolves after ms milliseconds
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Generator function — yields names
function* listNames() {
  yield "Mohamed";
  yield "Abdirahman";
  yield "Amina";
  yield "Salma";
  yield "Saeed";
  yield "Mustafa";
}

// Async function to use generator with delay
async function displayNames() {
  const names = listNames();

  console.log(names.next().value);
  await sleep(3000);

  console.log(names.next().value);
  await sleep(3000);

  console.log(names.next().value);
  await sleep(3000);

  console.log(names.next().value);
  await sleep(3000);

  console.log(names.next().value);
  await sleep(3000);

  console.log(names.next().value);
  await sleep(3000);

  console.log("✅ All names displayed with 3-second delay!");
}

// Run it
displayNames();
