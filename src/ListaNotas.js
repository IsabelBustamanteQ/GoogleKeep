class ListaNotas{
    constructor(){
        this.lista=[];
    }
    GetLista(){
        return this.lista;
    }
    AgregarNota(nota){
        this.lista.unshift(nota);
    }
    BorrarNota(index){
        this.lista.splice(index,1);
        this.MostrarLista();
    }
    EditarNota(index){
        const tituloNota = document.querySelector("#tituloNota");
        let tituloNuevo=this.lista[index].GetTitulo();
        const descripcionNota = document.querySelector("#descripcionNota");
        let descripcionNueva=this.lista[index].GetDescripcion();
        tituloNota.value = tituloNuevo;
        descripcionNota.value = descripcionNueva;
        this.BorrarNota(index);
    }
    
    MostrarLista(filtrarNotas=null){
        listaNotasHTML.innerText="";
        const ListaAMostrar=filtrarNotas || this.lista;
        ListaAMostrar.forEach((nota, index) => {
            const listItem = document.createElement("li");
            const title = document.createElement("h3");
            const content = document.createElement("p");
            const deleteButton=document.createElement("button");
            const botonEditar = document.createElement("button");

            title.innerText = nota.GetTitulo();
            content.innerText = nota.GetDescripcion();
            deleteButton.innerText="Eliminar";
            botonEditar.innerText="Editar";
    
            deleteButton.onclick=()=> {
                this.BorrarNota(index);
            };

            botonEditar.onclick=()=>{
                this.EditarNota(index);
            }
            listItem.appendChild(title);
            listItem.appendChild(content);
            listItem.appendChild(deleteButton);
            listItem.appendChild(botonEditar);
            listaNotasHTML.appendChild(listItem);
        });
    }
    BuscarNotas(buscado){
        console.log('buscado: %s',buscado)
        let coincidencias=this.GetLista().filter((nota)=> {
            const titulo= nota.titulo.toLowerCase();
            const descripcion = nota.descripcion.toLowerCase();
            return titulo.includes(buscado.toLowerCase()) || descripcion.includes(buscado.toLowerCase());
        });
        this.MostrarLista(coincidencias);
    }
    
}
export default ListaNotas;