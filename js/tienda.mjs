// tienda
let listaProductoStock = [];
let listadoNombresProductos = [];
let listadoNombresID = [];
let listaCategoria = []
let carrito = [];
let priceMoney = `ARS $`


listaProductoStock = listaProducto.filter((prod) => prod.stock > 0);
console.log(listaProductoStock); //Filtra los productos mayores a cero y crea un array

listadoNombresProductos = listaProductoStock.map((prod) => prod.nombre);
console.log(listadoNombresProductos); //Si los productos no tienen stock no aparecen y crea un array

listadoNombresID = listaProductoStock.map((prod) => prod.id);
console.log(listadoNombresID); //Crea un array para los id unicamente

listaCategoria = listaProductoStock.filter((prod) => prod.cat == listaCategoria);
console.log(listaCategoria);



listaProducto.forEach((prod) => {
    let card = document.createElement(`div`);
    let catalogo = document.getElementById(`catalogo`)

    card.className = `card`
    card.innerHTML = `  
        <img src="${prod.img}" alt="imagen de ${prod.nombre}">
        <div class="informacion">
            <h1 class="tittle_1">${prod.nombre}</h1>
            <p class="tittle_2"><h6>
            ${prod.detalle}</h6></p>
        </div>
        <div class="precio">
            <div class="box-precio">
                <span class="precio"><b>${priceMoney} ${prod.precio}</b></span>
            </div>
        </div>`;
    catalogo.append(card);

    let botonCompra = document.createElement(`button`);
    botonCompra.textContent = `Añadir al carrito`;
    botonCompra.className = "miBoton";
    card.append(botonCompra)

});

listaProducto.forEach((prod)=>{
    //BODY CARD
    let cardBody = document.createElement(`div`);
    cardBody.classList.add(`card`);
    //IMG 
    let imgCard = document.createElement(`img`);
    imgCard.classList.add(imgCard);
    imgCard.innerText = prod.img;
    //NAME PRODUCT
    let nameProduct = documet.createElement(`div`);
    nameProduct.classList.add(`tittle_2`);
    nameProduct.innerText = prod.nombre;
    //DETAIL PRODUCT
    let detailProduct = documet.createElement(`div`);
    detailProduct.classList.add(`tittle_1`);
    detailProduct.innerText = prod.detalle;
    //PRICEPRODUCT
    let priceProduct = documet.createElement(`div`);
    priceProduct.classList.add(`precio`);
    priceProduct.innerText = priceMoney + prod.precio;

    cardBody.append(cardBody);
    img.append(imgCard);
    catalogo.append(nameProduct);
    catalogo.append(detailProduct);
    catalogo.append(priceProduct);
});

