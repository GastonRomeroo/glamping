let cartList = document.getElementById("carritoPrincipal");
let buttonEmpty = document.getElementById(`vaciarCarrito`)


function renderCart(){
    cartList.innerHTML = ``

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
    buttonDelete.addEventListener(`click`, deleteProduc);
    

    linea.append(buttonDelete);
    cartList.append(linea);
    

})
}

function deleteProduc(event){


    let id = event.target.dataset.item

    cart = cart.filter((cartId) => {
        return cartId != id 
    })
    renderCart()
    guardarCarritoEnLocalStorage();
}





buttonEmpty.addEventListener(`click`, emptyButtonHandler);




function emptyButtonHandler(){
    cart = [];
    cartList.innerHTML = ``;
    localStorage.clear();
}

  //  cartList.append(emptyButtonHandler)


