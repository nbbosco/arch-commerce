carrito = []
window.addEventListener("load", function(){
    boton = document.querySelector('.botonPrincipal')
    localStorage.clear()
boton.onclick = function (){

    let nombre = document.querySelector('h1').innerHTML
    let precio = document.querySelector('#precio').innerHTML
    let fecha = document.querySelector('#fecha').innerHTML

    datos = {'nombre': nombre, 'precio': precio, 'fecha': fecha}
    lista = localStorage.getItem('datosCarrito')

    if (lista != null){
        carrito = lista;
        carrito.push(datos)
    } else {
        carrito.push(datos)
    }
    localStorage.setItem('datosCarrito', JSON.stringify(carrito) )
}
});