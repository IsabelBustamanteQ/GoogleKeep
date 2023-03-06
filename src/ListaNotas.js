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
    
    MostrarLista(filtrarNotas=null){
        listaNotasHTML.innerText="";
        const ListaAMostrar=filtrarNotas || this.lista;
        ListaAMostrar.forEach((nota, index) => {
            const listItem = document.createElement("li");
            const title = document.createElement("h3");
            const content = document.createElement("p");
            const deleteButton=document.createElement("button");
            //console.log(index);
            title.innerText = nota.GetTitulo();
            content.innerText = nota.GetDescripcion();
            deleteButton.innerText="Eliminar";
    
            deleteButton.onclick=()=> {
                this.BorrarNota(index);
            };
            listItem.appendChild(title);
            listItem.appendChild(content);
            listItem.appendChild(deleteButton);
            listaNotasHTML.appendChild(listItem);
        });
    }
    BuscarNotas(buscado){
        console.log('buscado: %s',buscado)
        let coincidencias=this.GetLista().filter((nota)=> {
            const titulo= nota.titulo.toLowerCase();
            return titulo.includes(buscado.toLowerCase());
        });
        this.MostrarLista(coincidencias);
    }
    
}
export default ListaNotas;