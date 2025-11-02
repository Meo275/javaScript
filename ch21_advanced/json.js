// Convert JS object to JSON (e.g., sending to a server)
const user = { name: "Maryan", age: 22, city: "London" };
const jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"Maryan","age":22,"city":"London"}'

// // Convert JSON back to JS object
// const parsedUser = JSON.parse(jsonString);
// console.log(parsedUser.name); // Maryan
