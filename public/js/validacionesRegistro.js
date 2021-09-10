window.addEventListener("load", function(){
    let titulo = document.querySelector('h1');
    console.log(titulo)
    titulo.addEventListener("click", function(){

        let descripcion = document.querySelector('#descripcion')
        let codigo = document.querySelector('#codigo')
        let solicitarCodigo = document.querySelector('#solicitarCodigo')

        if (titulo.innerText == 'Creador'){
        titulo.innerText = 'Coleccionista'
        descripcion.innerText = 'Conviérte en coleccionista y empieza a construir tu galeria de arte digital'
        codigo.style.display='none'
        solicitarCodigo.style.display='none'
    }else{
            titulo.innerText = 'Creador'
            descripcion.innerText = 'Conviértete en creador y empieza a vender tus diseños digitales'
            codigo.style.display='block'
            solicitarCodigo.style.display='block'
        }

    })
})
