

document.getElementById('telefono').addEventListener('click', function(){

    document.getElementById('mostrar_tel').style.display = 'block';
})

document.getElementById('mail').addEventListener('click', function(){
   
  document.getElementById('mostrar_mail').style.display = 'block';
      
})

/*
*document.getElementById('contacto').addEventListener('click', function() {
 *   document.getElementById('gracias').style.display = 'block';
*})
*/
const form = document.getElementById("miFormulario");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    alert("Por favor ingrese una dirección de correo electrónico válida.");
  } else {
    alert("Gracias por enviar su e-mail. Me comunicaré a la brevedad.");
  }
});

  
