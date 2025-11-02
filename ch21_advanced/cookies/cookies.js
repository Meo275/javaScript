// Function to set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Function to get a cookie
function getCookie(name) {
  const cname = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArr = decodedCookie.split(";");
  for (let cookie of cookieArr) {
    cookie = cookie.trim();
    if (cookie.indexOf(cname) === 0) {
      return cookie.substring(cname.length, cookie.length);
    }
  }
  return null;
}

// Function to delete a cookie
function deleteCookie(name) {
  setCookie(name, "", -1);
}

// Function to display greeting from cookie
function displayGreeting() {
  const storedName = getCookie("userName");
  if (storedName) {
    document.getElementById("greeting").textContent = `Hello, ${storedName}!`;
  } else {
    document.getElementById("greeting").textContent = "";
  }
}

// Function to save name to cookie
function saveName() {
  const name = document.getElementById("nameInput").value.trim();
  if (name) {
    setCookie("userName", name, 7); // Store for 7 days
    displayGreeting();
    document.getElementById("nameInput").value = "";
  } else {
    alert("Please enter a name.");
  }
}

// Function to clear name (delete cookie)
function clearName() {
  deleteCookie("userName");
  displayGreeting();
}

// Event listeners
document.getElementById("saveBtn").addEventListener("click", saveName);
document.getElementById("clearBtn").addEventListener("click", clearName);

// Display greeting on page load
window.addEventListener("load", displayGreeting);
