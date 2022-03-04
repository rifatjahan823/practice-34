//viddeo-2-------------

const simple = ()=>{
    alert('this is a simple alert')
}
const comfirm = ()=>{
    const response =confirm('this is a  confirm alert')
    console.log(response)
   if(response===true){
    alert("very good")
   }
   else{
       console.log('very bad')
   }
}
const askme = ()=>{
 const gmail=  prompt('whats your gmail')
if(gmail){
    console.log(gmail)
}
else if(!gmail){
    console.log("not return")
}
   
}

//vide0-3-----------
const reFresh= ()=>{
    location.reload()
}

const Url = ()=>{
    location.assign('https://www.google.com/')
}

//vide0-7----------- -->

const displayCart = ()=>{
  const cart =   getCart();
  for(const name in cart ){
    displayProduct(name)
  }
}

const addItem=()=>{
    const nameFiled = document.getElementById("input")
    const nameValue = nameFiled.value
    if(!nameValue ){
       return ;
    }
    //display ui
    displayProduct(nameValue)
    //add local store
    addProductToCart(nameValue)
    nameFiled.value=""
}
const displayProduct = name =>{
    const ul = document.getElementById("product")
    const li = document.createElement("li");
    li.innerText=name;
    ul.appendChild(li)
}
const getCart =()=>{
    const cart = localStorage.getItem('cart');
    let cartObj
    if(cart){
        cartObj=JSON.parse(cart)
    }
    else{
        cartObj={}
    }
    return cartObj
}
const addProductToCart = name =>{
    const cart = getCart();
    if(cart[name]){
        cart[name] = cart[name]+1;
    }
    else{
        cart[name]=1;
    }
    console.log(cart)
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringify)
}
const placeOrder= ()=>{
    document.getElementById("product").textContent=""
    localStorage.removeItem("cart")
}
displayCart()