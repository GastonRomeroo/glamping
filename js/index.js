let navigation = document.querySelector('.navigation');
let toggle = document.querySelector('.toggle');
toggle.onclick = function(){
    navigation.classList.toggle('active');
};
loadLoginFromStorage()
loadCartFromStorage()
//LOCAL STORAGE DEL USUARIO
function loadLoginFromStorage(){
    if(localStorage.getItem(`login`) !== null){
    login = JSON.parse(localStorage.getItem(`login`));
    document.querySelector(".singin").style.display = "none";
    return login};
}
//LOCAL STORAGE DEL CARRITO
function loadCartFromStorage(){
    if(localStorage.getItem(`cart`) !== null){
        cart = JSON.parse(localStorage.getItem(`cart`))}
    return cart};