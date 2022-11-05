
loadLoginFromStorage()
let chargeLogin = document.getElementById(`getUser`);
if(chargeLogin){
  chargeLogin.addEventListener(`click`,loginUser);
}

//GUARDAR MI FUNCION DE LOGIN EN LOCAL STORAGE
function saveLoginToStorage(){
  localStorage.setItem(`login`, JSON.stringify(userLogin));
  return userLogin;};

  function loadLoginFromStorage(){
    if(localStorage.getItem(`login`) !== null){
        login = JSON.parse(localStorage.getItem(`login`));
        document.querySelector(".singin").style.display = "none";
    return login};
  }



// FUNCION PARA INICIAR SESION

let userLogin = {
 nameUser:  "CODER",
 passworUser :1234,
}



function loginUser(){
  loadLoginFromStorage()
  saveLoginToStorage();
  nameUser = document.getElementById(`nameUser`).value;
  passworUser = document.getElementById(`passwordUser`).value;
  if(nameUser == userLogin.nameUser || passworUser == userLogin.passworUser){
        
        Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'});
        window.location="tienda.html";
    }
    else{
       Toast.fire({
        icon: 'error',
        title: 'Invalid username or password'})
       }
}


// CERRAR O NO LA SESION
let closeSesion = document.getElementById(`closeSesion`);
closeSesion.addEventListener(`click`,logout);
function logout(){
    Swal.fire({
        title: '¿Desea cerrar sesión?',
        showCancelButton: true,
        confirmButtonText: 'si',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          localStorage.removeItem(`login`);
          document.querySelector(".singin").style.display = "flex";
          Swal.fire('Gracias por visitarnos', '', 'success');
        }
      })
};




//FUNCION DE LIBRERIA SWEET ALERT
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });