// tienda
let cart = [];
let priceMoney = `ARS $`
let catalogo = document.getElementById("catalogo");
const miLocalStorage = window.localStorage;



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
    /*
    //STOCK
    let stockproduc = document.createElement(`div`);
    stockproduc.classList.add(`tittle_2`);
    stockproduc.innerText = prod.stock;
    */
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
    renderCart();
    
}









