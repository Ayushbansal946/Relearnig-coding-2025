document.addEventListener("DOMContentLoaded", function () {
  const products= 
[ {id:1,name:"product1",price:99},
  {id:2,name:"product2",price:250},
  {id:3,name:"product3",price:499}];//products array
  const cart=[];    //products will be pushed here
const productList=document.getElementById("product-list");
const cartItems=document.getElementById("cart-items");
const emptyCartMsg=document.getElementById("empty-cart");
const cartTotalMsg=document.getElementById("cart-total");
const totalPriceDisplay=document.getElementById("total-price");
const checkOutBtn=document.getElementById("checkout-btn");
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
    cart.push(product);
    renderCart();
  }
});
function renderCart(){
   
}

});