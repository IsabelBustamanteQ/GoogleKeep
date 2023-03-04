import Nota from "./Nota";

const formularioNota = document.querySelector("#formularioNota");
const tituloNota = document.querySelector("#tituloNota");
const contenidoTituloNota = document.querySelector("#contenidoTituloNota");

formularioNota.addEventListener("submit", event => {
    event.preventDefault();
    var notaNueva=new Nota(tituloNota.value);
    contenidoTituloNota.innerHTML = "<p>" + "Título introducido: " + notaNueva.GetTitulo() + "</p>";
})