document.addEventListener("DOMContentLoaded", function () {
  
  const productList=document.getElementById("product-list");
  const cartItems=document.getElementById("cart-items");
  const emptyCartMsg=document.getElementById("empty-cart");
  const cartTotalMsg=document.getElementById("cart-total");
  const totalPriceDisplay=document.getElementById("total-price");
  const checkOutBtn=document.getElementById("checkout-btn");

  const products=[ 
  {id:1,name:"product1",price:99,quantity:0},
  {id:2,name:"product2",price:250,quantity:0},
  {id:3,name:"product3",price:499,quantity:0}];//products array
  
  let cart=JSON.parse(localStorage.getItem("Cart")) ||[];    //products will be pushed here
  renderCart();

products.forEach((product) => {
  const productDiv=document.createElement("div");
  productDiv.classList.add("product");
  productDiv.innerHTML=`
  <span>${product.name} - $${product.price.toFixed(2)}</span>
  <button data-id="${product.id}">Add to Cart</button>
  `;
  productList.appendChild(productDiv);
});


productList.addEventListener("click",(e)=>{
  if(e.target.tagName==="BUTTON"){
    const productId=parseInt(e.target.getAttribute("data-id"));
    const product=products.find((product)=>product.id===productId);
    addtocart(product);
  }
});

function addtocart(product){
  product.quantity++;
  const temp =cart.find(p=>p.id===product.id);
  if (temp){
    temp.quantity++;
    localStorage.setItem("Cart",JSON.stringify(cart));
  }
  else
{
  const tempitem={...product};//destructuring the product object
  cart.push(tempitem);
  localStorage.setItem("Cart",JSON.stringify(cart));
}  
  renderCart();
}


function renderCart(){
  let totalamount=0;
  if (cart.length>0){
    cartItems.innerText = "";
    emptyCartMsg.classList.add("hidden");
    cartTotalMsg.classList.remove("hidden");
    cart.forEach((item)=>{
      totalamount+=(item.price*item.quantity);
      const cartItem=document.createElement("div");  
      cartItem.classList.add("added-cart-item");
      cartItem.innerHTML=`
      ${item.name} - $${item.price.toFixed(2)} Quantity : ${item.quantity} <button data-id="${item.id}" class="delete-btn">Delete</button>`;
      cartItems.appendChild(cartItem);
      totalPriceDisplay.textContent=`$${totalamount.toFixed(2)}`;
    });}
else{
  cartItems.innerText = "Your cart is empty.";
  totalPriceDisplay.textContent=`$0.00`;
  cartTotalMsg.classList.add("hidden");

  emptyCartMsg.classList.remove("hidden");
}
}
checkOutBtn.addEventListener("click",()=>{
  cart.length=0;
  cartTotalMsg.classList.add("hidden");
  cartItems.innerText="Thank you for shopping with us";
  localStorage.setItem("Cart",JSON.stringify(cart));
  renderCart();
});
cartItems.addEventListener("click",(e)=>{
  if(e.target.tagName==="BUTTON"){
    e.stopPropagation();
    const id=parseInt(e.target.getAttribute("data-id"));
    deleteItem(id);
  }
});
function deleteItem(id){
  cart=cart.filter((item)=>item.id!==id);
  renderCart();
  localStorage.setItem("Cart",JSON.stringify(cart));
  };
});