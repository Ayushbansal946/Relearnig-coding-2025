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
  
  const cart=[];    //products will be pushed here

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
    product.quantity++;
    addtocart(product);
  }
});

function addtocart(product){
  if (cart.find(p=>p.id===product.id)){}
  else
{
  cart.push(product);
}  
  renderCart();
}


function renderCart(){
  cartItems.innerText = "";
  let totalamount=0;
  if (cart.length>0){
    emptyCartMsg.classList.add("hidden");
    cartTotalMsg.classList.remove("hidden");
    cart.forEach((item)=>{
      totalamount+=(item.price*item.quantity);
      const cartItem=document.createElement("div");  
      cartItem.innerHTML=`
      ${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
      cartItems.appendChild(cartItem);
      totalPriceDisplay.textContent=`$${totalamount.toFixed(2)}`;
    });
    
    
    
   
}
else{
  emptyCartMsg.classList.remove("hidden");
}
}

});