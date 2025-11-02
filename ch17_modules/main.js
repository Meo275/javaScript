// main.js
import { addToCart, clearCart, getCartItems, getTotal } from "./cart.js";

const cartList = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");
const clearButton = document.querySelector(".clear-btn");

// ✅ Add button event listeners for fruits
document.querySelectorAll(".add-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const parent = button.closest(".product-card");
    const text = parent.querySelector("span").textContent;
    const [emojiName, priceText] = text.split(" - €");
    const name = emojiName
      .trim()
      .replace(/[🍎🍌]/g, "")
      .trim(); // remove emoji
    const price = parseFloat(priceText);
    addToCart(name, price);
    renderCart();
  });
});

// ✅ Clear cart button
clearButton.addEventListener("click", () => {
  clearCart();
  renderCart();
});

// ✅ Function to render cart items dynamically
function renderCart() {
  const items = getCartItems();
  cartList.innerHTML = "";

  if (items.length === 0) {
    const emptyMsg = document.createElement("li");
    emptyMsg.textContent = "(Cart is empty)";
    cartList.appendChild(emptyMsg);
  } else {
    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - €${item.price}`;
      cartList.appendChild(li);
    });
  }

  const total = getTotal();
  totalDisplay.textContent = `Total: €${total}`;
}

// ✅ Initial render
renderCart();
