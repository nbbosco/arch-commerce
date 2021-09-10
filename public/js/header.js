window.addEventListener("load", function(){
    let registro = document.querySelector('#registro');
    registro.addEventListener("mouseover", function(){
        registro.innerText=' Registro'
    })
    registro.addEventListener("mouseout", function(){
        registro.innerText=''
    })

    let producto = document.querySelector('#producto');
    producto.addEventListener("mouseover", function(){
        producto.innerText=' Productos'
    })
    producto.addEventListener("mouseout", function(){
        producto.innerText=''
    })

    let usuario = document.querySelector('#usuario');
    usuario.addEventListener("mouseover", function(){
        usuario.innerText=' Usuario'
    })
    usuario.addEventListener("mouseout", function(){
        usuario.innerText=''
    })

    let carrito = document.querySelector('#carrito');
    carrito.addEventListener("mouseover", function(){
        carrito.innerText=' Carrito'
    })
    carrito.addEventListener("mouseout", function(){
        carrito.innerText=''
    })
})