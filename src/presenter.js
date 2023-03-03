const formularioNota = document.querySelector("#formularioNota");
const tituloNota = document.querySelector("#tituloNota");
const contenidoTituloNota = document.querySelector("#contenidoTituloNota");

formularioNota.addEventListener("submit", event => {
    event.preventDefault();
    contenidoTituloNota.innerHTML = "<p>" + "Título introducido: " + tituloNota.value + "</p>";
})