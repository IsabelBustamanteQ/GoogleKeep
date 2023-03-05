class ListaNotas{
    constructor(){
        this.lista=[];
    }
    GetLista(){
        return this.lista;
    }
    AgregarNota(nota){
        this.lista.push(nota)
    }
}
export default ListaNotas;