// const taxRate = 0.18;
// const shippingPrice = 15;
// const shippingFreePrice = 300;

<<<<<<< HEAD
window.addEventListener("load", () => {
  // localStorage.setItem("taxRate", taxRate);
  // localStorage.setItem("shippingPrice", shippingPrice);
  // localStorage.setItem("shippingFreePrice", shippingFreePrice);
  calculateCartPrice();
=======
window.addEventListener("load", ()=>{
    // localStorage.setItem("taxRate", taxRate);
    // localStorage.setItem("shippingPrice", shippingPrice);
    // localStorage.setItem("shippingFreePrice", shippingFreePrice);
    calculateCartPrice();

>>>>>>> e2a98f19415afcdabb9320cc85e60d30ae2f37c2
});

const productsDiv = document.querySelector(".products");
//Capturing ==> Static Parent ------> Children
<<<<<<< HEAD
productsDiv.addEventListener("click", (e) => {
  //e.target vs. e.currentTarget
  // alert(e.target.tagName);
  // alert(e.currentTarget.className);
  if (e.target.className === "fa-solid fa-minus") {
    alert("minus btn clicked");
    calculateProductPrice(e.target);
    calculateCartPrice();
  } else if (e.target.classList.contains("fa-plus")) {
    alert("plus btn clicked");
    calculateProductPrice(e.target);
    calculateCartPrice();
  } else if (e.target.getAttribute("class") == "remove-product") {
    alert("remove btn clicked");
    calculateCartPrice();
  } else {
    alert("other element clicked");
  }
});

const calculateProductPrice = (target) => {
  //each product total calculation
  //productTotalPrice => quantity * price
  const productInfoDiv = target.closest(".product-info");
  console.log(productInfoDiv);
};

const calculateCartPrice = () => {
  //cart total calculation from all products
};
=======
productsDiv.addEventListener("click", (e)=>{
    //e.target vs. e.currentTarget
    // alert(e.target.tagName);
    // alert(e.currentTarget.className);
    if(e.target.className === "fa-solid fa-minus"){
        alert("minus btn clicked");
        calculateProductPrice(e.target);
        calculateCartPrice();
    }
    else if(e.target.classList.contains("fa-plus")){
        alert("plus btn clicked");
        calculateProductPrice(e.target);
        calculateCartPrice();
    }
    else if(e.target.getAttribute("class") == "remove-product"){
        alert("remove btn clicked");
        calculateCartPrice();
    }
    else{
        alert("other element clicked");
    }

});

const calculateProductPrice = (target) =>{
    //each product total calculation
    //productTotalPrice => quantity * price
    const productInfoDiv = target.closest(".product-info");
    console.log(productInfoDiv);
}

const calculateCartPrice = () =>{
    //cart total calculation from all products

}



>>>>>>> e2a98f19415afcdabb9320cc85e60d30ae2f37c2
