var carrito = []
window.addEventListener("load", function(){
    boton = document.querySelector('.botonPrincipal')
boton.onclick = function (){
    
    let nombre = document.querySelector('h1').innerHTML
    let precio = document.querySelector('#precio').innerHTML
    let fecha = document.querySelector('#fecha').innerHTML

    let datos = {'nombre': nombre, 'precio': precio, 'fecha': fecha}
    let lista = localStorage.getItem('datosCarrito')
    lista = JSON.parse(lista)

    if (lista != undefined){
        carrito = lista
        carrito.push(datos)
        console.log('entre')
    } else {
        carrito.push(datos)
    }
    console.log(carrito)
    localStorage.setItem('datosCarrito', JSON.stringify(carrito) )
}
});