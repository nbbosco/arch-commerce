window.addEventListener("load", function(){
    let formulario = document.querySelector('.formulario');

    formulario.addEventListener("submit", function(e){
        let errores = [];

        let campoNombreCreador = document.getElementById('creador');
        console.log(campoNombreCreador.value)
        if (campoNombreCreador.value == '') {
            errores.push('El campo de nombre del creado tiene que estar completo')
            campoNombreCreador.style.border = '4px #c51244 solid'
        } else if (campoNombreCreador.value.length < 3) {
            errores.push('El campo de nombre del creador debe tener al menos 3 caracteres')
            campoNombreCreador.style.border = '4px #c51244 solid'
        }

        let campoNombreColeccionista = document.getElementById('coleccionista');

        if (campoNombreColeccionista.value == '') {
            errores.push('El campo de nombre del vendedor / coleccionista tiene que estar completo')
            campoNombreColeccionista.style.border = '4px #c51244 solid'
        } else if (campoNombreColeccionista.value.length < 3) {
            errores.push('El campo de nombre del vendedor / coleccionista debe tener al menos 3 caracteres')
            campoNombreColeccionista.style.border = '4px #c51244 solid'
        }   

        let campoFecha = document.getElementById('fechaDeCreacion');

        if (campoFecha.value == '') {
            errores.push('El campo de fecha tiene que estar completo')
            campoFecha.style.border = '4px #c51244 solid'
        } 

        let campoPrecio = document.getElementById('precio');

        if (campoPrecio.value == '') {
            errores.push('El campo de precio tiene que estar completo')
            campoPrecio.style.border = '4px #c51244 solid'
        } 

        let campoNombreProducto = document.getElementById('nombreProducto');

        if (campoNombreProducto.value == '') {
            errores.push('El campo de nombre de producto tiene que estar completo')
            campoNombreProducto.style.border = '4px #c51244 solid'
        } 

        let campoImagenProducto = document.getElementById('imagen');

        if (campoImagenProducto.value == '') {
            errores.push('Se debe subir un imagen del producto')
            campoImagenProducto.style.border = '4px #c51244 solid'
        } 

        if (errores.length > 0) {
            e.preventDefault();

            let ulErrores = document.querySelector('.errores');
            for (let i = 0; i < errores.length; i++){

                ulErrores.innerHTML += '<li>' + errores[i] + "</li>"
                ulErrores.style.display = 'inline-block'
            }
        }
    })
})

