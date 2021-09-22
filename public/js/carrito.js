window.addEventListener("load", function(){
let d = localStorage.getItem('datosCarrito')
console.log(JSON.parse(d))
let dP = JSON.parse(d)

let tabla = document.getElementById('tabla')

for (i = 0; i<dP.length; i++) {
tabla.innerHTML += '<tr><td>' + dP[i].nombre + '</td><td>' + dP[i].precio + ' ETH' +'</td><td>' + dP[i].fecha + '</td></tr>'

console.log(d)
}
})
    