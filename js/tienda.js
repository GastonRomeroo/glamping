// tienda
let cart = [];
let priceMoney = `ARS $`
let catalogo = document.getElementById("catalogo");
let cartList = document.getElementById("carritoPrincipal");
let totalValue = document.getElementById(`totalValue`);
let buttonEmpty = document.getElementById(`vaciarCarrito`);

loadCartFromStorage();
renderCart()
//FUNCIONES DE LOCAL STORAGE
function saveCartToStorage(){
    localStorage.setItem(`cart`, JSON.stringify(cart))}
function loadCartFromStorage(){
    if(localStorage.getItem(`cart`) !== null){
        cart = JSON.parse(localStorage.getItem(`cart`))}}

//GENERADOR DE CARTS SOBRE LA LISTA DE PRODUCTOS
listaProducto.forEach((prod)=>{
    //BODY CARD
    let cardBody = document.createElement(`div`);
    cardBody.classList.add(`card`);
    //IMG
    let imgCard = document.createElement(`img`);
    imgCard.src = prod.img;
    imgCard.alt = prod.detalle;
    imgCard.classList.add(`imgCardProducts`);
    //NAME PRODUCT
    let nameProduct = document.createElement(`div`);
    nameProduct.classList.add(`tittle_1`);
    nameProduct.textContent = prod.nombre;
    //DETAIL PRODUCT
    let detailProduct = document.createElement(`div`);
    detailProduct.classList.add(`tittle_2`);
    detailProduct.textContent = prod.detalle;
    //PRICEPRODUCT
    let priceProduct = document.createElement(`div`);
    priceProduct.classList.add(`precio`);
    priceProduct.textContent = priceMoney + prod.precio;
    //BUTTON
    let botonCompra = document.createElement(`button`);
    botonCompra.classList.add(`miBoton`);
    botonCompra.textContent = `Añadir al carrito`; 
    botonCompra.setAttribute(`mark`, prod.id)
    botonCompra.addEventListener("click", addProdToCart);

    cardBody.append(imgCard);
    cardBody.append(nameProduct);
    cardBody.append(detailProduct);
    cardBody.append(priceProduct);
    cardBody.append(botonCompra);
    
    catalogo.append(cardBody);


});


function addProdToCart(e){
    saveCartToStorage();
    cart.push(e.target.getAttribute(`mark`));
    renderCart();

}

function renderCart(){

    saveCartToStorage();
    
    cartList.innerHTML = "";
    let cartsRepetidas = [...new Set(cart)]
    cartsRepetidas.forEach((itemId) => {
        let item = listaProducto.filter((produc) =>{
            return produc.id === parseInt(itemId)
        })
        let quantity = cart.reduce((total, id) =>{
            return id === itemId ? total += 1 : total
        },0)

    // CREA ASIGNA CLASE E IMPRIME EL PRODUCTO AGREGADO A CARRITO
    let linea = document.createElement(`li`);
    linea.classList.add("carrito");
    linea.textContent =`${quantity} x ${item[0].nombre} - $${item[0].precio}`;
    // CREA UN BOTON PARA ELIMINAR EL ITEM SELECCIONADO
    let buttonDelete = document.createElement(`button`);
    buttonDelete.classList.add(`buttonDelete`);
    buttonDelete.textContent = `Eliminar item`;
    buttonDelete.dataset.item = itemId
    buttonDelete.addEventListener(`click`, deleteProduc);

    linea.append(buttonDelete);
    cartList.append(linea);
    
    totalValue.textContent = priceMoney + calculateTotalPrice()

})
}

function deleteProduc(e){
    let id = e.target.dataset.item;
    cart = cart.filter((cartId) => {
    return cartId != id });
    renderCart();
}


//BOTON DE VACIAR CARRITO
buttonEmpty.classList.add(`emptyButton`);
buttonEmpty.textContent = `Vaciar Carrito`;
buttonEmpty.addEventListener(`click`,emptyButtonHandler);
function emptyButtonHandler(){
    cart = [];
    cartList.innerHTML = "";
    totalValue.innerText = priceMoney + 0;
    renderCart()
}

//CALCULADOR DE PRECIO TOTAL
function calculateTotalPrice(){
    return cart.reduce((total, itemId) => {
        let item = listaProducto.filter((produc) =>{
        return produc.id === parseInt(itemId)})
    return total + item[0].precio },0);
}

