

let chargeLogin = document.getElementById(`getUser`);
chargeLogin.addEventListener(`click`,loginUser);

localStorage.getItem(nameUser, content)

function loginUser(){
    let nameUser = document.getElementById(`nameUser`).value;
    let passworUser = document.getElementById(`passwordUser`).value;
    if(nameUser =="CODER" && passworUser =="1234"){
        Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'});
        // window.location="tienda.html";
        document.querySelector(".singin").style.display = "none";
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
          Swal.fire('Gracias por visitarnos', '', 'success')
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