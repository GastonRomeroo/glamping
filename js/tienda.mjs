// tienda
let listaProductoStock = [];
let listadoNombresProductos = [];
let listadoNombresID = [];
let cart = [];
let priceMoney = `ARS $`
let catalogo = document.getElementById("catalogo");
// let cartList = document.getElementById("carritoPrincipal");
// let carrito = [];


listaProductoStock = listaProducto.filter((prod) => prod.stock > 0);
//Filtra los productos mayores a cero y crea un array

listadoNombresProductos = listaProductoStock.map((prod) => prod.nombre);
//Si los productos no tienen stock no aparecen y crea un array

listadoNombresID = listaProductoStock.map((prod) => prod.id);
//Crea un array para los id unicamente

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
    nameProduct.innerText = prod.nombre;
    //DETAIL PRODUCT
    let detailProduct = document.createElement(`div`);
    detailProduct.classList.add(`tittle_2`);
    detailProduct.innerText = prod.detalle;
    //PRICEPRODUCT
    let priceProduct = document.createElement(`div`);
    priceProduct.classList.add(`precio`);
    priceProduct.innerText = priceMoney + prod.precio;
    //BUTTON
    let botonCompra = document.createElement(`button`);
    botonCompra.classList.add(`miBoton`);
    botonCompra.innerText = `Añadir al carrito`; 
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
    cart.push(e.target.getAttribute(`mark`));
    renderCart()
}




function renderCart(){
    
    cartList.innerHTML = "";

    let cartsRepetidas = [...new Set(cart)]

    cartsRepetidas.forEach((itemId) => {
        let item = listaProducto.filter((produc) =>{
            return produc.id === parseInt(itemId)
        })
        let quantity = cart.reduce((total, id) =>{
            return id === itemId ? total += 1 : total
        },0)



    
    let linea = document.createElement(`li`,`p`);
    linea.classList.add("carrito");
    linea.innerText =` ${quantity} x ${item[0].nombre} - $${item[0].precio}`;


    let buttonDelete = document.createElement(`button`);
    buttonDelete.classList.add(`buttonDelete`);
    buttonDelete.innerText = `Eliminar item`;
    buttonDelete.dataset.item = itemId
    //buttonDelete.addEventListener(`click`, deleteProduc);


    linea.append(buttonDelete);
    cartList.append(linea);

})
}
/*


const verCarrito = document.getElementById("title_carrito");
const modalContainer = document.getElementById("modalConteiner");


verCarrito.addEventListener("click",()=>{

    const modalHeader = document.createElement(`div`);
    modalHeader.className = `modalHeader`;
    modalHeader.innerHTML = `
    <h1 class="modalHeaderItem">Carrito</h1>`

    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = `X`;
    modalButton.className = `modal-header-button`;

    modalHeader.append(modalButton);


    carrito.forEach((produc) =>{
        const carritoContent = document.createElement(`div`);
        carritoContent.className = `modal-content`
        carritoContent.innerHTML =`
        <img src"${produc.img}">
        <h3>${produc.nombre}</h3>
        <p>$${produc.precio}</p>`;

    modalContainer.append(carritoContent);

    })

    const total = carrito.reduce((acc, el ) => acc + el.precio, 0)

});
*/