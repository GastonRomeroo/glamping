// tienda
let cart = [];
let priceMoney = `ARS $`
let catalogo = document.getElementById("catalogo");
let cartList = document.getElementById("carritoPrincipal");
let totalValue = document.getElementById(`totalValue`);
let buttonEmpty = document.getElementById(`vaciarCarrito`);


// CONSTRUCTOR DE LA LISTA DE MIS PRODUCTOS
class Productos{
    constructor(id,nombre,detalle,precio,stock,iva,cat,img){
    this.id = parseInt(id);
    this.nombre = nombre.toUpperCase();
    this.detalle = detalle;
    this.precio = parseFloat(precio);
    this.stock = parseInt(stock);
    this.iva = parseFloat(iva);
    this.cat = cat.toUpperCase();
    this.img = img; 
}}

loadCartFromStorage();
renderCart()
//FUNCIONES DE LOCAL STORAGE
function saveCartToStorage(){
    localStorage.setItem(`cart`, JSON.stringify(cart))
    return cart;};


function loadCartFromStorage(){
    if(localStorage.getItem(`cart`) !== null){
        cart = JSON.parse(localStorage.getItem(`cart`))}
    return cart};


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
            return id === itemId ? total += 1 : total;
        },0)

    // CREA ASIGNA CLASE E IMPRIME EL PRODUCTO AGREGADO A CARRITO
    let linea = document.createElement(`li`);
    linea.classList.add("carrito");
    linea.innerHTML =`${quantity} X ${item[0].nombre} - $${item[0].precio}`;
    //CONTADOR DE ITEMS SELECCIONADOS
    
    
    


    // CREA UN BOTON PARA ELIMINAR EL ITEM SELECCIONADO
    let buttonDelete = document.createElement(`button`);
    buttonDelete.classList.add(`buttonDelete`);
    buttonDelete.textContent = `Eliminar`;
    buttonDelete.dataset.item = itemId
    buttonDelete.addEventListener(`click`, deleteProduc);




    buttonEmpty.classList.add(`emptyButton`);
    buttonEmpty.textContent = `Vaciar Carrito`;
    buttonEmpty.addEventListener(`click`,emptyButtonHandler);


    totalValue.textContent = `Precio total `+ priceMoney + calculateTotalPrice()




    linea.append(buttonDelete);
    linea.append(buttonEmpty);
    linea.append(totalValue);
    cartList.append(linea);
    


})
}

function deleteProduc(e){
    let id = e.target.dataset.item;
    cart = cart.filter((cartId) => {
    return cartId != id });
    totalValue.innerText = priceMoney + 0;
    renderCart();
}


//BOTON DE VACIAR CARRITO


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
