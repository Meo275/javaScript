// cart.js
let cart = [];

// ✅ Add an item to the cart
export function addToCart(name, price) {
  cart.push({ name, price });
  return cart;
}

// ✅ Clear the cart
export function clearCart() {
  cart = [];
  return cart;
}

// ✅ Get all items
export function getCartItems() {
  return cart;
}

// ✅ Calculate total
export function getTotal() {
  return cart.reduce((sum, item) => sum + item.price, 0);
}
