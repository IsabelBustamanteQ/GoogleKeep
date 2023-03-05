import Nota from "./Nota.js";
import ListaNotas from "./ListaNotas.js";

const formularioNota = document.querySelector("#formularioNota");
const tituloNota = document.querySelector("#tituloNota");
const descrpcionNota=document.querySelector("#descripcionNota");
const contenidoTituloNota = document.querySelector("#contenidoTituloNota");
const contenidoDescripcionNota = document.querySelector("#contenidoDescripcionNota");
const listaNotasHTML = document.querySelector("#listaNotasHTML");

let listaNotasNueva = new ListaNotas();
formularioNota.addEventListener("submit", event => {
    event.preventDefault();
    let notaNueva=new Nota(tituloNota.value,descrpcionNota.value);
    listaNotasNueva.AgregarNota(notaNueva);
    listaNotasHTML.innerHTML = "";
    listaNotasNueva.GetLista().forEach((nota) => {
        const listItem = document.createElement("li");
        const title = document.createElement("h3");
        const content = document.createElement("p");
    
        title.innerText = nota.GetTitulo();
        content.innerText = nota.GetDescripcion();
    
        listItem.appendChild(title);
        listItem.appendChild(content);
        listaNotasHTML.appendChild(listItem);
    });
    contenidoTituloNota.innerHTML = "<p>" + "Título introducido: " + notaNueva.GetTitulo() + "</p>";
    contenidoDescripcionNota.innerHTML="<p>"+"Descripción Introducida: "+notaNueva.GetDescripcion()+"</p>";
})
