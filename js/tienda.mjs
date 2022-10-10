// tienda
let listaProductoStock = [];
let listadoNombresProductos = [];
let listadoNombresID = [];
let listaCategoria = []


class Productos{
constructor(id,nombre,detalle,precio,stock,iva,cat){
this.id = parseInt(id);
this.nombre = nombre.toUpperCase();
this.detalle = detalle;
this.precio = parseFloat(precio);
this.stock = parseInt(stock);
this.iva = parseFloat(iva);
this.cat = cat.toUpperCase()
}
}
const listaProducto =[] //TRABAJANDO EN EL LISTADO DE PRODUCTOS EN UN ARRAY
listaProducto.push(new Productos('1',`Carpa canadiese`,'Carpa canadiese 6 personas',165035,15,1.21,`carpas`));
listaProducto.push(new Productos('2',`Linterna Spinit`,`Linterna Spinit HL800R Frontal/Mano`,6198.1,30,1.21,`camping`));
listaProducto.push(new Productos('3',`Navaja Trento`,`Navaja Trento Hunter Light 1.20`,6500,50,1.21,`camping`));
listaProducto.push(new Productos('4',`Mochila Bamboo`,`Mochila Bamboo Adventure 70 Lts`,45000,53,1.21,`mochilas`));
listaProducto.push(new Productos(`5`,`Vaso Térmico`,"Vaso Térmico Waterdog AB-2035",6300,260,1.21,`camping`));
listaProducto.push(new Productos(`6`,`Linterna Ledlenser`,"Linterna Ledlenser MT6 600 Lumens",25300,1030,1.21,`camping`));
listaProducto.push(new Productos(`7`,`Termo Bala`,"Termo Bala Lexus 1 lt.",6300,230,1.21,`camping`));
listaProducto.push(new Productos(`8`,`Termo Contigo`,"Termo Contigo De Acero Inoxidable 1.1 Lts",18500,350,1.21,`camping`));
listaProducto.push(new Productos(`9`,`Carpa Baño`,"Carpa Baño Waterdog Tenth Bath",120000,30,1.21,`carpas`));
listaProducto.push(new Productos(`10`,`Caña Seabay`,"Caña Seabay Tournament TRMSS 4262 S (Frontal) 4.26 Mts",65300,150,1.21,`pesca`));


listaProductoStock = listaProducto.filter((prod) => prod.stock > 0);
console.log(listaProductoStock); //Filtra los productos mayores a cero y crea un array

listadoNombresProductos = listaProductoStock.map((prod) => prod.nombre);
console.log(listadoNombresProductos); //Si los productos no tienen stock no aparecen y crea un array

listadoNombresID = listaProductoStock.map((prod) => prod.id);
console.log(listadoNombresID); //Crea un array para los id unicamente

listaCategoria = listaProductoStock.filter((prod)=> prod.cat == listaCategoria)
console.log(listaCategoria)




for(const prod of listaProductoStock){
let catalogo = document.getElementById(`catalogo`)

let card = document.createElement(`div`);
// card.className = `` ME SIRVE PARA DARLE UNA CLASE

card.innerHTML= `<div class="conte">
<div class="card">
    <img src="../IMG/IMG_TIENDA/articulos/ali-kazal-QKCo0sBAm58-unsplash 1.jpg" alt="imagen de un cuchillo acero damasco">
    <div class="informacion">
        <h1 class="tittle_1">${prod.nombre}</h1>
        <p class="tittle_2"><h6>${prod.detalle}</h6></p>
    </div>
    <div class="precio">
        <div class="box-precio">
            <span class="precio"><b>$${prod.precio}</b></span>
            <button class="miBoton">Añadir al carrito</button>  
        </div>
    </div>
</div>
</div>`

catalogo.append(card);
}


// card.innerHTML= `<h1>${prod.id}</h1><h2>${prod.nombre}</h2> <h3><p>$${prod.precio}</p></h3> `
