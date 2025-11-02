// Function to save name to sessionStorage
function saveName() {
  const name = document.getElementById("nameInput").value;
  if (name) {
    sessionStorage.setItem("userName", name);
    displayGreeting();
    document.getElementById("nameInput").value = "";
  } else {
    alert("Please enter a name.");
  }
}

// Function to display the saved name
function displayGreeting() {
  const storedName = sessionStorage.getItem("userName");
  if (storedName) {
    document.getElementById("greeting").textContent = `Hello, ${storedName}!`;
  } else {
    document.getElementById("greeting").textContent = "";
  }
}

// Function to clear the stored name
function clearName() {
  sessionStorage.removeItem("userName");
  displayGreeting();
}

// Event listeners
document.getElementById("saveBtn").addEventListener("click", saveName);
document.getElementById("clearBtn").addEventListener("click", clearName);

// Display greeting on page load
window.addEventListener("load", displayGreeting);
