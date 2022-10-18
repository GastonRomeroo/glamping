
class Productos{
    constructor(id,nombre,detalle,precio,stock,iva,cat,img){
    this.id = parseInt(id);
    this.nombre = nombre.toUpperCase();
    this.detalle = detalle;
    this.precio = parseFloat(precio);
    this.stock = parseInt(stock);
    this.iva = parseFloat(iva);
    this.cat = cat.toUpperCase();
    this.img = img; }}
const listaProducto =[]
listaProducto.push(new Productos('1',`Carpa canadiese`,'Carpa canadiese 6 personas',95000.0,15,1.21,`carpas`,`../IMG/IMG_TIENDA/articulos/1 (9).jpg`));
listaProducto.push(new Productos('2',`Linterna Spinit`,`Linterna Spinit HL800R Frontal/Mano`,6198.1,30,1.21,`camping`,`../IMG/IMG_TIENDA/articulos/1 (8).jpg`));
listaProducto.push(new Productos('3',`Navaja Trento`,`Navaja Trento Hunter Light 1.20`,6500,50,1.21,`camping`,`../IMG/IMG_TIENDA/articulos/1 (2).jpg`));
listaProducto.push(new Productos('4',`Mochila Bamboo`,`Mochila Bamboo Adventure 70 Lts`,45000,53,1.21,`mochilas`,`../IMG/IMG_TIENDA/articulos/1 (5).jpg`));
listaProducto.push(new Productos(`5`,`Vaso Térmico`,"Vaso Térmico Waterdog AB-2035",6300,260,1.21,`camping`,`../IMG/IMG_TIENDA/articulos/ali-kazal-QKCo0sBAm58-unsplash 1.jpg`));
listaProducto.push(new Productos(`6`,`Linterna Ledlenser`,"Linterna Ledlenser MT6 600 Lumens",25300,1030,1.21,`camping`,`../IMG/IMG_TIENDA/articulos/1 (7).jpg`));
listaProducto.push(new Productos(`7`,`Termo Bala`,"Termo Bala Lexus 1 lt.",6300,230,1.21,`camping`,`../IMG/IMG_TIENDA/articulos/1 (6).jpg`));
listaProducto.push(new Productos(`8`,`Termo Contigo`,"Termo Contigo De Acero Inoxidable 1.1 Lts",18500,350,1.21,`camping`,`../IMG/IMG_TIENDA/articulos/1 (4).jpg`));
listaProducto.push(new Productos(`9`,`Carpa Baño`,"Carpa Baño Waterdog Tenth Bath",12000,30,1.21,`carpas`,`../IMG/IMG_TIENDA/articulos/1 (3).jpg`));
listaProducto.push(new Productos(`10`,`Caña Seabay`,"Caña Seabay TournamentS 4.26 Mts",65300,3,1.21,`pesca`,`../IMG/IMG_TIENDA/articulos/1 (1).jpg`));



