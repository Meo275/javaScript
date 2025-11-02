let noInternetError = Error("There is no internet please enable it")
try{
console.log("The sky whispers secrets only the wind understands.");
console.log("JavaScript is the duct tape of the internet.");
console.log("Dancing unicorns drink pixelated lemonade.");
console.log("404: Joke not found. Try laughing anyway.");
console.log("Be curious, not judgmental — Ted Lasso (probably).");
let firstName
// throw noInternetError
console.log("Ctrl + Z is proof we all make mistakes.");
console.log("Coffee first, code later. Or both at once.");
console.log("The cake is a lie, but the console.log is real.");
console.log("Why do functions break up? Because they had too many arguments.");
console.log("Variables are like friends—name them wisely.");
} catch(error) {
    console.log(error.message);
} finally {
    console.log("I'm the last message");
}
