// tienda
let listaProductoStock = [];
let listadoNombresProductos = [];
let listadoNombresID = [];
let listaCategoria = []
let cart = [];
let priceMoney = `ARS $`
let catalogo = document.getElementById("catalogo");
let CartList = document.getElementById("carritoPrincipal")

const listaProducto =[] //TRABAJANDO EN EL LISTADO DE PRODUCTOS EN UN ARRAY
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
    }
    }

listaProducto.push(new Productos('1',`Carpa canadiese`,'Carpa canadiese 6 personas',165035,15,1.21,`carpas`,`../IMG/IMG_TIENDA/articulos/1 (9).jpg`));

listaProducto.push(new Productos('2',`Linterna Spinit`,`Linterna Spinit HL800R Frontal/Mano`,6198.1,30,1.21,`camping`,`../IMG/IMG_TIENDA/articulos/1 (8).jpg`));

listaProducto.push(new Productos('3',`Navaja Trento`,`Navaja Trento Hunter Light 1.20`,6500,50,1.21,`camping`,`../IMG/IMG_TIENDA/articulos/1 (2).jpg`));

listaProducto.push(new Productos('4',`Mochila Bamboo`,`Mochila Bamboo Adventure 70 Lts`,45000,53,1.21,`mochilas`,`../IMG/IMG_TIENDA/articulos/1 (5).jpg`));

listaProducto.push(new Productos(`5`,`Vaso Térmico`,"Vaso Térmico Waterdog AB-2035",6300,260,1.21,`camping`,`../IMG/IMG_TIENDA/articulos/ali-kazal-QKCo0sBAm58-unsplash 1.jpg`));

listaProducto.push(new Productos(`6`,`Linterna Ledlenser`,"Linterna Ledlenser MT6 600 Lumens",25300,1030,1.21,`camping`,`../IMG/IMG_TIENDA/articulos/1 (7).jpg`));

listaProducto.push(new Productos(`7`,`Termo Bala`,"Termo Bala Lexus 1 lt.",6300,230,1.21,`camping`,`../IMG/IMG_TIENDA/articulos/1 (6).jpg`));

listaProducto.push(new Productos(`8`,`Termo Contigo`,"Termo Contigo De Acero Inoxidable 1.1 Lts",18500,350,1.21,`camping`,`../IMG/IMG_TIENDA/articulos/1 (4).jpg`));

listaProducto.push(new Productos(`9`,`Carpa Baño`,"Carpa Baño Waterdog Tenth Bath",120000,30,1.21,`carpas`,`../IMG/IMG_TIENDA/articulos/1 (3).jpg`));

listaProducto.push(new Productos(`10`,`Caña Seabay`,"Caña Seabay TournamentS 4.26 Mts",65300,150,1.21,`pesca`,`../IMG/IMG_TIENDA/articulos/1 (1).jpg`));

listaProductoStock = listaProducto.filter((prod) => prod.stock > 0);
console.log(listaProductoStock); //Filtra los productos mayores a cero y crea un array

listadoNombresProductos = listaProductoStock.map((prod) => prod.nombre);
console.log(listadoNombresProductos); //Si los productos no tienen stock no aparecen y crea un array

listadoNombresID = listaProductoStock.map((prod) => prod.id);
console.log(listadoNombresID); //Crea un array para los id unicamente

listaCategoria = listaProductoStock.filter((prod) => prod.cat == listaCategoria);
console.log(listaCategoria);


listaProducto.forEach((prod)=>{
    //BODY CARD
    let cardBody = document.createElement(`div`);
    cardBody.classList.add(`card`);
    //IMG
    let imgCard = document.createElement(`img`);
    imgCard.src = prod.img;
    imgCard.alt = prod.detalle
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
    console.log(cart);
    renderCart()
}
function renderCart(){

    let cartsRepetidas = [...new Set(cart)]

    cartsRepetidas.forEach((prod) => {
        let item = listaProducto.filter((produc) =>{
            return produc.id === parseInt(prod)
        })
        console.log(item)
    })
}