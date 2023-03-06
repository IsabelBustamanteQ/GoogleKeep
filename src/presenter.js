import Nota from "./Nota.js";
import ListaNotas from "./ListaNotas.js";

const formularioNota = document.querySelector("#formularioNota");
const tituloNota = document.querySelector("#tituloNota");
const descripcionNota = document.querySelector("#descripcionNota");
const listaNotasHTML = document.querySelector("#listaNotasHTML");
const BotonBuscar = document.getElementById("botonBuscar");

let listaNotasNueva = new ListaNotas();

formularioNota.addEventListener("submit", (event) => {
  event.preventDefault();
  let notaNueva = new Nota(tituloNota.value, descripcionNota.value);
  listaNotasNueva.AgregarNota(notaNueva);
  listaNotasHTML.innerHTML = "";
  listaNotasNueva.MostrarLista();
});

BotonBuscar.onclick = () => {
  const textoABuscar = document.querySelector("#textoABuscar").value;
  listaNotasNueva.BuscarNotas(textoABuscar);
};
