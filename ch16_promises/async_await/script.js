// A function that returns a promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("✅ Data fetched from the server!");
    }, 2000); // simulates a 2-second delay
  });
}

// An async function that uses await
async function getData() {
  console.log("Fetching data...");

  const result = await fetchData(); // waits for fetchData to finish
  console.log(result);

  console.log("Done!");
}

getData();
