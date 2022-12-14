// tienda
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let priceMoney = `ARS $`;
let catalogo = document.getElementById("catalogo");
let cartList = document.getElementById("carritoPrincipal");
const listaProducto = [];
let totalValue = document.getElementById(`totalValue`);
let buttonEmpty = document.getElementById(`vaciarCarrito`);
let totalReduce = 0;
let toBuy = document.getElementById(`realizarCompra`);
let modal = document.getElementById("ventanaModal");
let boton = document.getElementById("abrirModal");
let span = document.getElementsByClassName("cerrar")[0];
//FUNCIONES DE LOCAL STORAGE
function saveCartToStorage(){
    localStorage.setItem(`cart`, JSON.stringify(cart))
    return cart;};

function loadCartFromStorage(){
    if(localStorage.getItem(`cart`) !== null){
        cart = JSON.parse(localStorage.getItem(`cart`))}
    return cart};

//LOCAL STORAGE DEL USUARIO
function loadLoginFromStorage(){
    if(localStorage.getItem(`login`) !== null){
    login = JSON.parse(localStorage.getItem(`login`));
    return login};
}
loadLoginFromStorage();
loadCartFromStorage();
damnedFetch();
async function damnedFetch() {
    const responseDolar = await fetch(`https://www.dolarsi.com/api/api.php?type=valoresprincipales`);
    const dataDolar = await responseDolar.json();
    const changer = await dataDolar[0].casa.venta
    const pricePoint = `${changer[0]}${changer[1]}${changer[2]}.${changer[4]}${changer[5]}`;
    const priceDolarToDay = parseFloat(pricePoint) || 0;
    const response = await fetch(`../html/listaProductos.json`);
    const data = await response.json();
    data.forEach((valor) => {
        valor.precio *= priceDolarToDay;
        listaProducto.push(valor);
        
    });
    damnedFetch2();
};
//GENERADOR DE CARDS SOBRE LA LISTA DE PRODUCTOS
function damnedFetch2 () {
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
        priceProduct.textContent = priceMoney + (prod.precio).toFixed(2);
        //BUTTON
        let botonCompra = document.createElement(`button`);
        botonCompra.classList.add(`miBoton`);
        botonCompra.textContent = `A??adir al carrito`;
        botonCompra.setAttribute(`mark`, prod.id)
        botonCompra.addEventListener("click", addProdToCart);
    
        cardBody.append(imgCard);
        cardBody.append(nameProduct);
        cardBody.append(detailProduct);
        cardBody.append(priceProduct);
        cardBody.append(botonCompra);
        catalogo.append(cardBody);
    });
}
function addProdToCart(e){
    saveCartToStorage();
    totalPrice()
    cart.push(e.target.getAttribute(`mark`));
    renderCart();
    //ALERT SWEETALERT
    Toast.fire({
        icon: 'success',
        title: 'Se agrego al carrito correctamente'
      })
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
    linea.innerHTML =`${quantity} X ${item[0].nombre} - $${(item[0].precio).toFixed(2)}`;
    // CREA UN BOTON PARA ELIMINAR EL ITEM SELECCIONADO
    let buttonDelete = document.createElement(`button`);
    buttonDelete.classList.add(`miBoton`);
    buttonDelete.textContent = `Eliminar`;
    buttonDelete.dataset.item = itemId ;
    buttonDelete.addEventListener(`click`, deleteProduct);

    buttonEmptyToProduct();
    linea.append(buttonDelete);
    cartList.append(linea);
})
}

function deleteProduct(e){
    let id = e.target.dataset.item;
    cart = cart.filter((cartId) => {
    return cartId != id });
    totalValue.innerText = priceMoney + 0;
    renderCart();
    totalPrice();
    buttonEmptyToProduct();
}
//BOTON DE VACIAR CARRITO
function buttonEmptyToProduct(){

    if(totalReduce > 0){
        buttonEmpty.addEventListener(`click`,emptyButtonHandler);
        buttonEmpty.style.display = "flex";
        buttonEmpty.classList.add(`miBoton`);
        buttonEmpty.textContent = `Vaciar Carrito`;
        //AGREGANDO EL BOTON DE COMPRA
        toBuy.style.display = "flex";
        toBuy.classList.add(`miBoton`);
        toBuy.textContent = `Comprar`;
        toBuy.addEventListener(`click`,validationLoginUser);
        //CAMBIANDO EL COLOR DEL CARRITO
        boton.style.color = "#62ff00";
    }else if( totalReduce == 0){
        buttonEmpty.style.display = "none";
        toBuy.style.display = "none";
        boton.style.color = "white";
    }
}
function validationLoginUser(){

    confirmValidation = JSON.parse(localStorage.getItem(`validation`));
    if (confirmValidation == true){
        //ALERT SWEETALERT
        Toast.fire({
        icon: 'success',
        title: 'Muchas gracias por su compra'
        });
        window.location="../index.html";
    }else{
        //ALERT SWEETALERT
        Swal.fire({
            title: 'Esta seguro?',
            text: "Debe iniciar sesion primero para realizar su compra",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, iniciar sesion'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location="Iniciarsesion.html";
            }
          })
    }
}
function emptyButtonHandler(){
    totalReduce = 0;
    buttonEmptyToProduct();
    cart = [];
    cartList.innerHTML = "";
    totalValue.innerText = priceMoney + 0;
    renderCart();
    totalPrice();
    //ALERT SWEETALERT
    Toast.fire({
        icon: 'info',
        title: 'El carrito se vacio correctamente'
      })
}

//CALCULADOR DE PRECIO TOTAL
function calculateTotalPrice(){
    renderCart();
    totalReduce = cart.reduce((total, itemId) => {
        let item = listaProducto.filter((produc) =>{
        return produc.id === parseInt(itemId)})
        return total + item[0].precio },0);
    return totalReduce;
}
function totalPrice(){
    totalValue.textContent = `Precio total `+ priceMoney + calculateTotalPrice().toFixed(2);
}
//FUNCION DEL MODAL
boton.addEventListener("click",function() {
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
  });
  span.addEventListener("click",function() {
    modal.style.display = "none";
  });
  window.addEventListener("click",function(event) {
    if (event.target == modal) {
      modal.style.display = "none"; 
    }
});