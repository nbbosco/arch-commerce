const input = document.getElementById("input");

input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.key == 'Enter') {
    event.preventDefault();
    document.getElementById("boton").click();
  }
});