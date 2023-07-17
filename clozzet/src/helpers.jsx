export function addToCart(e, product, cart, setCart) {
  if (e.target.textContent.toLowerCase() === "add to cart") {
    setCart((prev) => [...prev, product]);
    e.target.textContent = "ADDED TO CART";
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
    cart.length;
  }
}
export function addToCartText(cart, item) {
 return cart.some((cartItem) => cartItem.name === item.name)
    ? "ADDED TO CART"
    : "ADD TO CART";
}
