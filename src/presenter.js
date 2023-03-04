import Nota from "./Nota";

const formularioNota = document.querySelector("#formularioNota");
const tituloNota = document.querySelector("#tituloNota");
const descrpcionNota=document.querySelector("#descripcionNota");
const contenidoTituloNota = document.querySelector("#contenidoTituloNota");
const contenidoDescripcionNota = document.querySelector("#contenidoDescripcionNota");

formularioNota.addEventListener("submit", event => {
    event.preventDefault();
    var notaNueva=new Nota(tituloNota.value,descrpcionNota.value);
    contenidoTituloNota.innerHTML = "<p>" + "Título introducido: " + notaNueva.GetTitulo() + "</p>";
    contenidoDescripcionNota.innerHTML="<p>"+"Descripción Introducida: "+notaNueva.GetDescripcion()+"</p>";
})