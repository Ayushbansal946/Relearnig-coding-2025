document.addEventListener("DOMContentLoaded", function () {
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMsg = document.getElementById("empty-cart");
  const cartTotalMsg = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");

  const products = [
      { id: 1, name: "Product 1", price: 99, quantity: 0 },
      { id: 2, name: "Product 2", price: 250, quantity: 0 },
      { id: 3, name: "Product 3", price: 499, quantity: 0 }
  ];

  let cart = JSON.parse(localStorage.getItem("Cart")) || [];
  renderCart();

  products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.innerHTML = `
          <span>${product.name} - $${product.price.toFixed(2)}</span>
          <button data-id="${product.id}">Add to Cart</button>
      `;
      productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
          const productId = parseInt(e.target.getAttribute("data-id"));
          const product = products.find(product => product.id === productId);
          addToCart(product);
      }
  });

  function addToCart(product) {
      product.quantity++;
      const temp = cart.find(p => p.id === product.id);
      if (temp) {
          temp.quantity++;
      } else {
          const tempItem = { ...product };
          cart.push(tempItem);
      }
      updateLocalStorage();
      renderCart();
  }

  function renderCart() {
      let totalAmount = 0;
      cartItems.innerHTML = "";
      if (cart.length > 0) {
          emptyCartMsg.classList.add("hidden");
          cartTotalMsg.classList.remove("hidden");
          cart.forEach((item) => {
              totalAmount += item.price * item.quantity;
              const cartItem = document.createElement("div");
              cartItem.classList.add("added-cart-item");
              cartItem.innerHTML = `
                  ${item.name} - $${item.price.toFixed(2)} Quantity: ${item.quantity}
                  <button data-id="${item.id}" class="delete-btn">Delete</button>
              `;
              cartItems.appendChild(cartItem);
          });
          totalPriceDisplay.textContent = `$${totalAmount.toFixed(2)}`;
      } else {
          emptyCartMsg.classList.remove("hidden");
          cartTotalMsg.classList.add("hidden");
          cartItems.innerText = "Your cart is empty.";
          totalPriceDisplay.textContent = "$0.00";
      }
  }

  function updateLocalStorage() {
      localStorage.setItem("Cart", JSON.stringify(cart));
  }

  checkOutBtn.addEventListener("click", () => {
      cart.length = 0;
      cartTotalMsg.classList.add("hidden");
      cartItems.innerText = "Thank you for shopping with us";
      updateLocalStorage();
  });

  cartItems.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
          e.stopPropagation();
          const id = parseInt(e.target.getAttribute("data-id"));
          deleteItem(id);
      }
  });

  function deleteItem(id) {
      cart = cart.filter((item) => item.id !== id);
      updateLocalStorage();
      renderCart();
  }
});
