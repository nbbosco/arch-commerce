// var validator = require('validator');
// import validator from 'validator';

window.addEventListener("load", function(){
    let formulario = document.querySelector('.formulario');
    let perfilC = document.querySelector('#perfilC');
    let perfil = document.querySelector('#perfil');

    formulario.addEventListener("submit", function(e){
        let errores = [];

        let campoNombreCreador = document.getElementById('nombre');
        console.log(campoNombreCreador.value)
        if (campoNombreCreador.value.length < 3) {
            errores.push('El campo de nombre del creador debe tener al menos 3 caracteres')
            campoNombreCreador.style.border = '4px #c51244 solid'
        }

        // let campoEmail = document.getElementById('email')
        // if(validator.isEmail(email.value) == false){
        //     errores.push('Ingrese un correo electronico valido')
        //     campoEmail.style.border = '4px #c51244 solid'
        // }

        if (errores.length > 0) {
            e.preventDefault();

            let ulErrores = document.querySelector('.errores');
            for (let i = 0; i < errores.length; i++){

                ulErrores.innerHTML += '<li>' + errores[i] + "</li>"
                ulErrores.style.display = 'inline-block'
            }
        

        }
    })
    perfilC.addEventListener("click", function(){
        let codigo = document.querySelector('#codigo')
        codigo.style.display='block'
    })
    perfil.addEventListener("click", function(){
        let codigo = document.querySelector('#codigo')
        codigo.style.display='none'
    })
})