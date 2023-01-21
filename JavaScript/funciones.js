document.getElementById('contacto').addEventListener('click', function(){
    console.log('El email fue enviado')
    document.getElementById('Gracias').style.display = 'block';
})

document.getElementById('telefono').addEventListener('click', function(){

    document.getElementById('mostrar_tel').style.display = 'block';
})

document.getElementById('mail').addEventListener('click', function(){

    document.getElementById('mostrar_mail').style.display = 'block';
})