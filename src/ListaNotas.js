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
    
    MostrarLista(){
        listaNotasHTML.innerText="";
        this.lista.forEach((nota, index) => {
            const listItem = document.createElement("li");
            const title = document.createElement("h3");
            const content = document.createElement("p");
            const deleteButton=document.createElement("button");
            console.log(index);
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
    
}
export default ListaNotas;