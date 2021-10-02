window.addEventListener("load", function(){
let d = localStorage.getItem('datosCarrito')
console.log(JSON.parse(d))
let dP = JSON.parse(d)

let tabla = document.getElementById('tabla')

for (i = 0; i<dP.length; i++) {
tabla.innerHTML += '<tr><td>' + dP[i].nombre + '</td><td>' + dP[i].precio + ' ETH' +'</td><td>' + dP[i].fecha + '</td></tr>'

}
let comprar = document.querySelector('#comprar');
comprar.addEventListener("mouseover", function(){
    comprar.style.border='3px dotted #b8b451'
})
comprar.addEventListener("mouseout", function(){
    comprar.style.border='none'
})
let vaciar = document.querySelector('#vaciar');
vaciar.addEventListener("click", function(){
    localStorage.clear('datosCarrito')
})
})
    