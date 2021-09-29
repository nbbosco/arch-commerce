window.addEventListener("load", function(){
    let formulario = document.querySelector('.formulario');

    formulario.addEventListener("submit", function(e){
        let errores = [];
        let campoNombreCreador = document.getElementById('creador');
        console.log(campoNombreCreador.value)
        if (campoNombreCreador.value.length < 3) {
            errores.push('El campo de nombre del creador debe tener al menos 3 caracteres')
            campoNombreCreador.style.border = '4px #c51244 solid'
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