let navigation = document.querySelector('.navigation');
let toggle = document.querySelector('.toggle');
toggle.onclick = function(){
    navigation.classList.toggle('active');
};


//LOCAL STORAGE DEL USUARIO
function loadLoginFromStorage(){
    if(localStorage.getItem(`login`) !== null){
    login = JSON.parse(localStorage.getItem(`login`));
    document.querySelector(".singin").style.display = "none";
    return login};
  }
